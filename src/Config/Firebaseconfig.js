
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfUrD-kShkN1hAhjeqnEUYO29HUmXYVCI",
  authDomain: "techhive-fca52.firebaseapp.com",
  projectId: "techhive-fca52",
  storageBucket: "techhive-fca52.appspot.com",
  messagingSenderId: "175897111953",
  appId: "1:175897111953:web:315d439629a9dbcb69fe30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const fireDB = getFirestore(app);