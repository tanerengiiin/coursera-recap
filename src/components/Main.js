import React from 'react'
import Homepage from './Homepage'
import { Routes, Route } from "react-router-dom"
import BookingPage from './BookingPage'
const Main = () => {
  return (
    <main>
      
      <Routes>
        <Route path="/" element={ <Homepage/>} />
        <Route path="/order" element={ <BookingPage/> } />
      </Routes>
    </main>
  )
}

export default Main