import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3OddDOVz4kA-z7ctouy21Ocm6MiPSd0M",
  authDomain: "sureplus-35a3a.firebaseapp.com",
  projectId: "sureplus-35a3a",
  storageBucket: "sureplus-35a3a.appspot.com",
  messagingSenderId: "118507144532",
  appId: "1:118507144532:web:f3db1a508800dd66dc34c1",
  measurementId: "G-HZP18E234T",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
