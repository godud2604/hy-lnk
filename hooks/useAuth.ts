"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export interface UserProfile {
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: any; // timestamp 등 적절한 타입으로 수정
}

interface AuthState {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
}

export default function useAuth(): AuthState {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase Auth의 인증 상태 변경 리스너 등록
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Firestore에서 해당 uid로 사용자 추가 정보 조회
        const docRef = doc(db, "users", firebaseUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data() as UserProfile);
        } else {
          // Firestore에 사용자 문서가 없는 경우 처리 (선택 사항)
          setUserProfile(null);
        }
      } else {
        // 인증되지 않은 상태
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    // 컴포넌트 언마운트 시 리스너 제거
    return () => unsubscribe();
  }, []);

  return { user, userProfile, loading };
}
