import React from "react"
import ToyIndex from "./views/ToyIndex"
import AppHeader from "./cmps/AppHeader"
import { Route, Routes } from "react-router"
function App() {
  return (
    <Routes>
      <section className="app-container">

        <header className="flex justify-end">
          <AppHeader />
        </header>
        <Route path="/toy" element={ToyIndex} />

        <main>
          <ToyIndex />
        </main>

        <footer>
          All rights reserved &copy; to Ori Teicher
        </footer>

      </section>
    </Routes>
  )
}

export default App