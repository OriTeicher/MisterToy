import React, { useState } from 'react'

export default function ToyFilter() {
   const [filterByToEdit, setFilterByToEdit] = useState({})

   return (
      <input
         type="text"
         placeholder="Search by name..."
         name="toyName"
         className="filter-input"
      />
   )
}
