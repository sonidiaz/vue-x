import firebase from 'firebase/app';
import firestore from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDhyEYYDn2XvwYAYH6JCnDDvDeZeXo25ao",
    authDomain: "crud-firebase-e13a9.firebaseapp.com",
    databaseURL: "https://crud-firebase-e13a9.firebaseio.com",
    projectId: "crud-firebase-e13a9",
    storageBucket: "crud-firebase-e13a9.appspot.com",
    messagingSenderId: "533043736024"
  };
  const firebaseApp = firebase.initializeApp(config);
  export default firebaseApp.firestore();