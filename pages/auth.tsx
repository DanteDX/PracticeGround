import React from "react";
import { auth } from "../config/firebaseAuth";
import { atom, useRecoilState } from "recoil";
import Link from "next/link";

export const authState = atom({
  key: "authStateKey",
  default: 10,
});

export default function Auth() {
  const [currentAuth, setCurrentState] = useRecoilState(authState);
  const addUser = async () => {
    try {
      const email = "nimki123@hone.com";
      const password = "12344321";
      const credentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("New user has been created");
      console.log(credentials.user.uid);
    } catch (err) {
      console.log("there was error in creating new user");
      console.log(err);
    }
  };
  const addAuth = () => {
    setCurrentState(currentAuth + 1);
    console.log("Current value has been set to", currentAuth);
  };
  return (
    <>
      <Link href="/">
        <a className="px-8 py-4 text-blue-800">Click here to go to index.tsx</a>
      </Link>
      <button
        className="text-green-900 px-8 py-4 border-green-800 border-4"
        onClick={(e) => addAuth()}
      >
        Add Auth
      </button>
      <button
        className="text-green-900 px-8 py-4 border-green-800 border-4"
        onClick={(e) => addUser()}
      >
        Click to create new user
      </button>
    </>
  );
}
