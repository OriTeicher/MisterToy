import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../cmps/utils/Loader'
import ToyHeadline from '../cmps/utils/Headline'
import { toyService } from '../services/toy.service'
export default function ToyDetails() {
   const [toyToDisplay, setToyToDisplay] = useState(null)
   const { toyId } = useParams()

   useEffect(() => {
      const fetchData = async () => {
         try {
            const selectedToy = await toyService.getToyById(toyId)
            console.log('selectedToy', selectedToy)
            setToyToDisplay((prevToy) => (prevToy = selectedToy))
         } catch (error) {
            console.error('Error fetching toy:', error)
         }
      }
      fetchData()
   }, [toyId])

   if (!toyToDisplay) return <Loader />
   return (
      <article className="toy-details">
         <ToyHeadline txt={toyToDisplay.toyName} />
         <h2>{toyToDisplay.price}</h2>
         <img src={toyToDisplay.imgUrl} />
         <p className="labels-container">
            {/* {toyToDisplay.labels.map((label) => (
               <span className="label"> {label}</span>
            ))} */}
         </p>
         <h4>{toyToDisplay.createdAt}</h4>
      </article>
   )
}
