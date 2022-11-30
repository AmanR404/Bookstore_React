import React from 'react'
import Header from '../Header/Header'
import './Order.css'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

function Order() {
  const navigate = useNavigate()
  return (
    <div>
        <Header/>
        <div id='orderFinished'>
            <img id='imag1' src={require('./images/upper.png')} alt="" />
            <span id='placedText'>Order Placed Successfully</span>
            <img id='imag2' src={require('./images/lower.png')} alt="" />
            <p id='placedPara'>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</p>
            <div id='contactSpan'>
                <span id='span1'>Email us</span><span id='span2'>Contact us</span><span id='span3'>Address</span>
            </div>
            <div id='contact-details'>
                <span id='contactSpan1'>admin@bookstore.com</span><span id='contactSpan2'>+91&nbsp;8163475881&nbsp;</span><span id='contactSpan3'>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</span>
            </div>
            <button className='continueBtn hover' onClick={()=> navigate('/BooksView')}>CONTINUE SHOPPING</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Order