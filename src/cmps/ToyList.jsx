import React from "react"
import ToyPreview from "./ToyPreview"

export default function ToyList(toys) {
    return <section className="toy-list">
        {toys.map(toy => <ToyPreview toy={toy} />)}
    </section>
}
