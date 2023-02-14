import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDjvjlCyUox-2xgE-DvHOYAPauEDZM-WnU",
    authDomain: "discord-clone-a5455.firebaseapp.com",
    projectId: "discord-clone-a5455",
    storageBucket: "discord-clone-a5455.appspot.com",
    messagingSenderId: "773713174193",
    appId: "1:773713174193:web:0314bbe93d692eb60a0c90",
    measurementId: "G-PQ3F3LT3RG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider

export { auth, provider }
export default db; 
