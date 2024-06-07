import React from "react"
import AddBtn from "../utils/AddBtn"

export default function ToyAddReset({ handleResetFilter }) {
  return (
    <div className="flex h-100 filter-btns-container">
      <button className="reset-filter-btn" onClick={handleResetFilter}>
        Reset Filters
      </button>
      <AddBtn />
    </div>
  )
}
