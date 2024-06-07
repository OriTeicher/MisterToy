import { Switch } from "pretty-checkbox-react"
import React, { useState } from "react"

export default function InStockCheckbox() {
  const [isInStock, setIsInStock] = useState(false)

  return (
    <div className="checkbox-container w-100">
      <p className="checkbox-label">In stock</p>
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        onChange={() => setIsInStock((prevState) => !prevState)}
      />
      <label htmlFor="toggle" className={`switch ${isInStock} `}></label>
    </div>
  )
}
