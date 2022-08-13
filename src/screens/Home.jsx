import { getAuth } from "firebase/auth";
import React from "react";
import { useRecoilValue } from "recoil";
import { auth } from "../auth/firebaseAuth";
import { userAtom } from "../store/auth/userAtom";
import { SignInForm } from "./SignIn/SignInForm";

export default function Home() {
  const user = useRecoilValue(userAtom);
  return (
    <div>
      <h1> Oh Hello,{user} </h1>
    </div>
  );
}
