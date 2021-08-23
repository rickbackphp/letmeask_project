import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCDjFf9VtDjxN_UOsFgrLvq7L8fZXAcK_E",
    authDomain: "letmeask-v1-d2c2a.firebaseapp.com",
    databaseURL: "https://letmeask-v1-d2c2a-default-rtdb.firebaseio.com",
    projectId: "letmeask-v1-d2c2a",
    storageBucket: "letmeask-v1-d2c2a.appspot.com",
    messagingSenderId: "524686845665",
    appId: "1:524686845665:web:00a58d30fe2a29fa7b79a0"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }