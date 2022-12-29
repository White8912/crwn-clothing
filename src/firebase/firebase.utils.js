// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCJ1YqmFsS8Y98AgLK1UR-w6Qcz2oXEWrE",
  authDomain: "crwn-db-white.firebaseapp.com",
  projectId: "crwn-db-white",
  storageBucket: "crwn-db-white.appspot.com",
  messagingSenderId: "662846088264",
  appId: "1:662846088264:web:7ab376677d6b533d3ba47d",
  measurementId: "G-0V4BH761Z3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
