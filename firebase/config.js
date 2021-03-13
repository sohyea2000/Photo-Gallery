import firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2cAwycgfxHDdzklrrUS8DxRwzevw923U",
    authDomain: "photo-gallery-55b85.firebaseapp.com",
    projectId: "photo-gallery-55b85",
    storageBucket: "photo-gallery-55b85.appspot.com",
    messagingSenderId: "310905172523",
    appId: "1:310905172523:web:7dc1863fab46c5c429706e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore,timestamp};