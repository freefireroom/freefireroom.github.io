// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set, get, update, push, onChildAdded, query, orderByChild, equalTo, remove } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_0DDMbQpvxaVipx8pS0Tzop2do9LMps",
  authDomain: "ffwebsite2-beb50.firebaseapp.com",
  databaseURL: "https://ffwebsite2-beb50-default-rtdb.firebaseio.com",
  projectId: "ffwebsite2-beb50",
  storageBucket: "ffwebsite2-beb50.firebasestorage.app",
  messagingSenderId: "344249855854",
  appId: "1:344249855854:web:f04f807a10ae37fde65b7f",
  measurementId: "G-8BLWD4Z0JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// Telegram Bot Configuration (YOUR DETAILS ADDED)
const TELEGRAM_BOT_TOKEN = "7978570517:AAFiIU0B-Z0PhYSuhIsj0LozYUqp9CjNDZw";
const ADMIN_TELEGRAM_CHAT_ID = "7011287841";

// Function to send messages to Telegram
function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: ADMIN_TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    })
  }).catch(err => console.error("Telegram error:", err));
}

// Export everything
export { 
  app, 
  analytics, 
  auth, 
  database, 
  ref, 
  set, 
  get, 
  update, 
  push, 
  remove,
  onChildAdded,
  query,
  orderByChild,
  equalTo,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendToTelegram
};