import React from "react"

export default function PriceRange({ onFilterChange, filterByToEdit }) {
  const PRICE_RANGE_STEP = 0.01
  const MIN_PRICE = 10
  const MAX_PRICE = 100

  return (
    <div className="range-container flex-col align-center space-evenly h-100">
      <label htmlFor="range">{filterByToEdit.minPrice || MIN_PRICE}$</label>
      <input
        type="range"
        onChange={onFilterChange}
        name="minPrice"
        className="price-range"
        step={PRICE_RANGE_STEP}
        min={MIN_PRICE}
        max={MAX_PRICE}
      />
    </div>
  )
}
