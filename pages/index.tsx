import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-gray-900 p-10 m-10 border-4 bg-pink-100 text-size-xl border-gray-900 rounded-full text-center text-lg font-extrabold">
        Index component
      </div>
    </div>
  )
}
