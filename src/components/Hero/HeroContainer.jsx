import { useEffect, useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import Planets from "./DynamicSpace"
import DynamicHello from "./DynamicHello"

export default function HeroContainer() {
  const hero = useRef(null)

  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    hero.current.scrollIntoView({ behavior: "instant" })
  }, [])

  return (
    <div
      className="h-screen relative "
      style={{
        background:
          "linear-gradient(345deg, rgba(141,68,197,1) 16%, rgba(47,130,254,1) 43%, rgba(27,10,104,1) 61%)",
      }}
      id="home"
      ref={hero}
    >
      <Planets yScroll={yScroll} />
      <DynamicHello yScroll={yScroll} />
    </div>
  )
}
