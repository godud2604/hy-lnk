import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-xl mb-4 inline-block">
              에듀테크단
            </Link>
            {/* <p className="text-sm text-muted-foreground mt-2">
              체험단 활동과 콘텐츠 제작을 위한 모든 정보와 도구를 제공합니다.
            </p> */}
          </div>
          <div>
            <h3 className="font-medium mb-3">콘텐츠</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/curriculum" className="text-muted-foreground hover:text-foreground transition-colors">
                  6일 완성 커리큘럼
                </Link>
              </li>
              {/* <li>
                <Link href="/tips" className="text-muted-foreground hover:text-foreground transition-colors">
                  체험단 꿀팁
                </Link>
              </li> */}
              {/* <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-foreground transition-colors">
                  일정 관리
                </Link>
              </li> */}
              {/* <li>
                <Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
                  자동화 툴
                </Link>
              </li>
              <li>
                <Link href="/monetization" className="text-muted-foreground hover:text-foreground transition-colors">
                  수익 창출
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="font-medium mb-3">회사 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-medium mb-3">법적 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 에듀테크단. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

