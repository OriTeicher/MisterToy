import React from "react"
import AddBtn from "../utils/AddBtn"
import ToyFilter from "../toy-index/ToyFilter"

export default function AppFooter() {
  return (
    <footer className="flex w-100 h-100 ">
      <AddBtn />
      <ToyFilter />
    </footer>
  )
}
