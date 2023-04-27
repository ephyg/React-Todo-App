import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfRc8LgDijQ0YlF7AtwBFEkfuX6mZAZDI",
    authDomain: "todo-app-cp-b3e1d.firebaseapp.com",
    projectId: "todo-app-cp-b3e1d",
    storageBucket: "todo-app-cp-b3e1d.appspot.com",
    messagingSenderId: "52676973475",
    appId: "1:52676973475:web:40931675de64e0e12b0016",
    measurementId: "G-26MG5YPGTW"
})
const db=firebaseApp.firestore();

export {db};