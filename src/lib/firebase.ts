
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrAc4MO8Q6VE_9kT-ON8pnYGbp6M6N9Bs",
  authDomain: "team-sportivo-demo.firebaseapp.com",
  projectId: "team-sportivo-demo",
  storageBucket: "team-sportivo-demo.appspot.com",
  messagingSenderId: "108972595312",
  appId: "1:108972595312:web:ff9683c9d3a3d74c50b0d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, storage, auth };
