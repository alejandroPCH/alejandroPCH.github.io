import { useEffect, useRef } from "react"
import anime from "animejs"

export default function Hero() {
  const title = useRef(null)
  const hi = useRef(null)
  const name = useRef(null)
  useEffect(() => {
    anime({
      targets: title.current,
      translateX: ["-100%", "-0%"],
      easing: "easeOutSine",
      duration: 500,
    })

    anime({
      targets: hi.current,
      value: [0, 1],
      easing: "linear",
      duration: 1000,
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
        hi.current.innerHTML = texts[textIndex]
      },
    })

    anime({
      targets: name.current,
      translateX: ["-100%", "-0%"],
      easing: "linear",

      duration: 500,
      delay:1000

    })

  }, [])

  useEffect(() => {
    title.current.scrollIntoView({ behavior: "instant" })
  }, [])

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-white bold text-4xl text-center" ref={hi}></h1>
      <h1 className="text-white bold text-4xl text-center" ref={name}>I'm Alejandro</h1>
      <h1 className="text-white bold text-4xl text-center" ref={title}>
        I'm a Software Engineer
      </h1>
    </div>
  )
}
