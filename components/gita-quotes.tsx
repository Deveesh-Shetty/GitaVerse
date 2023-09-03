import { useQuery } from "@tanstack/react-query"
import { chapter_verse } from "../lib/gita"
import { getRandomNumber } from "../lib/utils"

export default function GitaQuotes() {
  const random_number = getRandomNumber(18)
  const chapter = chapter_verse[random_number]

  const {
    data: quotes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gita-quote"],
    refetchOnWindowFocus: false,
    retry: 5,
    queryFn: async () => {
      return fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter.chapter}/verses/${chapter.verse}/`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GITA_API_KEY,
            "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      ).then((res) => res.json())
    },
  })

  console.log(quotes)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>
        Chapter {quotes.chapter_number} - Verse {quotes.verse_number}
      </p>
      <p>{quotes.translations[0].description}</p>
    </div>
  )
}
