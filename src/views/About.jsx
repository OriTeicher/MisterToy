import React from "react"

export default function About() {
  return (
    <section className="about-container flex-col align-center justify-center h-100">
      <h1>About pages are boring...</h1>
      <img
        src="https://www.icegif.com/wp-content/uploads/2023/09/icegif-306.gif"
        style={{ height: 300, borderRadius: "10%" }}
      />
      <h6 style={{ position: "absolute", bottom: 0 }}>
        All rights reserved to Ori Teicher &copy;
      </h6>
    </section>
  )
}
