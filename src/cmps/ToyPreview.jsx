import React, { useState } from 'react'
import MainBtn from './utils/MainBtn'
import { utilService } from '../services/util.service'
import { useNavigate } from 'react-router'

export default function ToyPreview({ toy, onRemoveToy }) {
   const [isHovered, setIsHovered] = useState(false)
   const PRICE_DIFF = 0.01

   const navigate = useNavigate()

   function showToyDetails() {
      navigate(`${toy._id}`)
   }
   function editToyDetails() {
      navigate(`edit/${toy._id}`)
   }

   return (
      <article
         className="toy-preview"
         onMouseOver={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         onClick={showToyDetails}
      >
         <div
            className={`toy-btns flex justify-center ${
               isHovered ? 'show' : utilService.EMPTY
            }`}
         >
            <MainBtn
               classProp={'delete-btn'}
               btnContent={'Remove'}
               onClickFunc={onRemoveToy}
            />
            <MainBtn
               classProp={'edit-btn'}
               btnContent={'Update'}
               onClickFunc={editToyDetails}
            />
         </div>
         <div className="toy-content">
            <h1>{toy.toyName}</h1>
            <h2>
               {toy.price - PRICE_DIFF}
               <span>$</span>
            </h2>
         </div>
         <img src={toy.imgUrl} alt="toy-image" />
      </article>
   )
}
