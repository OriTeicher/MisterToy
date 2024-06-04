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
            size="300"
            speed="1.3"
            color="white"
          ></l-newtons-cradle>
        )}
      </div>
    </>
  )
}
