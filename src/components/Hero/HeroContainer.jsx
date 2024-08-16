import { useEffect, useRef } from "react"
import anime from "animejs"
import { motion, useScroll, useTransform,  } from "framer-motion"

export default function HeroContainer() {
  const hero = useRef(null)
  const title = useRef(null)
  const hi = useRef(null)
  const name = useRef(null)
  
  const {scrollYProgress} = useScroll({
    target:hero,
    offset:["start start", "end start"]
  })

  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], )

  useEffect(() => {
    
    anime({
      targets: hi.current,
      value: [0, 1],
      opacity: [0,1],
      easing: "linear",
      duration: 1000,
      translateY: ["-50%", "-0%"],
      direction: "alternate",
      loop: false,
      update: function (anim) {
        const texts = [
          "Hola",
          "Bonjour",
          "こんにちは",
          "नमस्ते",
          "Ciao",
          "안녕하세요",
          "Hallo",
          "Olá",
          "你好",
          "Merhaba",
          "Hello",
        ]
        const textIndex = Math.floor(anim.progress / texts.length + 1) // 10% of the total animation time for each text
        hi.current.innerHTML = texts[textIndex] + "!"
      },
    })

    anime({
      targets: name.current,
      translateX: ["-50%", "-0%"],
      easing: "linear",
      duration: 600,
      
      opacity: [0,1]
    })
    anime({
      targets: title.current,
      translateX: ["-50%", "-0%"],
      easing: "easeOutSine",
      duration: 1000,
      delay: 1000,
      opacity: [0,1]
    }) 
  }, [])

  useEffect(() => {
    hero.current.scrollIntoView({ behavior: "instant" })
  }, [])

  return (
    <div className="h-screen relative " style={{
            background: "linear-gradient(345deg, rgba(141,68,197,1) 16%, rgba(47,130,254,1) 43%, rgba(27,10,104,1) 61%)"
    }} id="home" ref={hero}>
    
      <motion.img src={"/space-ground.svg"} className="w-screen h-auto absolute bottom-0 z-10" alt="" />  
      <motion.img src={"/stars.svg"} style={{x:yScroll}} className="w-screen h-auto absolute top-0 z-0 hidden md:block " alt="" />
      <motion.img src={"/satellite.svg"} /* style={{y:yScroll}} */ drag whileDrag={{cursor:'grabbing'}} className="w-20 h-auto absolute  inset-[14.5%] lg:inset-[44.5%] mt-[6rem] lg:-mt-[9rem] z-40 cursor-grab" alt="" />
      <motion.img src={"/planet-medium-left.svg"} /* style={{y:yScroll}} */ drag whileDrag={{cursor:'grabbing'}} className="w-[15.5rem] hidden lg:block h-auto absolute inset-[28%] top-[3.2rem]  bg-top z-40 cursor-grab" alt="" />
      <motion.img src={"/planet-large-right.svg"} /* style={{y:yScroll}} */ drag whileDrag={{cursor:'grabbing'}}  className="w-[30rem] h-auto absolute inset-[76%] top-[2rem] z-40 cursor-grab" alt="" />
      <div className="w-full h-full absolute z-90 bottom-0 overflow-y-hidden">
        <motion.img src={"/lava-particles.svg"} className="absolute w-auto h-auto bottom-0  z-20 " style={{y:yScroll}} alt="" />
      </div>

      <div className="flex w-full h-full my-auto justify-center items-center  overflow-y-hidden">
        <motion.div className="w-full z-0 text-stone-100 space-y-12 lg:space-y-5  lg:ml-32  flex justify-center flex-col lg:items-start items-center z-30" style={{y:yScroll}}>
          <h2 className="font-bold  text-2xl sm:text-4xl lg:text-5xl" ref={hi}></h2>
          <h2 className="font-semibold text-3xl sm:text-6xl lg:text-7xl" ref={name}>
            I'm Alejandro.
          </h2>
          <h1 className="font-bold text-6xl sm:text-8xl lg:text-9xl" ref={title}>
            Software <br/> Engineer
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
