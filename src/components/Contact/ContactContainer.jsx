import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Form from "@/components/Contact/Form"
import Phone from "./Phone"

export default function ContactContainer() {
  const contactContainer = useRef(null)

  const isInView = useInView(contactContainer, {
    margin: "0px 0px -310px 0px",
    once: true,
  })

  return (
    <div className="h-screen" ref={contactContainer} id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center h-full ">
        <div className="self-end lg:self-center">
          <motion.h2
            className="font-bold text-5xl sm:text-7xl md:text-9xl text-center"
            initial={{ x: "-50%", opacity: 0 }}
            transition={{ duration: 1 }}
            animate={isInView && { x: 0, opacity: 1 }}
          >
            Let's Talk!
          </motion.h2>
          <motion.p
            className="text-md md:text-xl xl:text-2xl text-center mx-4 my-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Whether you want to work with me or just say hi, send me an email!
          </motion.p>
          <motion.div
            className="w-full flex justify-evenly my-12"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            animate={isInView && { opacity: 1 }}
          >
            <a target="_blank" href="https://www.linkedin.com/in/alejandropch/" ><img src="/linkedin.svg" className="w-10" /></a>
            <a target="_blank" href="https://github.com/alejandropch" ><img src="/github.svg" className="w-10" /></a>
          </motion.div>
        </div>
        <div className="relative w-full px-4  flex justify-center">
          <Phone isInView={isInView}/>
          <Form isInView={isInView} />
        </div>
      </div>
    </div>
  )
}
