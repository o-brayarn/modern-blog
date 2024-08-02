import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBtBm9yR59KcoxWPo3Dls2vIEPJTiUFNBk",
  authDomain: "my-react-blog-4319b.firebaseapp.com",
  projectId: "my-react-blog-4319b",
  storageBucket: "my-react-blog-4319b.appspot.com",
  messagingSenderId: "931682543285",
  appId: "1:931682543285:web:c5a50bbb3b4163bb9340fc",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
