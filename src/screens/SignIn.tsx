import { getAuth } from "firebase/auth";
import React from "react";
import { auth } from "../auth/firebaseAuth";
import { SignInForm } from "./SignIn/SignInForm";

export default function SignIn() {
    return (
        <div>
            <h1> Sign In </h1>
            <SignInForm />
        </div>
    );
}
