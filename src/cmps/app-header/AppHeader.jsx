import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import AddBtn from "../utils/AddBtn"

export default function AppHeader() {
  return (
    <section className="app-header flex justify-between align-center w-100">
      <Logo />
      <Navbar />
    </section>
  )
}
