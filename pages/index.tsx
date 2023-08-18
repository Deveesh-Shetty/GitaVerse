import Head from "next/head"
import GitaQuotes from "../components/gita-quotes"
import { getRandomNumber } from "../lib/utils"
import { chapter_verse } from "../lib/gita"
import { GitaAPI } from "../lib/types"

export async function getStaticProps() {
  const random_number = getRandomNumber(18)
  const chapter = chapter_verse[random_number]

  const res = await fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter.chapter}/verses/${chapter.verse}/`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_APP_GITA_API_KEY,
        "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
  const quotes = await res.json()

  return {
    props: {
      quotes,
    },
    revalidate: 60,
  }
}

interface Quotes {
  quotes: GitaAPI
}

export default function Home({ quotes }: Quotes) {
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
          <GitaQuotes quotes={quotes} />
        </div>
      </main>
    </div>
  )
}
