import React from 'react'
import { useSelector } from 'react-redux'
import ToyList from '../cmps/ToyList'
import Loader from '../cmps/utils/Loader'

export default function ToyIndex() {
   const { toys } = useSelector((state) => state.toys)

   function handleRemoveToy(toyId) {
      toyActions.removeToy(toyId)
   }

   if (!toys || !toys.length) return <Loader />

   return (
      <section className="toy-index">
         <ToyList toys={toys} onRemoveToy={handleRemoveToy} />
      </section>
   )
}
