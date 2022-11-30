import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header(props) {
  const navigate = useNavigate()
  const [popup, setPopup] = useState(false)
  const popupToggler = ()=>{
    setPopup(true)
    setTimeout(() => {
      setPopup(false)
    }, 6000);
  }
  const logOut = (e)=>{
    e.preventDefault();
    console.log("Logout")
    localStorage.clear();
    sessionStorage.clear();
    navigate('/')
  }
  return (
    <nav id='nav'>
    <img src={require('./images/education.png')} alt="" />
    <span className='logo hover' onClick={()=>navigate('/booksview')}>Bookstore</span>
    <input type="text" placeholder='Search' />
    <span className="material-symbols-outlined person hover" onClick={()=> popupToggler()}>
         person
    </span>
    <span className='personSpan hover' onClick={()=> popupToggler()}>Person</span>
    <span onClick={()=> navigate('/cart')} className="material-symbols-outlined cart hover">
         garden_cart
    </span>
    <span className='cartSpan'>Cart</span>
    {popup? <div id='popup'><span><strong>Hello User</strong></span><span onClick={()=> navigate('/Wishlist')} className='hover'>My Wishlist</span><span id='logout' className='hover' onClick={logOut}>Logout</span></div> : null}
    {<button id='countButton'>{props.count}</button>}
    </nav>
  )
}

export default Header