import React, { Suspense } from "react";
import "./App.css";
import "firebase/compat/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Piece from "./screens/Piece";
import Navbar from "./screens/components/Navbar";
import UserProfile from "./screens/UserProfile";
import { RecoilRoot, useRecoilValue } from "recoil";
import SignIn from "./screens/SignIn";
import { userAtom } from "./store/auth/userAtom";

function App() {
  return (
    <div className="App">
      <Suspense>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </Suspense>
    </div>
  );
}

function AppRouter() {
  const user = useRecoilValue(userAtom);

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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/user/:pieceName" element={<Piece />} />
      </Routes>
    </>
  );
}

export default App;
