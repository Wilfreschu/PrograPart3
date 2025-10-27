import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCc3YWo5VkUcjIad0z4kUctHYuveRYdB1g",
  authDomain: "demo05-a6533.firebaseapp.com",
  projectId: "demo05-a6533",
  storageBucket: "demo05-a6533.firebasestorage.app",
  messagingSenderId: "476750926021",
  appId: "1:476750926021:web:4cfc239d55178a0180e0ac"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()


