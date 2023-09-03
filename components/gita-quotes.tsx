import { useQuery } from "@tanstack/react-query"
import { chapter_verse } from "../lib/gita"
import { getRandomNumber } from "../lib/utils"
import { GitaAPI } from "../lib/types"

export default function GitaQuotes() {
  const random_number = getRandomNumber(18)
  const chapter = chapter_verse[random_number]

  const {
    data: quotes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gita-quote", chapter.chapter, chapter.verse],
    refetchOnWindowFocus: false,
    retry: 5,
    queryFn: async () => {
      const repsonse: GitaAPI = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter.chapter}/verses/${chapter.verse}/`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GITA_API_KEY,
            "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      ).then((res) => res.json())
      return repsonse
    },
  })

  console.log(quotes)

  if (isLoading) {
    return (
      <div className="flex gap-2 items-center">
        <p>Take a breathe!</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-loader-2 animate-spin text-2xl"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    )
  }

  return (
    <div className="text-center mt-8 flex flex-col gap-4">
      <p className="text-2xl">{quotes.text}</p>
      <p>{quotes.translations[0].description}</p>
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi
        vitae ullam unde consequatur voluptates amet, reiciendis tenetur
        laboriosam quisquam?
      </p> */}
    </div>
  )
}
