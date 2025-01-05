import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion"
import Keyboard from "./Keyboard"
import { useRef } from "react"

export default function PianoContainer() {
  const pianoContainer = useRef(null)

  const isInView = useInView(pianoContainer, {
    margin: "-400px 0px 0px 0px",
  })

  const counter = useMotionValue(0)
  const stop = useTransform(counter, [0, 10], ["#000", "#2d78f1"])
  const background = useMotionTemplate`linear-gradient(0deg, rgba(27,10,104,1) 0%, ${stop} 100%)`

  return (
    <motion.div
      className="h-screen flex-col flex justify-center items-center w-full z-10 pt-28 pb-12 px-12 min-h-[42rem]"
      style={{
        background,
      }}
      ref={pianoContainer}
      id="play-piano"
    >
      <Keyboard counter={counter} />
      <motion.div
        className="mt-8 hidden lg:flex items-center justify-center space-x-24 w-full text-slate-100"
        initial={{ opacity: 0 }}
        animate={isInView && { opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div>
          <p>keys</p>
        </div>
        <div>
          <p>&nbsp; W &nbsp;E &emsp; T&nbsp; Y&nbsp; U &emsp; O</p>
          <p>
            A &nbsp; S&nbsp; D&nbsp; F&nbsp; G&nbsp; H&nbsp; J&nbsp; K&nbsp; L{" "}
          </p>
        </div>
      </motion.div>
      <div>
        <h1 className="block lg:hidden mx-4 font-bold text-4xl sm:text-5xl md:text-8xl  text-center">
          Piano Available <br /> On Desktop!
        </h1>
      </div>
    </motion.div>
  )
}
