import { useState, useRef, useEffect } from "react"
import { utilService } from "../../services/util.service"
import { useSearchParams } from "react-router-dom"
import { toyService } from "../../services/toy.service"
import PriceRange from "../utils/PriceRange"
import SortSelect from "../utils/SortSelect"
import ToySearchbar from "../toy-filter/ToySearchbar"
import ToyAddReset from "../toy-filter/ToyAddReset"
import InStockCheckbox from "../toy-filter/InStockCheckbox"

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
    <section className="filter-container">
      <PriceRange
        onFilterChange={handleFilterChange}
        filterByToEdit={filterByToEdit}
      />
      <ToyAddReset handleResetFilter={handleResetFilter} />
      <ToySearchbar
        filterByToEdit={filterByToEdit}
        handleFilterChange={handleFilterChange}
      />
      <SortSelect
        filterByToEdit={filterByToEdit}
        handleSortBy={handleFilterChange}
      />
      <InStockCheckbox isInStock={filterByToEdit.inStock} />
    </section>
  )
}
