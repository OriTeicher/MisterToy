import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ToyList from "../cmps/ToyList"
export default function ToyIndex() {

    const { toys } = useSelector(state => state.toys) // Access 'toys' from the state

    useEffect(() => {
    }, [])

    if (!toys || !toys.length) return <div>Loading toys...</div>
    return (<section className="toy-index" >
        <ToyList toys={toys} />
    </section>)
}
