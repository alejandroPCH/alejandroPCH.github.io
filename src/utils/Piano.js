import * as Tone from "tone"

export default class Piano {
  keys = []
  synth = {}

  constructor() {
    this.keys = [
      new Key("KeyA", "C4"),
      new Key("KeyS", "D4"),
      new Key("KeyD", "E4"),
      new Key("KeyF", "F4"),
      new Key("KeyG", "G4"),
      new Key("KeyH", "A4"),
      new Key("KeyJ", "B4"),
      new Key("KeyK", "C5"),
      new Key("KeyL", "D5"),
    ]
  }

  get synth() {
    return this.synth
  }

  make() {
    ;async () => await Tone.start()

    this.synth = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },

      baseUrl: "https://tonejs.github.io/audio/salamander/",
      release: 10,

      onload: () => {
        synth.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5)
      },
    }).toDestination()
  }

  async getKey(event_code) {
    return new Promise((resolve, reject) => {
      this.keys.map((key) => {
        if (event_code == key.event_code) {
          resolve(key)
        }
      })
    })
  }
  async playNote(key) {
    if (key.is_pressed == true) return
    // el e.code está trayendo otra tecla al forzar el error
    // https://codepen.io/jend-codes/pen/PoNbGGX
    key.pressed = true

    await Tone.start()
    // se está apretando una tecla cuando estoy apretando otra
    // y es porque estoy cargando una tecla previa
    // debo resetear las teclas
    /* const now = Tone.now() */

    return Tone.loaded().then(() => {
      this.synth.triggerAttack(key.note)
    })
  }

  async releaseNote(key) {
    key.pressed = false
    await Tone.start()

    return Tone.loaded().then(() => {
      this.synth.triggerRelease(key.note)
    })
  }
}

class Key {
  event_code = ""
  note = ""
  pressed = false

  constructor(event_code, note) {
    this.event_code = event_code
    this.note = note
  }

  get event_code() {
    return this.event_code
  }

  get is_pressed() {
    return this.pressed
  }

  get note() {
    return this.note
  }

  set pressed(pressed) {
    this.pressed = pressed
  }
}
