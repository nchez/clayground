import React from "react";
import "./App.css";
import "firebase/compat/firestore";
import { SignInForm } from "./screens/SignIn/SignInForm";
import { loadAuth } from "./store/AuthStore";

function App() {
  // why did i do this i dont know
  const userToken = loadAuth();

  return (
    <div className="App">
      <header className="App-header">
        <SignInForm />
      </header>
    </div>
  );
}

export default App;
