import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface LoginButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function LoginButton({ className, size = "default" }: LoginButtonProps) {
  const [showWebViewWarning, setShowWebViewWarning] = useState(false);

  // 웹뷰 환경인지 감지하는 함수
  const isRunningInWebView = () => {
    // iOS WebView 감지
    const isIosWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    
    // Android WebView 감지
    const isAndroidWebView = /wv|WebView/.test(navigator.userAgent) || 
      /Android.*Version\/[0-9]/.test(navigator.userAgent);
    
    // Facebook, Instagram 등 내장 브라우저 감지
    const isFacebookBrowser = /FBAN|FBAV/.test(navigator.userAgent);
    const isInstagramBrowser = /Instagram/.test(navigator.userAgent);
    
    // 카카오톡 웹뷰 감지
    const isKakaoTalkWebView = /KAKAOTALK/i.test(navigator.userAgent);
    
    return isIosWebView || isAndroidWebView || isFacebookBrowser || isInstagramBrowser || isKakaoTalkWebView;
  };

  // 시스템 브라우저에서 열기 함수
  const openInSystemBrowser = () => {
    // 현재 URL 가져오기
    const currentUrl = window.location.href;
    
    // 모바일 환경에서만 공유 API 사용
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && navigator.share) {
      navigator.share({
        title: "시스템 브라우저에서 열기",
        text: "로그인하려면 시스템 브라우저에서 열어주세요",
        url: currentUrl
      }).catch((error) => console.error("공유 실패:", error));
    } else {
      // 클립보드에 URL 복사
      navigator.clipboard.writeText(currentUrl)
        .then(() => alert("URL이 클립보드에 복사되었습니다. Chrome이나 Safari에서 붙여넣어 사용하세요."))
        .catch(() => alert("URL: " + currentUrl));
      
      // 새 창에서 시도 (일부 환경에서는 차단될 수 있음)
      try {
        window.open(currentUrl, "_system");
      } catch (error) {
        console.error("새 창 열기 실패:", error);
      }
    }
  };

  const handleGoogleLogin = async () => {
    // 웹뷰 환경 감지
    if (isRunningInWebView()) {
      setShowWebViewWarning(true);
      alert(
        "웹뷰(인앱 브라우저)에서는 Google 로그인이 제한됩니다.\n" +
        "Safari(iOS) 또는 Chrome(Android) 브라우저에서 열어주세요."
      );
      return;
    }
    
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
  
      // Google 로그인
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      // 토큰 갱신
      const idToken = await user.getIdToken(true);
  
      // 서버로 사용자 데이터 전송
      const response = await fetch("/api/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save user");
      }
  
      console.log("User saved successfully");
    } catch (error) {
      console.error("로그인 에러:", error);
      
      // Google OAuth 에러 추가 처리
      if (error instanceof Error && 
          (error.message.includes("web-storage-unsupported") ||
          error.message.includes("third-party-cookies-blocked"))) {
        alert(
          "브라우저 설정이 로그인을 차단하고 있습니다.\n" +
          "시스템 브라우저(Safari/Chrome)에서 쿠키 설정을 확인해주세요."
        );
      }
    }
  };

  return (
    <>
      <Button 
        className={cn(
          "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300",
          className
        )}
        size={size}
        onClick={handleGoogleLogin}
      >
        시작하기
      </Button>
      
      {showWebViewWarning && (
        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
          <p className="font-medium mb-2">안내: 웹뷰에서는 Google 로그인이 제한됩니다</p>
          <p className="mb-2">모바일 앱 내 브라우저(인스타그램, 페이스북, 카카오톡 등)에서는 Google 로그인이 불가능합니다.</p>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={openInSystemBrowser}
            className="w-full bg-white hover:bg-amber-100 border-amber-300 text-amber-800"
          >
            시스템 브라우저로 열기
          </Button>
        </div>
      )}
    </>
  );
}