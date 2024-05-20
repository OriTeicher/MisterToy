import React from "react"
import Logo from './utils/Logo'
export default function AppHeader() {
    return (
        <section className="flex justify-between align-center w-100">
            <Logo />
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Statistics</li>
            </ul>
        </section>
    )
}
