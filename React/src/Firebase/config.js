import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4rPNFJFvGP-VxoK3uw5AjwNN9FSyl2fM",
  authDomain: "authendicationreact.firebaseapp.com",
  projectId: "authendicationreact",
  storageBucket: "authendicationreact.appspot.com",
  messagingSenderId: "723779961626",
  appId: "1:723779961626:web:63008c092dac1a143ce2a3",
  measurementId: "G-TGRVPTYEWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
