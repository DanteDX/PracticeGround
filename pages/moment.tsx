import Head from 'next/head';
import moment from "moment-timezone";
export default function Moment() {
  const handleThis = () =>{
    console.log((moment(new Date())["_i"]));
    console.log(1);
    console.log(moment(new Date()).format("DD-MM-YYYY"));
    console.log(2);
    console.log(moment(new Date()).add(1,"days"));
    console.log(3);
    console.log(moment(new Date()).add(2,"days").format("DD-MM-YYYY"));
    console.log(4);
    console.log(moment(new Date()).add(1,"months").format("DD-MM-YYYY"));
    console.log(5);
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={e => handleThis()} className="p-4 m-4 bg-green-300 border-gray-900 border-8 cursor-pointer">
        Click
      </button>
    </div>
  )
}
