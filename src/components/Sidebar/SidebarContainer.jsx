import ToggleButton from "@/components/Sidebar/ToggleButton"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import LinkList from "@/components/Sidebar/LinkList"

export default function SidebarContainer() {
  const [open, setOpen] = useState(false)
  const sidebar = useRef(null)
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "sprin66g",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  useEffect(() => {
    function handleClickOutside(event) {
      
      if (sidebar.current.contains(event.target) == false) { // click outside of sidebar
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center fixed  z-50 lg:z-40 cursor-pointer"
        animate={open ? "open" : "closed"}
        ref={sidebar}
      >
        <motion.div
         className="bg-white text-black fixed w-full sm:w-[25rem] top-0 left-0 h-full flex flex-col items-center justify-center "
         variants={variants}
         onClick={() => setOpen((prev) => !prev)}
        >
          <ToggleButton setOpen={setOpen} />
          <LinkList />
        </motion.div>
        
      </motion.div>

    </>
  )
}
