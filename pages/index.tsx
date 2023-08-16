import Head from "next/head"

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
      <main className="w-96 h-96 border">
        <div>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center py-2">
            GitaVerse
          </h1>
        </div>
      </main>
    </div>
  )
}
