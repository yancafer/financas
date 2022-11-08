import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAMo7auEYf0HTCoMj_Qwa_HEGRDrYwaHv4",
    authDomain: "financas-19d85.firebaseapp.com",
    databaseURL: "https://financas-19d85-default-rtdb.firebaseio.com",
    projectId: "financas-19d85",
    storageBucket: "financas-19d85.appspot.com",
    messagingSenderId: "301986162999",
    appId: "1:301986162999:web:bc74931e10b0cacacb92b2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;