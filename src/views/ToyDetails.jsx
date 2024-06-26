import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import Loader from "../cmps/utils/Loader"
import ToyHeadline from "../cmps/utils/Headline"
import { toyService } from "../services/toy.service"
import { FaRegArrowAltCircleRight as ArrowRight } from "react-icons/fa"
import { FaRegArrowAltCircleLeft as ArrowLeft } from "react-icons/fa"
import { IoMdArrowRoundBack as ArrowBack } from "react-icons/io"

import ToyContent from "../cmps/toy-details/ToyContent"
import InStock from "../cmps/utils/InStock"
export default function ToyDetails() {
  const [toyToDisplay, setToyToDisplay] = useState(null)
  const { toyId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadToy()
  }, [toyId])

  async function loadToy() {
    try {
      const selectedToy = await toyService.getToyById(toyId)
      setToyToDisplay((prevToy) => (prevToy = selectedToy))
    } catch (error) {
      console.error("Error fetching toy:", error)
    }
  }

  function onLeftArrowClick() {}
  function onRightArrowClick() {}
  function onBackArrowClick() {
    navigate("/toy")
  }

  if (!toyToDisplay) return <Loader />
  return (
    <article className="toy-details">
      <InStock inStock={toyToDisplay.inStock} />
      <ArrowBack className="arrow-back" onClick={onBackArrowClick} />
      <ArrowLeft className="arrow-left" onClick={onLeftArrowClick} />
      <ToyContent toyToDisplay={toyToDisplay} />
      <ArrowRight className="arrow-right" onClick={onRightArrowClick} />
    </article>
  )
}
