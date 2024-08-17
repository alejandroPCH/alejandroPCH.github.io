import React, { useRef, useState } from "react"
import { color, motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function Form({isInView}) {
  const [response, setResponse] = useState(false)
  const form = useRef(null)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }
  
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_EMAIL_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setResponse("Message sent!")
        },
        (error) => {
          console.error(error);
          
          setResponse(
            "Uhm... something failed. You can send me a message to this email: alejandropachas1@gmail.com"
          )
        }
      )
  }
  function isDisable() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return formValues.name.length > 0 &&
      formValues.email.length > 0 &&
      emailRegex.test(formValues.email) &&
      formValues.message.length > 0
      ? false
      : true
  }

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}
      className="flex flex-col space-y-4 w-full md:w-3/4"
    >
      <input
        type="text"
        required
        placeholder="Name"
        name="name"
        className="border-2 rounded border-gray-300 p-4"
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="email"
        required
        placeholder="Email"
        name="email"
        className="border-2 rounded border-gray-300 p-4"
        value={formValues.email}
        onChange={handleChange}
      />
      <textarea
        rows={8}
        placeholder="Message"
        name="message"
        className="border-2 rounded border-gray-300 p-4"
        value={formValues.message}
        onChange={handleChange}
      />
      <button
        className="p-5 disabled:bg-slate-500 transition duration-300 active:bg-violet-700 bg-violet-500 text-white"
        disabled={isDisable() ? true : false}
      >
        Send Email
      </button>
      <p className="">{response}</p>
    </motion.form>
  )
}
