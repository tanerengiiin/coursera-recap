import React from 'react'
import Nav from './Nav'
const Header = () => {
  return (
    <header className='container'>
        <img src={'/icons_assets/Logo.svg'} alt='Logo' id=''/>
        <Nav/>
    </header>
  )
}

export default Header