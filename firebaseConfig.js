import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_6nUw_aqysoF0jaupTcU5pU8xNDAhUMY",
  authDomain: "portfolio-deyneka.firebaseapp.com",
  databaseURL:
    "https://portfolio-deyneka-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-deyneka",
  storageBucket: "portfolio-deyneka.appspot.com",
  messagingSenderId: "908361671087",
  appId: "1:908361671087:web:1aefe683f20fa87d850f5a",
  measurementId: "G-F8DBZWPPWM",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
