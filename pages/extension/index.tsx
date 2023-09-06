import Head from "next/head"
import GitaQuotes from "../../components/gita-quotes"

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
        <div className="custom-background m-4 w-[30rem] aspect-square flex flex-col items-center justify-center p-4 rounded-lg text-lg text-[#FFD700] font-extrabold drop-shadow-2xl">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center py-2 mb-auto text-transparent bg-gradient-to-r from-[#FFD700] to-[#f6ff00] bg-clip-text">
            GitaVerse
          </h1>
          <div className="mb-auto">
            <GitaQuotes />
          </div>
        </div>
      </main>
    </div>
  )
}
