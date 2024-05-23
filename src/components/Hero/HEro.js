import React from 'react'
import "./Hero.css"
import  header_image from "../assets/header_banner.webp"
import { useNavigate } from 'react-router-dom'

function HEro() {
  const navigate=useNavigate();
  const handleNavigate =()=>{
    navigate("/login")
  }
  return (
    <div className='Header' id="HEro">
      <div className="Header-left">
         <h1>Web Design &</h1>
         <h1>Development</h1>
         <h1>Company</h1>
        
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum praesentium molestiae. Beatae soluta maxime placeat fuga quod ducimus similique iure numquam, ullam, inventore magnam deleniti doloremque saepe vero eius.</p>   
         <div className="button">
        <button className='btn' type="submit" onClick={handleNavigate}> Join Us</button>
      </div>
      </div>
      <div className="header-right">
       <img src={header_image} alt="header_banner" />
      </div>
     
    </div>
  )
}

export default HEro
