import React from 'react'
import "./index.scss"
import logo from "../../assets/logo.png";


const Header = () => {
  return (
    <div className='header'>
        <img className='header__img' 
        src={logo} alt='dnc logo'/>
    </div>
  )
}

export default Header