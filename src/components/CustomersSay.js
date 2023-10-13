import React from 'react'
const testimonials = [
    {
        name: "Ahmet Altın",
        point: "1",
        content: "Usage of the site is not sufficient.",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        name: "Nehir Nida",
        point: "4.5",
        content: "O.K !",
        img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        name: "Sami Selçuk",
        point: "2",
        content: "A little below the middle.",
        img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        name: "Taner Tolga",
        point: "3.4",
        content: "The site design is nice.",
        img: "https://images.pexels.com/photos/4033244/pexels-photo-4033244.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
]
const CustomersSay = () => {
    return (
        <div id='testimonials'>
            <div className='container'>
                <div id='testimonials__header'>
                    Testimonials
                </div>
                <div id='testimonials__section'>
                    {testimonials.map((data, i) => (
                        <div key={i} className='testimonials__card'>
                            <div className='testimonials__card--point'>{data.point}</div>
                            <div className='testimonials__card--header'>
                                <img src={data.img} alt={data.name} />
                                <h5>{data.name}</h5>
                            </div>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomersSay