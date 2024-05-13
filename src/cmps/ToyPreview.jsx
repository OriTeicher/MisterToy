import React from "react"

export default function ToyPreview(toy) {
    return (<article className="toy-preview">
        <h1>{toy.toyName}</h1>
        <h2>{toy.price}$</h2>
        <p>{toy.createdAt}</p>
    </article>)
}
