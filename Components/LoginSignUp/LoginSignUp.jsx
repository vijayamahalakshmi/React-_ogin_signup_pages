import React, {useState} from 'react'

import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/person.png'

export default function LoginSignUp() {
    const [action,setAction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Enter your Name"/>
            </div>}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter your password'/>
            </div>
        </div>
        {action==="sign Up"?<div></div>:
        <div className="forgotPassword">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("sign Up")}}>
                sign Up
            </div>
            <div className={action==="sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
            
        </div>

    </div>
  )
}
