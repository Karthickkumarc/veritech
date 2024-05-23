import React from 'react'
import "./Objective.css"
import student from "../assets/Student.png"
function Objective() {
    return (


        <div className='objective' id="objectives">
            <h1>objective</h1>
            <hr />
            <div className="objective-flex">
                <div className="objective-left">
                    <img src={student} alt="objective_image" />
                </div>
                <div className="objective-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quo in ut iure fuga minus quod necessitatibus mollitia placeat perferendis! Tempora nihil tenetur recusandae. Aliquid, quis. Pariatur autem error explicabo ullam maiores dignissimos eligendi in rerum itaque tempore dolore nobis odio nemo asperiores, voluptatum ea sit velit accusantium quia delectus.</p>
                </div>
            </div>
        </div>

    )
}

export default Objective
