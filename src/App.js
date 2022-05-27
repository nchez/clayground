import React from "react";
import "./App.css";
import "firebase/compat/firestore";
import { SignInForm } from "./screens/SignIn/SignInForm";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Piece from "./screens/Piece";
import UserProfile from "./screens/UserProfile";

function App() {
  const variable = "this is props";
  return (
    <div className="App">
      <header className="App-header">
        <SignInForm />
      </header>
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
