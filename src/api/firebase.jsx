import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyA26CcVSbXMHFXJzEwAyxCtWZadUHEWVck",
  authDomain: "codigo369-1bac5.firebaseapp.com",
  databaseURL: "https://codigo369-1bac5-default-rtdb.firebaseio.com",
  projectId: "codigo369-1bac5",
  storageBucket: "codigo369-1bac5.appspot.com",
  messagingSenderId: "141771213499",
  appId: "1:141771213499:web:27c04345bd4276fedb779e"
};
var firebaseserviciosConfig = {
  apiKey: "AIzaSyAdmaGL5GXF6jcJ6AGucmoM8gr1l56VUog",
  authDomain: "servicioscodigo369.firebaseapp.com",
  projectId: "servicioscodigo369",
  storageBucket: "servicioscodigo369.appspot.com",
  messagingSenderId: "975615709087",
  appId: "1:975615709087:web:3c4313a74cf12938de77aa",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

const app2 = firebase.initializeApp(firebaseserviciosConfig, "other");
console.log(app.name); // "[DEFAULT]"
console.log(app2.name);
export const db2 = app2.firestore();
export const auth = getAuth(app);
