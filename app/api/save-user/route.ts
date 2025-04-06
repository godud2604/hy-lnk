import { adminDb } from "@/lib/firebase-admin";
import { adminAuth } from "@/lib/firebase-admin"; 
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Request received");

    // 1. Authorization 헤더에서 토큰 꺼내기
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error("Authorization header missing or invalid");
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const idToken = authHeader.split('Bearer ')[1];
    console.log("ID Token:", idToken);

    // 2. ID Token 검증
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    console.log("Decoded Token:", decodedToken);

    const body = await req.json();
    console.log("Request Body:", body);

    const { uid, email, displayName, photoURL } = body;

    if (decodedToken.uid !== uid) {
      console.error("UID mismatch");
      return NextResponse.json({ error: "UID mismatch" }, { status: 403 });
    }

    if (!uid || !email) {
      console.error("Missing required fields");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userDocRef = adminDb.collection("users").doc(uid);

    // 3. Firestore에서 이미 존재하는지 확인
    const userDoc = await userDocRef.get();
    
    if (userDoc.exists) {
      console.log("User already exists");
      return NextResponse.json({ message: "User already exists" }, { status: 200 });
    }

    // 4. 없으면 Firestore에 저장
    await userDocRef.set({
      email,
      displayName,
      photoURL,
      createdAt: new Date(),
    });
    console.log("User saved successfully");

    return NextResponse.json({ message: "User saved successfully" }, { status: 201 });

  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}
