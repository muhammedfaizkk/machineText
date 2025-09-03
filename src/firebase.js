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


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD47jlhDn3qNqvsv4bZryoPnU-mAQlQvCg",
//   authDomain: "fashionhub-8521a.firebaseapp.com",
//   projectId: "fashionhub-8521a",
//   storageBucket: "fashionhub-8521a.firebasestorage.app",
//   messagingSenderId: "354404581636",
//   appId: "1:354404581636:web:779aee5f498eb353495051",
//   measurementId: "G-THB90J3WVW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



