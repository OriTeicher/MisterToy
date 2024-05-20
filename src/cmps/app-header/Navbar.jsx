import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const navItems = [
      { path: '/home', txt: 'Home' },
      { path: '/about', txt: 'About' },
      { path: '/charts', txt: 'Statistics' },
   ]

   return (
      <nav className="navbar">
         <ul className="navbar-nav">
            {navItems.map((item, index) => (
               <li key={index} className="nav-item">
                  <Link to={item.path} className="nav-link">
                     {item.txt}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}
