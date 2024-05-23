import React from 'react'
import "./Navbar.css";

import  {HashLink as Link} from "react-router-hash-link";
function Navbar() {
  
  return (
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Karthick Web</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className='ul' >
    <li><Link to="#HEro" smooth>Home </Link></li>
           <li><Link to="#objectives" smooth>Objectives</Link></li>
           <li> <Link to="#members" smooth>Members</Link></li>
           <li><Link to="#testimonials" smooth>Testimonals</Link> </li>
           <li><Link to="/login">Login</Link></li>
           </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
{/* 
*/}