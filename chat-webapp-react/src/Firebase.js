import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn5W3SA5Q0frAvxbF47PGC-NpKsPPDUxw",
  authDomain: "slack-chat-app-2b374.firebaseapp.com",
  projectId: "slack-chat-app-2b374",
  storageBucket: "slack-chat-app-2b374.appspot.com",
  messagingSenderId: "1086436863445",
  appId: "1:1086436863445:web:a5798f9ea3ba0f9848615c"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

// const auth = firebase.auth();


// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider }

export default db;