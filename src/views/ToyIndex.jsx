import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ToyList from "../cmps/toy-index/ToyList"
import Loader from "../cmps/utils/Loader"
import ToyHeadline from "../cmps/utils/Headline"
import { MAIN_HEADER } from "../services/toy.service"
import { toyActions } from "../store/actions/toy.actions"
import ToyFilter from "../cmps/toy-index/ToyFilter"
import AddBtn from "../cmps/utils/AddBtn"
export default function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys)
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)

  // useEffect(() => {
  //   toyActions.resetFilters()
  // })

  useEffect(() => {
    toyActions.loadToys()
  }, [filterBy])

  async function handleRemoveToy(toyId) {
    await toyActions.removeToy(toyId)
  }

  function onSetFilter(filterBy) {
    toyActions.setFilterBy(filterBy)
  }

  if (!toys || !toys.length) return <Loader />

  return (
    <section className="toy-index">
      <div className="header-container">
        <ToyHeadline txt={MAIN_HEADER} />
        <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
      </div>
      <ToyList toys={toys} onRemoveToy={handleRemoveToy} />
    </section>
  )
}
