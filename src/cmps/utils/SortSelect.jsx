import React from "react"

export default function SortSelect({ handleSortBy }) {
  return (
    <select className="sort-select">
      <option selected>
        sort by <span>🡣</span>
      </option>
      <option>title</option>
      <option>price</option>
    </select>
  )
}
