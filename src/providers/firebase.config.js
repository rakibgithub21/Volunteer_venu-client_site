// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVKroMDnAUMciRsu8Airys1ehpo-jtuqk",
    authDomain: "volunteer-venu-a11.firebaseapp.com",
    projectId: "volunteer-venu-a11",
    storageBucket: "volunteer-venu-a11.appspot.com",
    messagingSenderId: "959005236582",
    appId: "1:959005236582:web:364f17246e68ff1a777ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app