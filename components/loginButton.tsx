import React from "react";
import { Button } from "./ui/button";

import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // API 호출로 Firestore에 사용자 데이터 저장
      const response = await fetch("/api/save-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }),
      });

      console.log("API response:", response);

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