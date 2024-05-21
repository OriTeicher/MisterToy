import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { toyService } from '../services/toy.service'
import toyActions from '../store/actions/toy.actions'

export default function ToyEdit() {
   const { toyId } = useParams()
   const [toyToEdit, setToyToEdit] = useState(null)

   useEffect(() => {
      loadToy()
   })

   async function loadToy() {
      try {
         const toy = await toyService.getToyById()
         setToyToEdit((prevToyToEdit) => (prevToyToEdit = toy))
      } catch (err) {
         throw new Error(err)
      }
   }

   function handleInputChange(field, value) {
      setToyToEdit((prevToy) => (prevToy = { ...prevToy, [field]: value }))
   }

   function onSaveToy() {
      toyActions
   }

   return (
      <form onSubmit={onSaveToy}>
         <input
            type="text"
            placeholder="Enter toy name..."
            value={toyToEdit.toyName}
            onChange={() => handleInputChange('toyName', this.value)}
         ></input>
         <input
            type="text"
            placeholder="Enter toy price..."
            value={toyToEdit.price}
            onChange={() => handleInputChange('price', this.value)}
         ></input>
         <button>Save</button>
      </form>
   )
}
