import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXsvC9Sq0f6feTeNvE38yuUP65RhaLrss",
    authDomain: "reactredux-e5e1f.firebaseapp.com",
    databaseURL: "https://reactredux-e5e1f.firebaseio.com",
    projectId: "reactredux-e5e1f",
    storageBucket: "reactredux-e5e1f.appspot.com",
    messagingSenderId: "318749248278"
  };
  firebase.initializeApp(config);
  firebase.firestore.settings({ timestampsInSnapshots:true });

  export default firebase;

