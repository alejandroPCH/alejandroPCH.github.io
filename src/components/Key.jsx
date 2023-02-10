export function Key({ index, props: key, key_pressed }) {

  return (
    <div className={`relative h-full w-24 border border-black rounded-md ${index == 0 ? 'border' : 'border-l-0 border-r-1'}`} key={key.event_code}>
      <button className={`shadow-inset bg-black overflow-hidden transition-all duration-100 ease-out ${key_pressed.note == key.note || key.is_pressed ? 'opacity-50' : 'opacity-0'} h-full w-full`}>
      </button>
      <p className='absolute inset-0 text-black flex items-center justify-center w-full'>{key.is_pressed ? 'opacity-50' : 'opacity-0'}</p>

    </div>
  )
}