import React from 'react'
import "./Footer.css"

import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
       
        <p>Karthick Web</p>
      </div>
      <ul className='footer-links'>
       <li>Company</li>
       <li> Location</li>
    
       <li> About</li>
       <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon}alt="instagram_icon" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="pintester_icon" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon}alt="WhatsApp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 -All right Reserved .</p>
      </div>
    </div>
  )
}

export default Footer
