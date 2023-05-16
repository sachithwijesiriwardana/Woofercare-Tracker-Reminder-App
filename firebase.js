// Import the functions you need from the SDKs you need
import { getApps,getApp, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg8r_fxv_a4FJY5RVYMOD-_InPgSXyRmc",
  authDomain: "care-project-3eb46.firebaseapp.com",
  projectId: "care-project-3eb46",
  storageBucket: "care-project-3eb46.appspot.com",
  messagingSenderId: "822705210789",
  appId: "1:822705210789:web:32718c2b0303fba2c4544c",
};

const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore();

export { auth, db,storage };

