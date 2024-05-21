import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../cmps/utils/Loader'
import ToyHeadline from '../cmps/utils/Headline'
import { toyService } from '../services/toy.service'
import { FaRegArrowAltCircleRight as ArrowRight } from 'react-icons/fa'
import { FaRegArrowAltCircleLeft as ArrowLeft } from 'react-icons/fa'
import { utilService } from '../services/util.service'
import ToyContent from '../cmps/toy-details/ToyContent'
export default function ToyDetails() {
   const [toyToDisplay, setToyToDisplay] = useState(null)
   const { toyId } = useParams()

   useEffect(() => {
      loadToy()
   }, [toyId])

   async function loadToy() {
      try {
         const selectedToy = await toyService.getToyById(toyId)
         setToyToDisplay((prevToy) => (prevToy = selectedToy))
      } catch (error) {
         console.error('Error fetching toy:', error)
      }
   }

   function onLeftArrowClick() {
      console.log('left')
   }
   function onRightArrowClick() {
      console.log('right')
   }

   if (!toyToDisplay) return <Loader />
   return (
      <article className="toy-details">
         <ArrowLeft onClick={onLeftArrowClick} />
         <ToyContent toyToDisplay={toyToDisplay} />
         <ArrowRight onClick={onRightArrowClick} />
      </article>
   )
}
