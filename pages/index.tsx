import Head from "next/head"
import GitaQuotes from "../components/gita-quotes"

export default function Home() {
  return (
    <div>
      <Head>
        <title>GitaVerse</title>
        <meta
          name="description"
          content="Chrome Extension for motivational Quotes from Gita"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex justify-center items-center">
        <div className="w-96 mx-auto">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center py-2">
            GitaVerse
          </h1>
          <GitaQuotes />
        </div>
      </main>
    </div>
  )
}
