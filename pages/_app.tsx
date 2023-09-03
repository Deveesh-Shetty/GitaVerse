import type { AppProps } from "next/app"
import "./globals.css"
import QueryWrapper from "../components/query-wrapper"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryWrapper>
      <Component {...pageProps} />
    </QueryWrapper>
  )
}
