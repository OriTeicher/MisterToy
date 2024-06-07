import React from "react"

const IN_STOCK_IMG = "https://clipground.com/images/in-stock-png-2.png"
const OUT_OF_STOCK_IMG =
  "https://png.pngtree.com/png-vector/20220111/ourmid/pngtree-out-of-stock-symbol-rectangular-sign-vector-png-image_15673910.png"

export default function InStock({ inStock }) {
  return (
    <>
      {inStock ? (
        <img src={IN_STOCK_IMG} className="stock-img" />
      ) : (
        <img src={OUT_OF_STOCK_IMG} className="stock-img" />
      )}
    </>
  )
}
