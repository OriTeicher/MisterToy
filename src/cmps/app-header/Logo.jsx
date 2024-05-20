import React from 'react'
import { PiLegoDuotone as MisterToyLogo } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function Logo() {
   return (
      <Link to={'/toy'}>
         <div className="logo-container  flex align-center justify-center">
            <p>Mr.</p>
            <MisterToyLogo />
            <p>Toy</p>
         </div>
      </Link>
   )
}
