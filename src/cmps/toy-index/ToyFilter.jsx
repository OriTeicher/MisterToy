import { useState, useRef, useEffect } from "react"
import { utilService } from "../../services/util.service"
import { useSearchParams } from "react-router-dom"
import AddBtn from "../utils/AddBtn"
import PriceRange from "../utils/PriceRange"
import { toyService } from "../../services/toy.service"

export default function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  const [searchParams, setSearchParams] = useSearchParams()

  onSetFilter = useRef(utilService.debounce(onSetFilter))

  useEffect(() => {
    onSetFilter.current(filterByToEdit)
  }, [filterByToEdit])

  function setQueryParams(field, value) {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set(field, value)
    setSearchParams(newSearchParams)
  }

  function handleFilterChange({ target }) {
    const field = target.name
    let value = field === "minPrice" ? +target.value : target.value
    setQueryParams(field, value)
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function handleResetFilter() {
    const defaultFilter = toyService.getDefaultFilter()
    setFilterByToEdit(defaultFilter)
    const newSearchParams = new URLSearchParams()
    for (const key in defaultFilter) {
      newSearchParams.set(key, defaultFilter[key])
    }
    setSearchParams(newSearchParams)
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
