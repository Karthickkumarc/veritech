import React from 'react'
import "./Testimonial.css"
import review from "../assets/review.png"
function Trainees() {
  return (
    <div className='team-section1' id="testimonials">
      <div className="container">
        <div className="row">
            <div className="title">
                <h1>Our Client</h1>
                <p>What about say as Our Client.</p>
            </div>

        </div>
        <div className="team-card">
            <div className="card">
                <div className="image-section">
                   <img src={review} alt="review1" /> 
                </div>
                <div className="content">
                    <h3> michael clarke</h3>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-section">
                   <img src={review} alt="review2" /> 
                </div>
                <div className="content">
                    <h3> michael Richardson</h3>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
            <div className="card">
                <div className="image-section">
                   <img src={review} alt="review3" /> 
                </div>
                <div className="content">
                    <h3> michael tye</h3>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quos voluptates sit explicabo deserunt at tempora assumenda soluta cum vero.</p>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Trainees
