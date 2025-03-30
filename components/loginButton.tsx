"use client"; 

import React from "react";
import { auth, db } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { Button } from "./ui/button";

export default function LoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // 로그인 성공 시 사용자 정보
      console.log("로그인 성공:", result.user);
      const user = result.user;
    
      // Firestore에서 해당 사용자의 문서 참조 생성 (users 컬렉션, 문서 ID는 user.uid)
      const userDocRef = doc(db, "users", user.uid);
      
      // 기존 문서가 있는지 확인
      const userSnap = await getDoc(userDocRef);

      if (!userSnap.exists()) {
        // 문서가 없으면 새로 생성 (기본 정보 저장)
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(), // 생성 시간 기록
        });
        console.log("새로운 사용자 문서를 생성했습니다.");
      } else {
        console.log("기존 사용자 문서가 이미 존재합니다.");
      }
      // 여기서 Firestore에 추가 정보 저장, 페이지 이동 등 후속 작업을 진행
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  console.log('sad')
  return (
    <Button variant="outline" className="border-lavender-200 hover:bg-lavender-50 text-primary" onClick={handleGoogleLogin}>
      로그인
    </Button>
  );
}
