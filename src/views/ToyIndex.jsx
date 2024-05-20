import React from 'react'
import { useSelector } from 'react-redux'
import ToyList from '../cmps/ToyList'
import Loader from '../cmps/utils/Loader'
import ToyHeadline from '../cmps/utils/Headline'
import { MAIN_HEADER } from '../services/toy.service'

export default function ToyIndex() {
   const { toys } = useSelector((state) => state.toys)

   function handleRemoveToy(toyId) {
      toyActions.removeToy(toyId)
   }

   if (!toys || !toys.length) return <Loader />

   return (
      <section className="toy-index">
         <ToyHeadline txt={MAIN_HEADER} />
         <ToyList toys={toys} onRemoveToy={handleRemoveToy} />
      </section>
   )
}
