import firebase from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseApp = firebase;