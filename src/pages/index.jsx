import Head from 'next/head'
import { Inter } from '@next/font/google'
import Piano from '@/components/Piano'

/* import DynamicImport from '@/components/DynamicImport' */

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Alejandro Pachas</title>
        <meta name="description" content="Alejandro's web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='bg-white'>
        <p className='text-black bold text-4xl'>hi</p>
        <Piano />
      </main>
    </>
  )
}
