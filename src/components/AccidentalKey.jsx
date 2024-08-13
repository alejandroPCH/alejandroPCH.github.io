export function AccidentalKey({props, className}) {
  const [key, key_pressed, key_released] = props
  return (
<div
  className={"w-20 border rounded-md border-red-400  border-t-0  " + className}
  key={key.event_code}
>
  <button
    className={`shadow-inset bg-red-400 overflow-hidden transition-all duration-100 ease-out ${
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