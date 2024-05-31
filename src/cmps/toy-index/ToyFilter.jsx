import { useSelector } from "react-redux"
import { toyActions } from "../../store/actions/toy.actions"
import { useState, useRef, useEffect } from "react"
import { utilService } from "../../services/util.service"
export default function ToyFilter() {
  const MIN_PRICE = 10
  const DEBOUNCE_DELAY = 1000
  const [filterByToEdit, setFilterByToEdit] = useState({})
  const filterByRef = useRef(
    utilService.debounce(toyActions.setFilterBy, DEBOUNCE_DELAY)
  )

  useEffect(() => {
    filterByRef.current(filterByToEdit)
  }, [filterByToEdit])

  function handleFilterChange(ev) {
    let { name, value } = ev.target
    if (name === "minPrice") value = +value
    setFilterByToEdit(
      (prevFilter) => (prevFilter = { ...prevFilter, [name]: value })
    )
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
          step={0.01}
          min={10}
          max={100}
        />
      </div>
    </>
  )
}
