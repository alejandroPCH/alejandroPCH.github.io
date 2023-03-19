import Head from "next/head"
import Piano from "@/components/Piano"

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro Pachas</title>
        <meta name="description" content="Alejandro's web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white">
        <p className="text-black bold text-4xl">hi</p>
        <Piano />
      </main>
    </>
  )
}
