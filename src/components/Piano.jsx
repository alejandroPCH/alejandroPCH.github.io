import { useEffect, useState, useRef } from "react"
import PianoInstrument from "@/utils/Piano"
import { NaturalKey } from "./NaturalKey"
import { AccidentalKey } from "./AccidentalKey"

export default function Piano() {
  const [piano] = useState(new PianoInstrument())
  const [key_pressed, setKeyPressed] = useState("")
  const [key_released, setKeyReleased] = useState("")

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
    piano.getKey(e.code).then(async (key) => {
      setKeyPressed(key)
      setKeyReleased(false)
      await piano.playNote(key)
    })
  }

  async function handleKeyUp(e) {
    piano.getKey(e.code).then(async (key) => {
      setKeyPressed(key)
      setKeyReleased(key)

      await piano.releaseNote(key)
    })
  }
  
  return (
    <div className="h-screen flex justify-center items-center w-full z-10">
      <div className="grid grid-rows-2 grid-cols-1 h-full max-h-[30rem] relative">
      <div className="grid grid-cols-9 row-start-1 grid-rows-2 col-start-1 row-span-2">
        {piano.keys.map((key, index) => {
          
          return (
            !key.accidental && // if key.accidental is false, then is a Natural Key
              <NaturalKey
                key={key.event_code}
                props={[key, key_pressed, key_released, index]}
              />
          )
        })}
        </div>
        <div className="flex flex-row row-start-1 row-1 col-start-1 ml-[3.4rem]">
        {piano.keys.map((key) => {
            let extra_spacing = (key.note.includes("D#") || key.note.includes("A#")) && "mr-[7rem]"  // if D# or A# key

            return (
              key.accidental &&
                <AccidentalKey 
                  key={key.event_code}
                  props={[key, key_pressed, key_released]}
                  className={"mr-[1rem] "+ extra_spacing}
                />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
