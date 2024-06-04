import { useState, useRef, useEffect } from "react"
import { utilService } from "../../services/util.service"
import { useSearchParams } from "react-router-dom"
import AddBtn from "../utils/AddBtn"
import PriceRange from "../utils/PriceRange"
import { toyService } from "../../services/toy.service"

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

  function handleResetFilter() {
    setFilterByToEdit(toyService.getDefaultFilter())
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
      <PriceRange
        onFilterChange={handleFilterChange}
        filterByToEdit={filterByToEdit}
      />
      <div className="flex h-100 filter-btns-container">
        <button className="reset-filter-btn" onClick={handleResetFilter}>
          Reset Filters
        </button>
        <AddBtn />
      </div>
    </>
  )
}
