import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const randomnumber = functions.https.onRequest((req, res) => {
  const randomNumber = Math.round(Math.random() * 100);
  res.send(randomNumber.toString());
});

interface sayHelloInterface{
  userName: string;
}
export const sayhello = functions.https.onCall((data: sayHelloInterface, context) => {
  return `Hello is said by ${data.userName}`
});

export const newusersignup = functions.auth.user().onCreate((user):void => {
  console.log('Auth Trigger has been triggered');
});
