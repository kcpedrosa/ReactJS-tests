import firebase from 'firebase/app';//it was firebase/app
import 'firebase/database';
import 'firebase/auth'
 
let firebaseConfig = {
    apiKey: "AIzaSyDIoP05K91Kz6UQd9ExD0mTfUsjpV09sTs",
    authDomain: "reactapp-89dcc.firebaseapp.com",
    databaseURL: "https://reactapp-89dcc.firebaseio.com",
    projectId: "reactapp-89dcc",
    storageBucket: "reactapp-89dcc.appspot.com",
    messagingSenderId: "574994651213",
    appId: "1:574994651213:web:6c2b2db6ca19d81faa2404",
    measurementId: "G-N01YJ8584D"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)}
 
export default firebase;