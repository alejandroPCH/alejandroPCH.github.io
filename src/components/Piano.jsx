import { useEffect, useState, useRef } from "react"
import PianoInstrument from "@/utils/Piano"
import { Key } from "./Key"

export default function Piano() {
  const [piano, setPiano] = useState(new PianoInstrument())
  const [key_pressed, setKeyPressed] = useState("")
  const [key_released, setKeyReleased] = useState("")

  useEffect(() => {
    piano.make()
  }, [])

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
    <div className="w-full flex justify-center items-center h-96 relative">
      {piano.keys.map((key, index) => (
        <Key
          key={key.event_code}
          index={index}
          props={key}
          key_pressed={key_pressed}
          key_released={key_released}
        />
      ))}
    </div>
  )
}
