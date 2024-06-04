import React from "react"
import { Link } from "react-router-dom"
import AddBtn from "../utils/AddBtn"

export default function Navbar() {
  const navItems = [
    { path: "/toy", txt: "Toys" },
    { path: "/about", txt: "About" },
    { path: "/charts", txt: "Statistics" },
  ]
  return (
    <ul className="navbar">
      {navItems.map((item, idx) => (
        <Link to={item.path} className="nav-link" key={idx}>
          <li className="nav-item">{item.txt}</li>
        </Link>
      ))}
    </ul>
  )
}
