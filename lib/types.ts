export interface GitaAPI {
  id: number
  verse_number: number
  chapter_number: number
  slug: string
  text: string
  transliteration: string
  word_meanings: string
  translations: Commentary[]
  commentaries: Commentary[]
}

export interface Commentary {
  id: number
  description: string
  author_name: string
  language: Language
}

export type Language = "sanskrit" | "hindi" | "english"
