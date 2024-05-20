import React from "react"
import { PiLegoDuotone as MisterToyLogo } from "react-icons/pi"

export default function Logo() {
    return (
        <div className="logo-container  flex align-center justify-center">
            <p>Mr.</p>
            <MisterToyLogo />
            <p>Toy</p>
        </div>
    )
}
