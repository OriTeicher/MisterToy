import React from 'react'
import { Link } from 'react-router-dom'

export default function AddBtn() {
   return (
      <Link to="/toy/edit" className="add-link">
         +
      </Link>
   )
}
