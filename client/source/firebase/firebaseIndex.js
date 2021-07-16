// import firebase from "firebase/app";
import firebase from 'firebase';
import 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGB3OKXVaG0IYzpPi7ylptT3fbCDdmngA",
  authDomain: "healthybilly-e23c5.firebaseapp.com",
  projectId: "healthybilly-e23c5",
  storageBucket: "healthybilly-e23c5.appspot.com",
  messagingSenderId: "979645366565",
  appId: "1:979645366565:web:d8a3e4df56a725dadc9acc",
  measurementId: "G-XH8CMGWTBE"
};

// let instance

// export default function getFirebase() {
//     if (typeof window !== "undefined") {
//         if (instance) return instance
//         instance = firebase.initializeApp(firebaseConfig);
//         return instance
//     }

//     return null
// }



firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// firestore methods

// export const generateUserDocument = async (user, additionalData) => {
//   if (!user) return;
//   const userRef = firestore.doc(`users/${user.uid}`);
//   const data = await userRef.get();
//   if (!data.exists) {
//     const { email, displayName } = user;
//     try {
//       userRef.set({
//         displayName,
//         email,
//         ...additionalData
//       });
//     } catch (error) {
//       console.error("Error creating user document", error);
//     }
//   }
// }
