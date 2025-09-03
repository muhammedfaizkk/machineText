import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD47jlhDn3qNqvsv4bZryoPnU-mAQlQvCg",
  authDomain: "fashionhub-8521a.firebaseapp.com",
  projectId: "fashionhub-8521a",
  storageBucket: "fashionhub-8521a.firebasestorage.app",
  messagingSenderId: "354404581636",
  appId: "1:354404581636:web:779aee5f498eb353495051",
  measurementId: "G-THB90J3WVW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


