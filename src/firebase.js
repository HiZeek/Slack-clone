import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBls5USy6xe8eiYweREnVt4Q_o8KFWtDlg",
  authDomain: "slack-clone-33cdd.firebaseapp.com",
  projectId: "slack-clone-33cdd",
  storageBucket: "slack-clone-33cdd.appspot.com",
  messagingSenderId: "484379271041",
  appId: "1:484379271041:web:90604f32b944fc096ad280",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
