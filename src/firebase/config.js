import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA6tTJ6c07RmyIX9vg43rVAX4B2phTdGI",
    authDomain: "magoo-react-app.firebaseapp.com",
    projectId: "magoo-react-app",
    storageBucket: "magoo-react-app.appspot.com",
    messagingSenderId: "753049893313",
    appId: "1:753049893313:web:afa170a361c36b00c01740"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore =()=>{
    return firebase.firestore(app);
}