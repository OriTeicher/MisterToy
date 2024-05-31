import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ToyList from "../cmps/toy-index/ToyList"
import Loader from "../cmps/utils/Loader"
import ToyHeadline from "../cmps/utils/Headline"
import { MAIN_HEADER } from "../services/toy.service"
import { toyActions } from "../store/actions/toy.actions"
import { useNavigate } from "react-router"

export default function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys)
  const navigate = useNavigate()
  useEffect(() => {
    toyActions.loadToys()
  })

  async function handleRemoveToy(toyId) {
    await toyActions.removeToy(toyId)
    navigate("/toy")
  }

  if (!toys || !toys.length) return <Loader />

  return (
    <section className="toy-index">
      <ToyHeadline txt={MAIN_HEADER} />
      <ToyList toys={toys} onRemoveToy={handleRemoveToy} />
    </section>
  )
}
