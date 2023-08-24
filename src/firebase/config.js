import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkx4bwcMoKqnSj2WPhb6EByOftfonUqgE",
    authDomain: "scamlk.firebaseapp.com",
    projectId: "scamlk",
    storageBucket: "scamlk.appspot.com",
    messagingSenderId: "1002862426559",
    appId: "1:1002862426559:web:f11b1e3183acbe73ef090a"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();

  export { projectFirestore };