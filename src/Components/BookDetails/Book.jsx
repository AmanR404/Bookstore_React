import React from 'react'
import './Book.css'
import Header from '../Header/Header.jsx'
import { gettingData } from '../Services/UserServices'
import { useState } from 'react'
import { useEffect } from 'react'
import { addToCart } from '../Services/UserServices'
import { updateCartQty } from '../Services/UserServices'
import { addToWishlist } from '../Services/UserServices'

function Book() {
    
    const [counterToggle, setCounterToggle] = useState(false)
    const [buttonToggle, setButtonToggle] = useState(true)
    const [counter, setCounter] = useState(1)
    const [bookData, setbookData] = useState([])
    const [countObj, setCountObj] = useState({
        quantityToBuy : counter
    })

    const getData = ()=>{
        gettingData()
        .then((response)=> {setbookData(response.data.result)})
        .catch((error)=> console.log(error))       
    }

    useEffect(()=>{
           getData()
    }, [])

    // Cart Operations

    const addToCartButton = ()=>{
        // console.log(bookData[0]._id)
        setButtonToggle(false)
        setCounterToggle(true)
        addToCart(bookData[0]._id)
        .then((response)=> console.log(response, "Book added to cart"))
        .catch((error)=> console.log(error))
    }

    const incCounter = ()=>{
        setCounter(counter + 1)
        updateCartQty(bookData[0]._id, countObj)
        .then((response)=> console.log(response, "Quantity updated"))
        .catch((error)=> console.log(error))
    } 
    const decCounter = ()=>{
        setCounter(counter - 1)
        updateCartQty(bookData[0]._id, countObj)
        .then((response)=> console.log(response, "Quantity updated"))
        .catch((error)=> console.log(error))
    }
    
    // Wishlist Operations
    const addOnWishlist = ()=>{
        addToWishlist(bookData[0]._id)
        .then((response)=> console.log(response, "Added to Wishlist"))
        .catch((error)=> console.log(error))
        document.getElementById('btn2').style.backgroundColor = 'white'
        document.getElementById('btn2').style.color = '#333333'
        document.getElementById('btn2').style.borderRadius = '5px'
    }

  return (
    <div>
       <Header count={counterToggle?counter:null}/>
        <p id='home'>Home / Book (01)</p>
        <div className='middleBox'>
            <div className='middleImgBox'>
                <img id='img1' src={require('./images/Image_11.png')} alt="" />
                <img id='img2' src={require('./images/Image_46.png')} alt="" />
            </div>
            <div className='middleButtonBox'>
               <img src={require('./images/Image_11@2x.png')} alt="" />
                <div className='buttonBox'>
                    {buttonToggle?<button id='btn1' className='hover' onClick={addToCartButton}>ADD TO BAG</button> : null}        
                    {counterToggle?<div className='counterPart'><button id='dec'className='hover' onClick={decCounter}> - </button><span> {counter} </span><button className='hover' id='inc' onClick={incCounter}> + </button></div> : null}
                    <button id='btn2' className='hover' onClick={addOnWishlist}>WISHLIST</button>
                </div>
            </div>
            <div className='lastBox'>
                <div className='lastPriceBox'>
                    <h3>Sherlock: Chronicles</h3>
                    <span id='author'>by Steve Krug</span>
                    <span id='rating'>4.5 <span className="material-symbols-outlined star">
                    star
                    </span></span>
                    <span id='rs'>Rs.1500</span>
                    <hr />
                </div>
                <div className='last2ndBox'>
                    <span>Book Detail</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dignissimos corporis temporibus eveniet voluptatem corrupti veniam reprehenderit, aspernatur minus cupiditate nisi veritatis similique tenetur officiis ex quisquam maxime in iste repudiandae recusandae culpa exercitationem!</p>
                </div>
                <div className='lastLastBox'>
                    <h4>Customer Feedback</h4>
                    <div className='feedback'>
                        <span>Overall rating</span>
                        <span>
                                <span className="material-symbols-outlined">
                                star
                                </span><span className="material-symbols-outlined">
                                star
                                </span><span className="material-symbols-outlined">
                                star
                                </span><span className="material-symbols-outlined">
                                star
                                </span><span className="material-symbols-outlined">
                                star
                                </span>
                        </span>
                        <input type="text" name="" id="" />
                        <button>Submit</button>
                        <div>

                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book