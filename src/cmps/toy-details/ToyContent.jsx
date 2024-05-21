import React from 'react'
import { utilService } from '../../services/util.service'
import ToyHeadline from '../utils/Headline'

export default function ToyContent({ toyToDisplay }) {
   return (
      <div className="toy-content">
         <ToyHeadline txt={toyToDisplay.toyName} />
         <h2>
            {toyToDisplay.price}
            <span className="price-sign">$</span>
         </h2>
         <img src={toyToDisplay.imgUrl} />
         <p className="labels-container">
            {toyToDisplay.labels.map((label) => (
               <span key={label} className="label">
                  {label}
               </span>
            ))}
         </p>
         <h4>
            Created at: {utilService.EMPTY}
            {utilService.formatTimestampToDate(toyToDisplay.createdAt)}
         </h4>
      </div>
   )
}
