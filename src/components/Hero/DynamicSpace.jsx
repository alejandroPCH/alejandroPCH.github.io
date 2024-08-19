import React from "react"
import { motion } from "framer-motion"
export default function Planets({yScroll}) {
  return (
    <div>
      <motion.img
        src={"/space-ground.svg"}
        className="w-screen h-auto absolute bottom-0 z-10"
        alt=""
      />
      <motion.img
        src={"/stars.svg"}
        style={{ x: yScroll }}
        className="w-screen h-auto absolute top-0 z-0 hidden md:block "
        alt=""
      />
      <motion.img
        src={"/satellite.svg"}
        drag
        whileDrag={{ cursor: "grabbing" }}
        className="w-20 h-auto absolute  inset-[14.5%] lg:inset-[44.5%] mt-[6rem] lg:-mt-[9rem] z-40 cursor-grab"
        alt=""
      />
      <motion.img
        src={"/planet-medium-left.svg"}
        drag
        whileDrag={{ cursor: "grabbing" }}
        className="w-[15.5rem] hidden lg:block h-auto absolute inset-[28%] top-[3.2rem]  bg-top z-40 cursor-grab"
        alt=""
      />
      <motion.img
        src={"/planet-large-right.svg"}
        drag
        whileDrag={{ cursor: "grabbing" }}
        className="w-[30rem] h-auto absolute inset-[76%] top-[2rem] z-40 cursor-grab"
        alt=""
      />
      <div className="w-full h-full absolute z-90 bottom-0 overflow-y-hidden">
        <motion.img
          src={"/lava-particles.svg"}
          className="absolute w-auto h-auto bottom-0  z-20 "
          style={{ y: yScroll }}
          alt=""
        />
      </div>
    </div>
  )
}
