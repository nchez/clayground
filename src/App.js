import React, { useEffect } from "react";
import "./App.css";
import "firebase/compat/firestore";
import { SignInForm } from "./screens/SignIn/SignInForm";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Piece from "./screens/Piece";
import UserProfile from "./screens/UserProfile";
import { RecoilRoot, useRecoilValue } from "recoil";
import { authStateListener } from "./auth/firebaseAuth";
import SignIn from "./screens/SignIn";
import { userAtom } from "./store/auth/userAtom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home data={variable} />} />
          <Route path="/user" element={<UserProfile data={variable} />} />
          <Route path="/user/:pieceName" element={<Piece data={variable} />} />
        </Routes>
      </Router>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

function AppRouter() {
  const user = useRecoilValue(userAtom);

  console.log({ USER: user });

  return (
    <Router>{user ? <SignedInNavigator /> : <SignedOutNavigator />}</Router>
  );
}

function SignedOutNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

function SignedInNavigator() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/user/:pieceName" element={<Piece />} />
    </Routes>
  );
}

export default App;
