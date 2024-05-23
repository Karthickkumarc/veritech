import React from 'react'
import "./Loginsignup.css"
function LoginSingup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter your Name' />
          <input type="email" placeholder='Enter your Email' />
          <input type="pass" placeholder='Enter your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have An Account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>by continuing i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup
