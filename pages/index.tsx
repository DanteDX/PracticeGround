import React from "react";
import Link from "next/link";
import { functions } from "../config/firebaseFunctions";
import { useRecoilValue } from "recoil";
import { authState } from "./auth";


export default function Home() {
  const callHello = () => {
    const sayhello = functions.httpsCallable("sayhello");
    sayhello({ userName: "Shadman Martin Piyal" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const currentValue = useRecoilValue(authState);
  return (
    <>
      <Link href="/auth">
        <a  className="px-8 py-4 text-blue-800">Click here to go to Auth</a>
      </Link>
      <div>
        This is home component
        <p>
          currentAuthValue is
          {currentValue}
        </p>
        <button
          className="px-10 py-4 text-green-900 border-4 border-black"
          onClick={(e) => callHello()}
        >
          Click to call myHello function
        </button>
      </div>
    </>
  );
}
