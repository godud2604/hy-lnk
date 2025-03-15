from http.server import BaseHTTPRequestHandler
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import base64
from http import HTTPStatus

def login_to_chvu(user_id, password):
    # 헤드리스 Chrome 옵션 설정
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    
    # WebDriver 초기화
    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        # 체험뷰 로그인 페이지 이동
        driver.get("https://chvu.co.kr/login")
        
        # 대기 설정
        wait = WebDriverWait(driver, 10)
        
        # "리뷰어 로그인" 버튼 클릭
        reviewer_login_button = wait.until(
            EC.element_to_be_clickable((By.CLASS_NAME, "login__Selector-sc-1woga07-4.sprob"))
        )
        reviewer_login_button.click()
        
        # 아이디, 비밀번호 입력
        id_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input.login__InputID-sc-1woga07-6.liquGb"))
        )
        pw_input = wait.until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input.login__InputPW-sc-1woga07-7.eGXWnl"))
        )
        
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
            pass
        
        if error_message:
            return {"error": error_message}
            
        # 캠페인 데이터 수집 (scripts/main.py의 로직)
        # ...
        
        # 예시 데이터 (실제로는 크롤링 데이터)
        campaigns = [
            {
                "id": "campaign_1",
                "title": "예시 캠페인",
                "status": "진행중",
                "details": "캠페인 세부 정보"
            }
        ]
        
        return {"campaigns": campaigns}
    
    finally:
        driver.quit()

# Vercel의 Python 함수 최신 형식
def handler(request):
    if request.method != 'POST':
        return {
            "statusCode": 405,
            "body": json.dumps({"error": "Method Not Allowed"}),
            "headers": {
                "Content-Type": "application/json"
            }
        }
    
    try:
        body = json.loads(request.body)
        user_id = body.get('userId')
        password = body.get('password')
        
        if not user_id or not password:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "아이디와 비밀번호를 입력해주세요"}),
                "headers": {
                    "Content-Type": "application/json"
                }
            }
        
        # 로그인 함수 호출
        result = login_to_chvu(user_id, password)
        
        return {
            "statusCode": 200,
            "body": json.dumps(result, ensure_ascii=False),
            "headers": {
                "Content-Type": "application/json"
            }
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)}),
            "headers": {
                "Content-Type": "application/json"
            }
        } 