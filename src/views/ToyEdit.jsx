import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toyService } from '../services/toy.service'
import Loader from '../cmps/utils/Loader'
import { utilService } from '../services/util.service'
import { toyActions } from '../store/actions/toy.actions'

export default function ToyEdit() {
   const { toyId } = useParams()
   const [toyToEdit, setToyToEdit] = useState(null)
   const navigate = useNavigate()
   useEffect(() => {
      if (toyId) loadToy()
      else setToyToEdit(toyService.getEmptyToy())
   }, [toyId])

   async function loadToy() {
      try {
         const toy = await toyService.getToyById(toyId)
         setToyToEdit((prevToyToEdit) => (prevToyToEdit = toy))
      } catch (err) {
         throw new Error(err)
      }
   }

   function handleInputChange(ev) {
      const { name, value } = ev.target
      setToyToEdit((prevToy) => (prevToy = { ...prevToy, [name]: value }))
   }

   function onSaveToy() {
      if (!toyToEdit.toyName || !toyToEdit.price) return
      toyActions.saveToy(toyToEdit)
      navigate('/toy')
   }

   if (!toyToEdit) return <Loader />
   return (
      <form onSubmit={onSaveToy} className="toy-edit">
         <img src={toyToEdit.imgUrl} />
         <input
            type="text"
            name="toyName"
            placeholder="Name goes here..."
            value={toyToEdit.toyName || utilService.EMPTY}
            onChange={handleInputChange}
         ></input>
         <input
            type="number"
            name="price"
            placeholder="Enter toy price..."
            value={toyToEdit.price || utilService.EMPTY}
            onChange={handleInputChange}
         ></input>
         <button>Save</button>
      </form>
   )
}
