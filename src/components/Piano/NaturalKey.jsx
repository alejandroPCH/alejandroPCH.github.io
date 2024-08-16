export function NaturalKey({props}) {
  const [key, keyPressed, keyReleased, index] = props
  return (
    <div
      className={`row-span-2 lg:w-28 xl:w-36 2xl:w-44 border border-black rounded-md border-white ${
        index == 0 ? "border" : "border-l-0 border-r-1"
      }`}
      key={key.event_code}
    >
      <button
        data= {`${(index*10) %3} ${(index*10) %4} ${(index*10) %7}`}
        className={`shadow-inset bg-white overflow-hidden transition-all duration-100 ease-out ${
          (keyReleased.note != keyPressed.note &&
            keyPressed.note == key.note) ||
          key.is_pressed
            ? "opacity-20"
            : "opacity-0"
        } h-full w-full`}
      ></button>
    </div>
  )
}
