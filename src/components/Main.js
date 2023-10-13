import React, { useReducer, useState } from 'react'
import Homepage from './Homepage'
import { Routes, Route } from "react-router-dom"
import BookingPage from './BookingPage'

const initializeTimes = () => {
  return ['17.00', '18.00', '19.00'];
};

const initialState = {
  availableTimes: initializeTimes(), // initializeTimes fonksiyonunu kullanarak başlangıç saatlerini alın
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};


const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (selectedDate) => {
    // Burada tarih değişikliğine göre zamanları güncelle
    // Örneğin, farklı tarihler için farklı saatleri ayarlayabilirsiniz.
    const updatedTimes = ['20.00', '21.00', '22.00'];
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
  };
  return (
    <main>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} updateTimes={updateTimes} />} />
      </Routes>
    </main>
  )
}

export default Main