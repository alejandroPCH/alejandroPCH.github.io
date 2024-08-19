import React, { useEffect, useRef } from "react"
import anime from "animejs"
import { motion} from "framer-motion"
export default function DynamicHello({yScroll}) {
  
  const title = useRef(null)
  const hi = useRef(null)
  const name = useRef(null)

  useEffect(() => {
    anime({
      targets: hi.current,
      value: [0, 1],
      opacity: [0, 1],
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
      opacity: [0, 1],
    })
    anime({
      targets: title.current,
      translateX: ["-50%", "-0%"],
      easing: "easeOutSine",
      duration: 1000,
      delay: 1000,
      opacity: [0, 1],
    })
  }, [])

  return (
    <div className="flex w-full h-full my-auto justify-center items-center  overflow-y-hidden">
      <motion.div
        className="w-full z-20 text-stone-100 space-y-12 lg:space-y-5  lg:ml-32  flex justify-center flex-col lg:items-start items-center"
        style={{ y: yScroll }}
      >
        <h2
          className="font-bold  text-2xl sm:text-4xl lg:text-5xl"
          ref={hi}
        ></h2>
        <h2
          className="font-semibold text-3xl sm:text-6xl lg:text-7xl"
          ref={name}
        >
          I'm Alejandro.
        </h2>
        <h1 className="font-bold text-6xl sm:text-8xl lg:text-9xl" ref={title}>
          Software <br /> Engineer
        </h1>
      </motion.div>
    </div>
  )
}
