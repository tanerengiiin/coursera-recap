import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <img src={"/icons_assets/Logo.svg"} alt='Logo' />
        <div className='footer__card'>
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='footer__card'>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>+2345685265</li>
            <li>littlelemon@atat.com</li>
          </ul>
        </div>
        <div className='footer__card'>
          <h3>Social Media Links</h3>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer