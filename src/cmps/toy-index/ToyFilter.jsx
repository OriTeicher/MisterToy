import { useState, useRef, useEffect } from "react"
import { utilService } from "../../services/util.service"
import { useSearchParams } from "react-router-dom"

const MIN_PRICE = 10
const MAX_PRICE = 100
const PRICE_RANGE_STEP = 0.01
const DEBOUNCE_DELAY = 1000

export default function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  onSetFilter = useRef(utilService.debounce(onSetFilter))

  useEffect(() => {
    onSetFilter.current(filterByToEdit)
  }, [filterByToEdit])

  function handleFilterChange({ target }) {
    const field = target.name
    let value = field === "minPrice" ? +target.value : target.value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  return (
    <>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Search by name..."
        name="toyName"
        className="filter-input"
      />

      <div className="range-container flex-col align-center space-evenly h-100">
        <label htmlFor="range">{filterByToEdit.minPrice || MIN_PRICE}$</label>
        <input
          type="range"
          onChange={handleFilterChange}
          name="minPrice"
          className="price-range"
          step={PRICE_RANGE_STEP}
          min={MIN_PRICE}
          max={MAX_PRICE}
        />
      </div>
    </>
  )
}
