// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg-15kw2IG0nKuaSBOmvIocZQX6ajZ8KM",
  authDomain: "immersync-b5dad.firebaseapp.com",
  projectId: "immersync-b5dad",
  storageBucket: "immersync-b5dad.firebasestorage.app",
  messagingSenderId: "791359262255",
  appId: "1:791359262255:web:0fa09315b8bd22c5d980da",
  measurementId: "G-JM6RL2KG9T"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Make Firebase globally accessible for other scripts
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
window.firebaseAnalytics = analytics;

console.log("✅ Firebase initialized successfully");
