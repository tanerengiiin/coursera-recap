import React from 'react'
const specials = [
    {
      id: "greek_salad",
      title: "Greek salad",
      content: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      price: "12.99",
      img: "/icons_assets/greek salad.jpg"
    },
    {
      id: "bruchetta",
      title: "Bruchetta",
      content: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      price: "5.99",
      img: "/icons_assets/bruchetta.svg"
    },
    {
      id: "limon_dessert",
      title: "Lemon Dessert",
      content: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "5.00",
      img: "/icons_assets/lemon dessert.jpg"
    },
  
  ]
const Specials = () => {
    return (
        <div id='specials'>
            <div className='container'>
                <div id='specials__section'>
                    <div id='specials__section--title'>
                        <h2>Specials</h2>
                        <button>Online Menu</button>
                    </div>
                    <div id='specials__section--images'>
                        {specials.map((data, i) => (
                            <div key={data.id} className='specials__section--image'>
                                <img src={data.img} alt={data.title} />
                                <div className='specials__section--imageContent'>
                                    <div className='specials__section--imageHeader'>
                                        <h3>{data.title}</h3>
                                        <div>${data.price}</div>
                                    </div>
                                    <p>{data.content}</p>
                                    <div className='specials__section--imageFooter'>
                                        <span>Order a delivery</span>
                                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.4596 1.75154C14.4596 0.923714 13.7094 0.246399 12.7924 0.246399H10.2916V1.75154H12.7924V3.74586L9.8915 7.01955H6.95723V3.25669H3.62284C1.78059 3.25669 0.288452 4.60379 0.288452 6.26698V8.52469H1.95565C1.95565 9.77396 3.07267 10.7824 4.45644 10.7824C5.84021 10.7824 6.95723 9.77396 6.95723 8.52469H10.6917L14.4596 4.27266V1.75154ZM4.45644 9.27727C3.99796 9.27727 3.62284 8.93861 3.62284 8.52469H5.29004C5.29004 8.93861 4.91492 9.27727 4.45644 9.27727Z" fill="black" />
                                            <path d="M6.95718 0.998962H2.78918V2.50409H6.95718V0.998962Z" fill="black" />
                                            <path d="M14.4597 6.26697C13.0759 6.26697 11.9589 7.27541 11.9589 8.52467C11.9589 9.77394 13.0759 10.7824 14.4597 10.7824C15.8434 10.7824 16.9604 9.77394 16.9604 8.52467C16.9604 7.27541 15.8434 6.26697 14.4597 6.26697ZM14.4597 9.27724C14.0012 9.27724 13.6261 8.93859 13.6261 8.52467C13.6261 8.11076 14.0012 7.7721 14.4597 7.7721C14.9181 7.7721 15.2933 8.11076 15.2933 8.52467C15.2933 8.93859 14.9181 9.27724 14.4597 9.27724Z" fill="black" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials