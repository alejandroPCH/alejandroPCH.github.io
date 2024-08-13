import Head from "next/head"
import Piano from "@/components/Piano"
import Hero from "@/components/Hero"

export default function Home({role}) {

  return (
    <>
      <Head>
        <title>Alejandro Pachas</title>
        <meta name="description" content="Alejandro's web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Piano />
        <Hero />
      </main>
    </>
  )
}
