import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitaVerse</title>
        <meta
          name="description"
          content="Chrome Extension for motivational Quotes from Gita"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
