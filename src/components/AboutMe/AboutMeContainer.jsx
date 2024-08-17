import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Rocket from "./Rocket"
export default function () {
  const aboutMeContainer = useRef(null)
  const isInView = useInView(aboutMeContainer, {
    margin: "0px 0px -310px 0px",
    once: true,
  })
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      }
    },
  }
  return (
    <div className="h-screen relative overflow-hidden" ref={aboutMeContainer} id="about-me" >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-end lg:items-center justify-items-center h-full ">
        <Rocket isInView={isInView}/>

        <motion.div
          className="space-y-9 items-center mx-4 md:mx-16 md:ml-16 text-xl lg:text-2xl"
          initial={{ x: "-50%", opacity: 0 }}
          transition={{ duration: 1 }}
          animate={isInView && { x: 0, opacity: 1 }}
        >
          <p>
            Hey there! I'm Alejandro Pachas, a Software Engineer who's
            experienced in taking fullstack applications from scratch to
            production. My work includes developing web apps, creating backend
            servers, data engineering, and Discord bots!
          </p>

          <p>
            I'm a tech nerd, gaming enthusiast, and book lover based in Peru,
            <b> available worldwide</b>.
          </p>
        </motion.div>

        <div className="p-0 md:p-12">
          <motion.img
            src="/alejandro-photo.jpeg"
            animate={isInView && { scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            drag
            whileDrag={{ cursor: "grabbing" }}
            className="w-3/4 min-w-72 rounded-lg mx-auto  cursor-grab z-50"
          />
        </div>
      </div>
    </div>
  )
}
