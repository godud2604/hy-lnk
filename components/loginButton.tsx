"use client"; 

import React from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // 로그인 성공 시 사용자 정보
      console.log("로그인 성공:", result.user);
      // 여기서 Firestore에 추가 정보 저장, 페이지 이동 등 후속 작업을 진행
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      구글 계정으로 로그인
    </button>
  );
}
