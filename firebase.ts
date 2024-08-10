import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFEcgG6eqi36sTAgAoJKEuZ9hipifKsLw",
  authDomain: "boxdrive-a101b.firebaseapp.com",
  projectId: "boxdrive-a101b",
  storageBucket: "boxdrive-a101b.appspot.com",
  messagingSenderId: "494633470698",
  appId: "1:494633470698:web:83fbdfa84dcedc3d506593",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
