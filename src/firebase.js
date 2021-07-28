import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyApx-j2P77oZlOrra7x-n_vJPoK0VFOoWU",
    authDomain: "linkedin-clone-fa59a.firebaseapp.com",
    projectId: "linkedin-clone-fa59a",
    storageBucket: "linkedin-clone-fa59a.appspot.com",
    messagingSenderId: "1055121348654",
    appId: "1:1055121348654:web:8be4b3e2acedc12389e7bf"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  export {db, auth};