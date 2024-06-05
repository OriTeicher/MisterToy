import React, { useEffect, useState } from "react"
import { newtonsCradle } from "ldrs"
import { IoMdArrowRoundBack as ArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"

export default function Loader() {
  const NO_TOYS_MSG = "No toys found... but heres some: 🪀🧸 :P"
  const [isNotFoundMsgOn, setIsNotFoundMsgOn] = useState(false)

  useEffect(() => {
    newtonsCradle.register()
    setTimeout(() => {
      setIsNotFoundMsgOn(true)
    }, 3000)
  })
  return (
    <div className="loader-container flex justify-center align-center h-100">
      {isNotFoundMsgOn ? (
        <Link to={"/toy"} className="flex-col justify-center">
          <h1>{NO_TOYS_MSG}</h1>
          <ArrowBack className="arrow-back" style={{ fontSize: "100px" }} />
        </Link>
      ) : (
        <l-newtons-cradle
          size="200"
          speed="1.5"
          color="white"
        ></l-newtons-cradle>
      )}
    </div>
  )
}
