// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgwUI1kQ7sN1r9cOaBizajEET7aTHUItI",
  authDomain: "fooddeliverytt-cef6b.firebaseapp.com",
  projectId: "fooddeliverytt-cef6b",
  storageBucket: "fooddeliverytt-cef6b.firebasestorage.app",
  messagingSenderId: "181896806972",
  appId: "1:181896806972:web:97b0de26f15df92e4fb939",
  measurementId: "G-55SKS3TB0V"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase}