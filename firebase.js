// Firebase config for Firebox
const firebaseConfig = {
  apiKey: "AIzaSyDuwfB4TUpLg4-zX6YJwD8JvR3I0p4sB3c",
  authDomain: "gg444-7fac7.firebaseapp.com",
  projectId: "gg444-7fac7",
  storageBucket: "gg444-7fac7.appspot.com",
  messagingSenderId: "494789110558",
  appId: "1:494789110558:web:xxxxxxxxxxxxxxxx" // <-- get from Firebase Console
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
