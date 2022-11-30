import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import Customer from '../Customer Details/Customer'
import { getCartData } from '../Services/UserServices'
import { useEffect } from 'react'
import { updateCartQty } from '../Services/UserServices'
import { gettingData } from '../Services/UserServices'
import { removeCartElement } from '../Services/UserServices'

function Cart() {
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()
    const [address, setAddress] = useState(true)
    const [order, setOrder] = useState(true)
    const [bookData, setbookData] = useState([])
    const [customer, setCustomer] = useState(false)
    const [orderButton, setorderButton] = useState(true)
    const [cartData, setCartData] = useState([])
    const [countObj, setCountObj] = useState({
        quantityToBuy : counter
    })

    const gettingCartData = ()=>{
        getCartData()
        .then((response)=> {console.log(response); setCartData(response.data.result)})
        .catch((error)=> console.log(error))
    }
    const getData = ()=>{
        gettingData()
        .then((response)=> {setbookData(response.data.result)})
        .catch((error)=> console.log(error))       
    }

    useEffect(()=>{
        gettingCartData()
        getData()
    }, [])
    // console.log(cartData.product_id.description)
    // console.log(cartData[0]._id, "in cartData")
    console.log(cartData)

    const toggler = ()=>{
        setAddress(false)
        setCustomer(true)
        setorderButton(false)
    }
    const orderToggler = ()=>{
        setOrder(false)
    }

    const incCounter = ()=>{
        setCounter(counter + 1)
        // console.log(cartData[0]._id, "in counter")
        updateCartQty(bookData[0]._id, countObj)
        .then((response)=> console.log(response, "Quantity updated"))
        .catch((error)=> console.log(error))
    } 
    const decCounter = ()=>{
        setCounter(counter - 1)
        updateCartQty(bookData._id, countObj)
        .then((response)=> console.log(response, "Quantity updated"))
        .catch((error)=> console.log(error))
    }
    const removeCartItem = ()=>{
        removeCartElement(cartData[1]._id)
       .then((response)=> console.log(response, "Book removed from Cart"))
       .catch((error)=> console.log(error))
    }
  return (
    <div>
        <Header/>
        <div id='tag'><span>Home /</span><span id='cartText'> My cart</span></div>
        <div className='mainBox'>
            <div>
                <div className='cartData'>
                    <div className='upperCartBox'>
                        <span>My cart (1)</span>
                        <form>
                            <select name="Use current location" id="dropdown" className='hover'>
                                <option value="Use current location">
                                 Use current location
                                </option>
                            </select>
                        </form>
                    </div>
                    <div className='bookPayDetails'>
                        {cartData.map(data=>(
                        <div id='summary'>
                                  <img src={require('../BookDetails/images/Image_11.png')} alt="" />
                            <div id='internalSummary'>
                                    <h4>{data.product_id.bookName}</h4>
                                    <span id='auth'>{data.product_id.author}</span>
                                    <span id='rupee'>{data.product_id.price}</span>
                                    <div className='counterPart'><button id='dec'className='hover' onClick={decCounter}> - </button><span> {data.quantityToBuy} </span><button className='hover' id='inc' onClick={incCounter}> + </button><button className='hover' id='remove' onClick={removeCartItem}>Remove</button></div>
                            </div>
                         </div>
                        ))}
                    </div>                    
                    {orderButton?<button onClick={()=> {toggler()}} id='place' className='hover'>PLACE ORDER</button> : null }
                </div>
            </div>
           {address ?<span className='lastBox1'>Address Details</span> : null} 
           {customer ? <Customer orderToggler={orderToggler}/> : null}
          {order ? <span  className='lastBox2'>Order summary</span> : null}
        </div> 
        <Footer/>
    </div>
  )
}

export default Cart