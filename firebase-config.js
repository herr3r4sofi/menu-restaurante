// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyv8n3pvVZYlvH810QGwFnRtXqTt16j0I",
  authDomain: "menu-restaurante-ctp-caea6.firebaseapp.com",
  projectId: "menu-restaurante-ctp-caea6",
  storageBucket: "menu-restaurante-ctp-caea6.firebasestorage.app",
  messagingSenderId: "944935053169",
  appId: "1:944935053169:web:b25cb292b759d3ccf7b8d0",
  measurementId: "G-VHE36NWRTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


