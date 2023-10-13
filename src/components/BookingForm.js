import React, { useState } from 'react'
const BookingForm = ({ availableTimes, updateTimes }) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        updateTimes(selectedDate);
        setTime(selectedDate);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            date,
            time,
            guests,
            occasion
        )
    }
    return (
        <form id='booking__form' style={{ display: "grid", maxWidth: "400px", gap: "20px", marginTop: "40px" }}>
            <label htmlFor='res-date'>Choose date</label>
            <input required value={date} onChange={(e) => setDate(e.target.value)} type='date' id='res-date' />
            <label htmlFor='res-time'>Choose time</label>
            <select required value={time} onChange={handleDateChange} id='res-time'>
                {availableTimes.map((availableTime, index) => (
                    <option key={index}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor='guests'>Number of guests</label>
            <input required value={guests} onChange={(e) => setGuests(e.target.value)} type='number' placeholder='1' min={1} max={10} id='guests' />
            <label htmlFor='occasion'>Occasion</label>
            <select required id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button aria-label="On Click" onClick={handleSubmit}>Make Your Reservation</button>
        </form>
    )
}

export default BookingForm