import React from 'react'
import BookingForm from './BookingForm'

const BookingPage = ({ availableTimes, updateTimes }) => {
    return (
        <div className='container'>
            <div id='booking'>
                <div id='booking__header'>
                    <h1>Booking</h1>
                </div>
                <div id='booking__content'>
                    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
                    <img src='/icons_assets/restaurant.jpg' alt='Booking' />
                </div>
            </div>
        </div>

    )
}

export default BookingPage