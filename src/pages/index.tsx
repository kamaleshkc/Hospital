import Head from 'next/head'
import Main from './main/index'



export default function Home() {
  return (
    <>
      <Head>
        <title>Madan Bhandari Hospital and Trauma Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/emblemofNepal.svg" />
      </Head>
      <main>
        <div>
          <Main></Main>
        </div>
      </main>
    </>
  )
}
