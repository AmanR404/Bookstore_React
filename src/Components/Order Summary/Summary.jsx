import React, { useState } from 'react'
import './Summary.css'
import { useNavigate } from 'react-router-dom'
import { getCartData } from '../Services/UserServices'
import { useEffect } from 'react'

function Summary() {
  const [orderData, setOrderData] = useState([])

  useEffect(()=>{
        getCartData()
        .then((response)=> {console.log(response); setOrderData(response.data.result)})
        .catch((error)=> console.log(error))
  }, [])
  const navigate = useNavigate()
  return (
    <div className='orderSummary'>
        <span style={{fontWeight : 700, marginLeft : "2.5vw"}}>Order Summary</span>
        {orderData.map(data=>(
          <div className='bookPayDetailsinsummary'>
            <img src={require('../BookDetails/images/Image_11.png')} alt="" />
            <div id='summaryInCart'>
                <h4>{data.product_id.bookName}</h4>
            <span id='auth'>{data.product_id.author}</span>
            <span id='rupee'>{data.product_id.price}</span>
            </div>
         </div>
        ))}
        <button id='place' className='hover' onClick={()=> navigate('/Order')}>CHECKOUT</button>
    </div>
  )
}

export default Summary