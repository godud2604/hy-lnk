import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { uid, email, displayName, photoURL } = body;

    if (!uid || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
      email,
      displayName,
      photoURL,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ message: "User saved successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}
