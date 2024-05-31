import React from "react"
import { utilService } from "../../services/util.service"
import ToyHeadline from "../utils/Headline"

export default function ToyContent({ toyToDisplay }) {
  return (
    <>
      <div className="toy-content">
        <h1>{toyToDisplay.toyName}</h1>
        <img src={toyToDisplay.imgUrl} />
        <h2>
          {toyToDisplay.price}
          <span className="price-sign">$</span>
        </h2>
        {toyToDisplay.labels.length !== 0 && (
          <p className="labels-container">
            {toyToDisplay.labels.map((label, idx) => (
              <span key={idx} className="label">
                {label}
              </span>
            ))}
          </p>
        )}
        <h4>
          Created at: {utilService.EMPTY}
          {utilService.formatTimestampToDate(toyToDisplay.createdAt)}
        </h4>
      </div>
    </>
  )
}
