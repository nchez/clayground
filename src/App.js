import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Piece from "./pages/Piece";
import UserProfile from "./pages/UserProfile";

function App() {
  const variable = "this is props";
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={variable} />} />
          <Route path="/user" element={<UserProfile data={variable} />} />
          <Route path="/user/:pieceName" element={<Piece data={variable} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
