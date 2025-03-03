import warnings
warnings.filterwarnings('ignore')  # 모든 경고 무시

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys
import json
import time

def main():
    # 커맨드 라인 인자 받기 (이제 user_id와 password만 필요)
    if len(sys.argv) < 3:
        print("Usage: python main.py <user_id> <password>")
        sys.exit(1)
    
    user_id = sys.argv[1]
    password = sys.argv[2]
    
    # 웹 드라이버 실행 (ChromeDriver 필요)
    driver = webdriver.Chrome()
    
    try:
        # 체험뷰 로그인 페이지 이동
        driver.get("https://chvu.co.kr/login")  # 실제 로그인 페이지 URL로 변경
        
        # 대기 설정
        wait = WebDriverWait(driver, 10)
        
        # "리뷰어 로그인" 버튼 클릭
        reviewer_login_button = wait.until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login__Selector-sc-1woga07-4.sprob"))
        )
        reviewer_login_button.click()
        
        # 아이디, 비밀번호 입력 필드 찾기
        id_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input.login__InputID-sc-1woga07-6.liquGb"))
        )
        pw_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input.login__InputPW-sc-1woga07-7.eGXWnl"))
        )
        
        # 로그인 정보 입력
        id_input.send_keys(user_id)
        pw_input.send_keys(password)
        
        # 로그인 버튼 클릭
        login_button = wait.until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login__SubmitButton-sc-1woga07-8.hTiPCC"))
        )
        login_button.click()
        
        # 로그인 실패 확인
        error_message = None
        try:
            error_message = WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.CLASS_NAME, "login-error-message"))
            ).text
        except:
            pass  # 에러 메시지가 없으면 로그인 성공
        
        if error_message:
            result = {"error": error_message}
            print(json.dumps(result, ensure_ascii=False))
            return
            
        # 로그인 후 대기
        wait.until(EC.url_changes("https://chvu.co.kr/login"))
        
        # 로그인 성공 후 마이 캠페인 페이지로 이동
        driver.get("https://chvu.co.kr/myPageRv")
        
        # "미제출" 버튼 클릭 (실제 버튼 클래스명/텍스트 확인 필요)
        try:
            unsubmitted_button = wait.until(
                EC.element_to_be_clickable((
                    By.XPATH,
                    "//div[@class='MyPageBoardRv__HidePC-sc-1dg3pfb-3 ehRENO' and normalize-space(text())='미제출']"
                ))
            )
            unsubmitted_button.click()
            time.sleep(2)
        except Exception as e:
            print("미제출 버튼 클릭 실패:", e)
        
        # 데이터 수집
        campaigns = []
        
        try:
            wait.until(
                EC.presence_of_element_located((By.CLASS_NAME, "CardFlexBoxRv__FlexWrap-sc-7o8xct-0.yMhqi"))
            )
            
            campaign_wrappers = driver.find_elements(
                By.CSS_SELECTOR, "[class*='CardFlexBoxRv__CardWrapper']"
            )
            
            for i, wrapper in enumerate(campaign_wrappers):
                campaign_id = "unknown"
                try:
                    a_tag = wrapper.find_element(By.TAG_NAME, "a")
                    href = a_tag.get_attribute("href")
                    if "/campaign/" in href:
                        campaign_id = href.split("/campaign/")[1]
                except Exception as e:
                    print(f"ID 추출 중 오류: {e}")
                
                title = "제목 없음"
                try:
                    title_element = wrapper.find_element(
                        By.CSS_SELECTOR, "[class*='FlexibleCard__Title']"
                    )
                    title = title_element.text
                except Exception as e:
                    print(f"제목 추출 중 오류: {e}")
                
                status = "상태 정보 없음"
                try:
                    status_element = wrapper.find_element(
                        By.CSS_SELECTOR, "[class*='FlexibleCard__ItemHeader']"
                    )
                    status = status_element.text
                except Exception as e:
                    print(f"상태 추출 중 오류: {e}")
                
                details = "세부 정보 없음"
                try:
                    details_element = wrapper.find_element(
                        By.CSS_SELECTOR, "[class*='FlexibleCard__Details']"
                    )
                    details = details_element.text
                except Exception as e:
                    print(f"세부 정보 추출 중 오류: {e}")
                
                campaign = {
                    "id": campaign_id,
                    "title": title,
                    "status": status,
                    "details": details
                }
                
                campaigns.append(campaign)
                
        except Exception as e:
            print(f"요소를 찾는 중 오류 발생: {e}")
        
        # 각 캠페인 페이지에서 추가 정보 추출
        for campaign in campaigns:
            campaign_id = campaign.get("id")
            if campaign_id == "unknown":
                continue
            
            campaign_url = f"https://chvu.co.kr/campaign/{campaign_id}"
            driver.get(campaign_url)
            
            try:
                wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))
                time.sleep(0.5)
                full_text = driver.find_element(By.TAG_NAME, "body").text
                html_source = driver.page_source
                
                campaign["full_text"] = full_text
                campaign["html_source"] = html_source
            except Exception as e:
                print(f"캠페인 {campaign_id} 페이지에서 정보 추출 실패: {e}")
                campaign["full_text"] = "정보 추출 실패"
                campaign["html_source"] = "정보 추출 실패"
            
            try:
                review_deadline_element = WebDriverWait(driver, 15).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, ".CampaignMain__InfoDesc-sc-v3fvdj-22"))
                )
                review_deadline = review_deadline_element.text
            except Exception as e:
                print(f"캠페인 {campaign_id} 페이지에서 리뷰 마감일 정보 추출 실패: {e}")
                review_deadline = "리뷰 마감일 정보 없음"
            
            campaign["review_deadline"] = review_deadline
        
        result = {"campaigns": campaigns}
        print(json.dumps(result, ensure_ascii=False))
            
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
