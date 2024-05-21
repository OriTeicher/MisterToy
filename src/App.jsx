import React, { useEffect } from 'react'
import ToyIndex from './views/ToyIndex'
import AppHeader from './cmps/app-header/AppHeader'
import ToyDetails from './views/ToyDetails'
import { Route, Routes, useNavigate } from 'react-router'
import LoginSignup from './views/LoginSignup'
import ToyEdit from './views/ToyEdit'
import AppFooter from './cmps/app-footer/AppFooter'

function App() {
   return (
      <section className="app-container">
         <header className="flex justify-end">
            <AppHeader />
         </header>
         <main>
            <Routes>
               <Route path="/*" element={<ToyIndex />} />
               <Route path="/toy" element={<ToyIndex />} />
               <Route path="/toy/edit" element={<ToyEdit />} />
               <Route path="/toy/:toyId" element={<ToyDetails />} />
               <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
               <Route path="/login" element={<LoginSignup />}></Route>
            </Routes>
         </main>
         <footer>
            <AppFooter />
         </footer>
      </section>
   )
}

export default App
