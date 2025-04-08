import { adminDb } from "@/lib/firebase-admin";
import puppeteer from "puppeteer";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { id, pw } = await req.json();

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized", "--disable-popup-blocking"],
  });

  const page = await browser.newPage();
  await page.goto("https://stylec.co.kr/auth/login?url=/index.php", { waitUntil: "networkidle0" });

  // 1. 스타일씨 로그인 페이지: 카카오 로그인 버튼 클릭
  await page.waitForSelector('button.kakao_login', { timeout: 10000 });
  await page.click('button.kakao_login');

  // 2. 카카오 로그인 폼 등장 기다리기
  await page.waitForSelector('input[name="loginId"]', { timeout: 10000 });
  await page.type('input[name="loginId"]', id, { delay: 100 });
  await page.type('input[name="password"]', pw, { delay: 100 });

  // 3. 로그인 버튼 클릭
  await page.click('button[type="submit"].btn_g.highlight.submit');

  console.log("✅ 사용자 휴대폰 카카오톡 인증 대기 중...");

  try {
    await page.waitForSelector('.info_state', { timeout: 10000 });
    console.log("✅ '카카오 인증 대기' 화면 감지됨");
    await page.waitForSelector('.info_state', { hidden: true, timeout: 90 * 1000 });
    console.log("✅ 카카오톡 인증 완료");
    // @typescript-eslint/no-unused-vars
  } catch (err: any) {
    console.log("⚠️ '카카오 대기 화면' 없이 넘어가는 경우 (문제 아님)");
  }

  // 4. '계속하기' 버튼 클릭 및 리다이렉션
  try {
    await page.waitForSelector('button.btn_agree', { timeout: 10000 });
    console.log("✅ '계속하기' 버튼 감지됨");

    await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle0" }),
      page.click('button.btn_agree'),
    ]);
    console.log("✅ '계속하기' 버튼 클릭 및 리다이렉션 완료");
    // @typescript-eslint/no-unused-vars
  } catch (err: any) {
    console.log("⚠️ '계속하기' 버튼 없는 경우 (자동 리다이렉션 가능)");
  }

  const activePage = page; // 이제 popup 안 기다리고 기존 page 사용

  // 5. 메인 페이지에서 'MY 이동' 버튼 클릭
  await activePage.waitForSelector('a._more.btn__more', { timeout: 10000 });
  await activePage.click('a._more.btn__more');
  console.log("✅ MY페이지 이동 버튼 클릭 완료");

  // 6. 마이페이지로 이동했는지 확인 (새로운 element 등장 기다림)
  console.log("✅ 마이페이지 로딩 완료");

  // 7. '체험단' 버튼 클릭 (ul > li:nth-child(4) > button)
  await activePage.waitForSelector('ul._ui._line_tab_btn_list.only-mobile li._ui._line_tab_btn.line1:nth-child(4) > button', { timeout: 10000 });
  console.log("✅ '체험단' 버튼 감지 완료");
  await activePage.click('ul._ui._line_tab_btn_list.only-mobile li._ui._line_tab_btn.line1:nth-child(4) > button');
  console.log("✅ '체험단' 버튼 클릭 완료");

  // 8. 체험단 당첨내역 페이지 로딩 확인
  await activePage.waitForSelector('ul.my_trial_list', { timeout: 10000 });
  console.log("✅ 체험단 당첨내역 페이지 로딩 완료");

  // 8. 체험단 당첨내역 페이지로 이동했는지 확인
  await activePage.waitForSelector('ul.my_trial_list', { timeout: 10000 });
  console.log("✅ 체험단 당첨내역 페이지 로딩 완료");

  // 9. 당첨내역 크롤링
  const items = await page.$$eval('ul.my_trial_list > li', (elements) => {
    const today = new Date();

    return elements.map((el) => {
      const dayLeftText = el.querySelector('.text-orange .spartan')?.textContent?.trim() || '';
      const dayLeft = parseInt(dayLeftText) || 0;

      const deadlineDate = new Date(today);
      deadlineDate.setDate(deadlineDate.getDate() + dayLeft);
      const deadline = deadlineDate.toISOString().split('T')[0]; // "YYYY-MM-DD"

      const title = el.querySelector('p.fw500.ft14.line-20.ellipsis2')?.textContent?.trim() || '';
      const type = el.querySelector('div._badge._type')?.textContent?.trim() || '';

      const priceText = el.querySelector('span._badge.outline')?.textContent?.trim() || '';
      const price = priceText.replace(/[^\d]/g, ''); // 숫자만 추출

      const writeStatus = el.querySelector('div._warning_badge')?.textContent?.trim() || '작성완료';

      const platformIcon = el.querySelector('ul._info_types_v2 i')?.className || '';
      let platform = '';
      if (platformIcon.includes('naverblog')) platform = '블로그';
      else if (platformIcon.includes('instagramreels')) platform = '인스타그램';
      else platform = '기타';

      return {
        deadline,        // 최종 마감일
        title,           // 제품명
        type,            // 체험 유형
        price,           // 가격
        writeStatus,     // 작성 여부
        platform,        // 플랫폼 (블로그, 인스타 등)
        platformSite: "stylec", // 저장할 플랫폼 사이트명 (여기서는 stylec)
      };
    });
  });

  console.log("✅ 크롤링 성공:", items);

  // 11. Firestore 저장
  const batch = adminDb.batch();

  items.forEach(item => {
    const platformSite = item.platformSite || 'unknown';
    const docRef = adminDb.collection(`trials/${platformSite}/list`).doc(); // 플랫폼별 저장
    batch.set(docRef, {
      ...item,
      createdAt: new Date(),
    });
  });

  await batch.commit();
  console.log("✅ 플랫폼별 Firestore 저장 완료");

  await browser.close();

  return new Response(JSON.stringify({ message: "크롤링 및 저장 완료" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}