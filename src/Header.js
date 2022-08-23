import React from 'react'
import './Header.css'
import image from './logo.png'
function Header() {
  return (
    <div className="logo">
       <img src={image} alt="logo" height={50} width={100} />
       <h1>obot.ai</h1>
    </div>
  )
}

export default Header