import React from 'react'
import { useNavigate } from 'react-router';

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div id='hero'>
            <div className='container'>
                <div id='hero__section'>
                    <div id='hero__section--preview'>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button onClick={()=>navigate("/booking")}>Reserve a Table</button>
                    </div>
                    <div id='hero__section--image'>
                        <img src={'/icons_assets/restauranfood.jpg'} alt='Logo' id='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction