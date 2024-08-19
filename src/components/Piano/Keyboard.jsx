import {useState, useEffect} from "react"
import { NaturalKey } from "./NaturalKey"
import { AccidentalKey } from "./AccidentalKey"
import PianoInstrument from "@/utils/Piano"
import {animate} from "framer-motion"

export default function Keyboard({counter}) {

  const [keyPressed, setKeyPressed] = useState("")
  const [keyReleased, setKeyReleased] = useState("")
  const [piano] = useState(new PianoInstrument())
  useEffect(() => {
    piano.make()
  }, [piano])

  useEffect(() => {
    if (!piano.synth) return

    document.addEventListener("keydown", async (e) => await handleKeyDown(e))
    document.addEventListener("keyup", async (e) => await handleKeyUp(e))

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  async function handleKeyDown(e) {
    const activeElement = document.activeElement

    const cancelKey =
      activeElement.tagName == "INPUT" || activeElement.tagName == "TEXTAREA"

    !cancelKey &&
      piano.getKey(e.code).then(async (key) => {
        setKeyPressed(key)
        setKeyReleased(false)
        await piano.playNote(key)
        animate(counter, 10, {
          duration: 0.5,
          ease: "easeOut",
        })
      })
  }

  async function handleKeyUp(e) {
    piano.getKey(e.code).then(async (key) => {
      setKeyPressed(key)
      setKeyReleased(key)
      animate(counter, 0, {
        duration: 0.5,
        ease: "easeIn",
      })

      await piano.releaseNote(key)
    })
  }

  return (
    <div className="hidden lg:grid grid-rows-2 grid-cols-1 h-full relative">
      <div className="flex flex-row row-start-1 grid-rows-2 col-start-1 row-span-2  w-full">
        {piano.keys.map((key, index) => {
          return (
            !key.accidental && ( // if key.accidental is false, then is a Natural Key
              <NaturalKey
                key={key.event_code}
                props={[key, keyPressed, keyReleased, index]}
              />
            )
          )
        })}
      </div>
      <div className="row-1 row-start-1 col-start-1 w-full lg:ml-[3.9rem] xl:ml-[5.2rem] 2xl:ml-[7rem] ">
        <div className="flex flex-row  h-full w-full ">
          {piano.keys.map((key, index) => {
            let extra_spacing =
              key.note.includes("D#") || key.note.includes("A#")
                ? "lg:mr-[8rem] xl:mr-[11rem] 2xl:mr-[14rem]" // if D# or A# key
                : "lg:mr-[1rem] xl:mr-[2rem] 2xl:mr-[3rem]"

            return (
              key.accidental && (
                <AccidentalKey
                  key={key.event_code}
                  props={[key, keyPressed, keyReleased, index]}
                  className={extra_spacing}
                />
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}
