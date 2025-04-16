// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiUgTYEPkYOa1ms4zmh6CaRfHH5N6sPPg",
  authDomain: "kanban-task-management-a-6fb25.firebaseapp.com",
  databaseURL:
    "https://kanban-task-management-a-6fb25-default-rtdb.firebaseio.com",
  projectId: "kanban-task-management-a-6fb25",
  storageBucket: "kanban-task-management-a-6fb25.firebasestorage.app",
  messagingSenderId: "920814707889",
  appId: "1:920814707889:web:215550b48b9a3e80f06e90",
  measurementId: "G-VKMBLV3THX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const database = getDatabase(app);
// const analytics = getAnalytics(app);

export { database };
