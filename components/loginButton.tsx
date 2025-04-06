import React from "react";
import { Button } from "./ui/button";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginButton() {
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
    <Button variant="outline" className="border-lavender-200 hover:bg-lavender-50 text-primary" onClick={handleGoogleLogin}>
      로그인
    </Button>
  );
}