import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCAI-_Qq4ceoHuaQeX3iW8Z7AlAUxykqao",
    authDomain: "cv-react-5bd72.firebaseapp.com",
    databaseURL: "https://cv-react-5bd72-default-rtdb.firebaseio.com",
    projectId: "cv-react-5bd72",
    storageBucket: "cv-react-5bd72.appspot.com",
    messagingSenderId: "638854930053",
    appId: "1:638854930053:web:722d10e57e49d943d0d3ec",
    measurementId: "G-7LLDZ4CLNQ"
};

const fb = firebase.initializeApp(firebaseConfig)

export default fb;





