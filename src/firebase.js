// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzX3eereix_emRKFhweRFHEcS-ao45OQw",
  authDomain: "alma-web-8d8e7.firebaseapp.com",
  projectId: "alma-web-8d8e7",
  storageBucket: "alma-web-8d8e7.appspot.com",
  messagingSenderId: "179906584918",
  appId: "1:179906584918:web:c9faad9f9df5fb120776f7",
  measurementId: "G-3SSHCG5YV0",
  databaseURL: "https://alma-web-8d8e7-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const analytics = getAnalytics(app);
export {app,database};