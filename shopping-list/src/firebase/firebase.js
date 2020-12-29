import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "lista-de-compras-29dc3.firebaseapp.com",
    projectId: "lista-de-compras-29dc3",
    storageBucket: "lista-de-compras-29dc3.appspot.com",
    messagingSenderId: "855560494763",
    appId: "1:855560494763:web:557b1401c0fc29615721ee",
    measurementId: "G-BZ2GE2QHR9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

export { db };