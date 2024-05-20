import React, { useEffect } from 'react'
import ToyIndex from './views/ToyIndex'
import AppHeader from './cmps/AppHeader'
import ToyDetails from './views/ToyDetails'
import { Route, Routes, useNavigate } from 'react-router'

function App() {
   const navigateTo = useNavigate()
   useEffect(() => {
      navigateTo('/toy')
   })

   return (
      <section className="app-container">
         <header className="flex justify-end">
            <AppHeader />
         </header>
         <main>
            <Routes>
               <Route path="/*" element={<ToyIndex />} />
               <Route path="/toy" element={<ToyIndex />} />
               <Route path="/toy/:toyId" element={<ToyDetails />} />
            </Routes>
         </main>
         <footer>All rights reserved &copy; to Ori Teicher</footer>
      </section>
   )
}

export default App
