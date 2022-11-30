import React from 'react'
import './ForgotPage.css'
import TextField from '@mui/material/TextField';

function ForgotPage() {
  return (
  <div>
     <nav id='nav'>
            <img src={require('./images/education.png')} alt="" />
            <span className='logo'>Bookstore</span>
        </nav>
      <div className='forgotOuter'>
        <div>
            <h2>Forgot Your Password?</h2>
            <div>
                <div className='forgotInner'>
                    <p>Enter your email address and we'll send you a link to reset your password.</p>
                    <TextField id="outlined-basic" size='small' label="Email id" variant="outlined" />
                    <button id='login' className='hover'>Reset Password</button>
                </div>
                <button className='createbtn hover'><strong>CREATE ACCOUNT</strong></button>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ForgotPage