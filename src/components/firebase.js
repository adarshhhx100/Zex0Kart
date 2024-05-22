// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlG6YbU8LX-m_Eozi1_GJ6hKhJp7UED0U",
  authDomain: "z-kart-app.firebaseapp.com",
  projectId: "z-kart-app",
  storageBucket: "z-kart-app.appspot.com",
  messagingSenderId: "898001983377",
  appId: "1:898001983377:web:421aeec11eacbbaec7ac30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
