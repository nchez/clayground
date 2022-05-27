import React from "react";
import "./App.css";
import "firebase/compat/firestore";
import { SignInForm } from "./screens/SignIn/SignInForm";
import { getAuth } from "firebase/auth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInForm />
      </header>
    </div>
  );
}

export default App;
