import { GitaAPI } from "../lib/types"

interface Quotes {
  quotes: GitaAPI
}

export default function GitaQuotes({ quotes }: Quotes) {
  return (
    <div>
      <p>
        Chapter {quotes.chapter_number} - Verse {quotes.verse_number}
      </p>
      <p>{quotes.translations[0].description}</p>
    </div>
  )
}
