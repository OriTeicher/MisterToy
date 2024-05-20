import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
   const navItems = [
      { path: '/toys', txt: 'Toys' },
      { path: '/about', txt: 'About' },
      { path: '/charts', txt: 'Statistics' },
   ]

   return (
      <ul className="navbar">
         {navItems.map((item, idx) => (
            <Link to={item.path} className="nav-link">
               <li key={idx} className="nav-item">
                  {item.txt}
               </li>
            </Link>
         ))}
      </ul>
   )
}
