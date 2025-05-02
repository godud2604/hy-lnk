import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

interface LoginButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export function LoginButton({ className, size = "default" }: LoginButtonProps) {
  const handleGoogleLogin = async () => {
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
    }
  };

  return (
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
  );
}