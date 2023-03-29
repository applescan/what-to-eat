import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>What to eat</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Header></Header>
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  )
}
