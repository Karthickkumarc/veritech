import React from 'react'
import "./Trainees.css"
import developer1 from "../assets/developer-1.png"
import developer2 from "../assets/developer-2.png"
function Trainees() {
  return (
    <div className='team-section' id="members">
      <div className="container">
        <div className="row">
            <div className="title">
                <h1>Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti dolorem at nisi laudantium veritatis iure consectetur soluta repellendus aut.</p>
            </div>

        </div>
        <div className="team-card">
            <div className="card">
                <div className="image-section">
                   <img src={developer1} alt="developer1" /> 
                </div>
                <div className="content">
                    <h3> michael clarke</h3>
                    <h4>Java FullStack Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-section">
                   <img src={developer2} alt="developer2" /> 
                </div>
                <div className="content">
                    <h3> michael Richardson</h3>
                    <h4> pythonFullStack Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-section">
                   <img src={developer1} alt="developer1" /> 
                </div>
                <div className="content">
                    <h3> michael tye</h3>
                    <h4>mern stack Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Trainees
