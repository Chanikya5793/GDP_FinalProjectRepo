// firebase/config.ts
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTMZXtpOkejuJnr8GtczJ70-uUZ8s5aVk",
  authDomain: "nwmsuwellnessapp.firebaseapp.com",
  projectId: "nwmsuwellnessapp",
  storageBucket: "nwmsuwellnessapp.firebasestorage.app",
  messagingSenderId: "988316304665",
  appId: "1:988316304665:web:e74a140f3f5554857d3188",
  measurementId: "G-K6HX9YBF8S"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
