export function NaturalKey({props}) {
  const [key, key_pressed, key_released, index] = props
  return (
    <div
      className={`row-span-2 w-24 border border-black rounded-md border-white ${
        index == 0 ? "border" : "border-l-0 border-r-1"
      }`}
      key={key.event_code}
    >
      <button
        className={`shadow-inset bg-white overflow-hidden transition-all duration-100 ease-out ${
          (key_released.note != key_pressed.note &&
            key_pressed.note == key.note) ||
          key.is_pressed
            ? "opacity-50"
            : "opacity-0"
        } h-full w-full`}
      ></button>
    </div>
  )
}
