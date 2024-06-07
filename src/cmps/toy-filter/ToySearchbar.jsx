import React from "react"

export default function ToySearchbar({ handleFilterChange }) {
  return (
    <input
      type="text"
      onChange={handleFilterChange}
      placeholder="Search by name..."
      name="toyName"
      className="filter-input"
    />
  )
}
