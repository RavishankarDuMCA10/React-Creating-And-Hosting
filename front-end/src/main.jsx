import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDsj7nV7iidjBLwuY6ERtTyiPDkgA84sZU",
  authDomain: "full-stack-react-f33f6.firebaseapp.com",
  projectId: "full-stack-react-f33f6",
  storageBucket: "full-stack-react-f33f6.firebasestorage.app",
  messagingSenderId: "44411950310",
  appId: "1:44411950310:web:1dd3a68aa8313dbdb51727",
  measurementId: "G-60EE64KHN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
