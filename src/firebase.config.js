import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpsL9HlgLfNEF0L_Y38P_VXi4q35l6Q2c",
  authDomain: "gappebar-207a9.firebaseapp.com",
  databaseURL:
    "https://default.firebaseio.com",
  projectId: "gappebar-207a9",
  storageBucket: "gappebar-207a9.appspot.com",
  messagingSenderId: "416532338157",
  appId: "1:416532338157:web:015e6757aba156853043e4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
