import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginApi } from '../Services/UserServices';

function Signup() {
  // Regex

  const emailRegex = /^[a-zA-Z0-9]+[@]+[a-zA-Z]+[.]+[a-zA-Z]{2,5}/
  const passRegex = /^[a-zA-Z0-9/./_/-/@]{8,}/

  // userData
  const [userData, setUserData] = useState({
    email : "",
    password : ""
  })

  let email = userData.email;
  let password = userData.password;

  // Storing 

  const handleEmailChange = (event) => {
    setUserData(prevState => ({
        ...prevState,
        email : event.target.value
    }))
}
  const handlePasswordChange = (event) => {
    setUserData(prevState => ({
        ...prevState,
        password : event.target.value
    }))
}


const borderHandler = ()=>{
  console.log('BorderHandler here')
  document.querySelector('#emailField').style.border = '1px solid red'
  document.querySelector('#emailField').style.borderRadius = '4px'

}
    // API 

    const loginAccess = (e)=>{
      e.preventDefault();
      if(email.match(emailRegex) && password.match(passRegex)){
        LoginApi(userData)
        .then((response) => {console.log(response); localStorage.setItem('token', response.data.result.accessToken); if(response.status === 200){navigate('/booksview')}})
        .catch((error) => console.log(error))
      }
      else{
        console.log("Enter Details correctly")
        borderHandler();
      }
  }



  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const loginSwitcher = ()=>{
    setLogin(true)
  }
  const signupSwitcher = ()=>{
    setLogin(false)
  }
  return (
    <div>
        <div className='outerBox'>
          <div className='innerBox'>
              <img src={require('./images/2766594.png')} alt="" />
              <span>ONLINE BOOK SHOPPING</span>
          </div>
        </div>
       {login?<div className='secondOuterBox'>
          <div className='secondInnerBox'>
              <div className='loginSignup'>
                <span className='hover active'>LOGIN</span>
                <span onClick={signupSwitcher} className='hover'>SIGNUP</span>
              </div>
              <form className='form'>
              <TextField id="outlined-basic emailField" size='small' value={email} label="Email id" variant="outlined" onChange={handleEmailChange} />
              <TextField id="outlined-basic passField" size='small' value={password} label="Password" variant="outlined" onChange={handlePasswordChange} />
              <span id='forgot' onClick={()=> navigate('./ForgotPage')}>Forgot Password?</span>
              <button id='login' className='hover' onClick={loginAccess}>Login</button>
              <div id='orElem'>
                  <hr /><span>OR</span> <hr />
              </div>
              <div id='socialButtons'>
                <button id='fb' className='hover'>Facebook</button>
                <button id='google' className='hover'>Google</button>
              </div>
              </form>
          </div>
        </div>:<div className='secondOuterBox'>
          <div className='secondInnerBox'>
              <div className='loginSignup'>
                <span  onClick={loginSwitcher} className='hover'>LOGIN</span>
                <span className='hover active'>SIGNUP</span>
              </div>
              <form className='form'>
              <TextField id="outlined-basic" size='small' label="Full Name" variant="outlined" />
              <TextField id="outlined-basic" size='small' label="Email id" variant="outlined" />
              <TextField id="outlined-basic" size='small' label="Password" variant="outlined" />
              <TextField id="outlined-basic" size='small' label="Mobile Number" variant="outlined" />
              <button id='login' className='hover'>Signup</button>
              </form>
          </div>
        </div>}
    </div>
  )
}

export default Signup