import Head from "next/head"
import PianoContainer from "@/components/Piano/PianoContainer"
import HeroContainer from "@/components/Hero/HeroContainer"
import dynamic from "next/dynamic"
import ContactContainer from "@/components/Contact/ContactContainer"

const SidebarContainer = dynamic(()=> import("@/components/Sidebar/SidebarContainer"), {ssr:false})

export default function Home({role}) {
  

  return (
    <>
      <Head>
        <title>Alejandro Pachas</title>
        <meta name="description" content="Alejandro's web page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SidebarContainer />
        <PianoContainer />
        <HeroContainer />
        <div  style={{background:"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%"}}  className="absolute bg-white w-screen h-16 z-30 mt-[-4rem]" ></div> 
        <ContactContainer />
      </main>
    </>
  )
}
