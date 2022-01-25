import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCGcoug27JGMmJyPFzTaZv1Yb_eSYcUuz8",
    authDomain: "clone-be6aa.firebaseapp.com",
    projectId: "clone-be6aa",
    storageBucket: "clone-be6aa.appspot.com",
    messagingSenderId: "1095824570687",
    appId: "1:1095824570687:web:879a93472ebb5d9932bb8a",
    measurementId: "G-SVC9B0TEX9"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const storage = getStorage(app);
  //const provider=new GoogleAuthProvider()
  
  export { db, auth, storage };