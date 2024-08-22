import { motion } from "framer-motion"

export default function LinkList() {
  const items = ["Play Piano", "Home", "About Me","Contact"]
  const listVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  }
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-10"
      variants={listVariants}
    >
      {items.map((item) => {
        const id = (item.replace(/ /g, "-") || item).toLowerCase()

        return (
          <motion.a
            href={"#" + id}
            key={id}
            className="text-4xl z-50 w-full text-center py-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            >
              {item}
          </motion.a>
        )
      })}
    </motion.div>
  )
}
