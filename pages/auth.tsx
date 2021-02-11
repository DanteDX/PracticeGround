import React from "react";
import {auth} from "../config/firebaseAuth";

export default function Auth(){
    const addUser = async () =>{
        try{
            const email = "piyal@martin.com";
            const password = "12344321";
            const credentials = await auth.createUserWithEmailAndPassword(email,password);
            console.log('New user has been created');
            console.log(credentials.user.uid);
        }catch(err){
            console.log("there was error in creating new user");
            console.log(err);
        }
    }
    return(
        <>
            <button className="text-green-900 px-8 py-4 border-green-800 border-4" onClick={e => addUser()}>
                Click to create new user
            </button>
        </>
    )
}