import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import admin from "firebase-admin";

const serviceAccount = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), 
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
};

const app = getApps().length > 0
  ? getApp()
  : initializeApp({
      credential: cert(serviceAccount),
    });

export const adminAuth = getAuth(app);
export const adminDb = admin.firestore();
