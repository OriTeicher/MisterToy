import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ToyList from "../cmps/ToyList"
import Loader from "../cmps/utils/Loader"

const POLL_DB = 'pollDB'


export default function ToyIndex() {
    const { toys } = useSelector((state) => state.toys)


    useEffect(() => {
        setTimeout(() => {
            console.log('toys', toys)
        }, 3000)
    }, [])
    if (!toys || !toys.length) return <Loader />
    return (
        <section className="toy-index">
            <ToyList toys={toys} />
        </section>
    )
}

