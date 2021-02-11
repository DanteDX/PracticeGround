import React from "react";
import {db} from "../config/fireStore";

export default function Store() {
  const addData = () =>{
    db.collection('books').add({
        bookName:'An Introduction to Mechanics',
        bookAuthor:"Daniel Kleppner",
        bookTotalPage:100,
        bookPublisher:"Modern Physics Publications"
    });
    alert('Book Added to Firestore!');
  }
  const getData = async () =>{
      try{
        let snapshot = await db.collection('books').get();
        snapshot.docs.forEach(eachDoc =>{
            console.log("eachDocData",eachDoc.data());
            console.log("eachDocId",eachDoc.id);
            console.log("*********");
        });
      }catch(err){
        console.log('Error in getting all data from books collection');
        console.log(err);
      }
  }
  return (
    <>
      <div>
        This is Store Component
        <button className="text-green-700 font-bold px-10 py-4 border-green-700 border-4" onClick={e => addData()}>
          Click to add to Firestore
        </button>
        <button className="text-red-700 font-bold px-10 py-4 border-red-700 border-4" onClick={e => getData()}>
          Click to delete from firestore
        </button>
      </div>
    </>
  );
}
