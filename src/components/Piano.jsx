import { useContext, useEffect, useState } from 'react'
import * as Tone from 'tone'

export default function Piano(){
  const [synth, setSynth] = useState()
  
  useEffect(()=>{
    async() => await Tone.start()
    
    setSynth(new Tone.PolySynth(Tone.Synth).toDestination())

  },[])
  async function playNote(note){
    await Tone.start()
    const now = Tone.now()

    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C5", now + 1.5);
    synth.triggerAttack("E5", now + 2);
    synth.triggerRelease(["D4", "F4", "A4", "C5",'E5'], now+2);

    }

  return(
    <div className='w-full flex justify-between'>
      <button style={{color:"black"}} onClick={async() => await playNote('C4')}>C4</button>
      <button style={{color:"black"}} onClick={async() => await playNote('D4')}>D4</button>
      <button style={{color:"black"}} onClick={async() => await playNote('E4')}>E4</button>
    </div>

  )
}