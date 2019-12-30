import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAt6qwbyxMAFPtrdt-v7QgMciNHm5EJwLg",
  authDomain: "todoist-6798c.firebaseapp.com",
  databaseURL: "https://todoist-6798c.firebaseio.com",
  projectId: "todoist-6798c",
  storageBucket: "todoist-6798c.appspot.com",
  messagingSenderId: "696475397060",
  appId: "1:696475397060:web:f372f93fd4b7b5dd2dd291",
  measurementId: "G-6RC2K1PRN8"
});

export { firebaseConfig as firebase };
