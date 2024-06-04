import React, { useEffect, useState } from "react"
import { newtonsCradle } from "ldrs"

export default function Loader() {
  const NO_TOYS_MSG = "No toys found 🪀 :( 🧸"
  const [isNotFoundMsgOn, setIsNotFoundMsgOn] = useState(false)

  useEffect(() => {
    newtonsCradle.register()
    setTimeout(() => {
      setIsNotFoundMsgOn(true)
    }, 3000)
  })
  return (
    <>
      <div className="loader-container flex justify-center align-center h-100">
        {isNotFoundMsgOn ? (
          NO_TOYS_MSG
        ) : (
          <l-newtons-cradle
            size="200"
            speed="1.5"
            color="white"
          ></l-newtons-cradle>
        )}
      </div>
    </>
  )
}
