import React, { useEffect } from 'react'
import { newtonsCradle } from 'ldrs'

export default function Loader() {
   useEffect(() => {
      newtonsCradle.register()
   })
   return (
      <div className="loader-container flex justify-center align-center h-100">
         <l-newtons-cradle
            size="300"
            speed="1.3"
            color="white"
         ></l-newtons-cradle>
      </div>
   )
}
