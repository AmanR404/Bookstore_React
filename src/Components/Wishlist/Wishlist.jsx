import React from 'react'
import './Wishlist.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { getWishlistItem } from '../Services/UserServices'
import { useEffect } from 'react'
import { useState } from 'react'
import { removeWishlistItem } from '../Services/UserServices'

function Wishlist() {
    const [wishlistData, setWishlistData] = useState([])
    const [productId, setProductId] = useState([])
    useEffect(()=>{
                getWishlistItem()
                .then((response)=> {console.log(response); setWishlistData(response.data.result)})
                .catch((error)=> console.log(error))
    }, [])
    
    const removeWishItem = ()=>{
        removeWishlistItem(wishlistData[2].product_id._id)
        .then((response)=> console.log(response, "Removed from Wishlist"))
        .catch((error)=> console.log(error))
    }
  return (
    <div>
        <Header/>
        <div> <span id='wishlistTag'>Home / </span> <span id='wishText'> My Wishlist</span></div>
        <div className='wishlist'>
          
            <span id='wishlText'><strong>My Wishlist ( {wishlistData.length} )</strong></span>
            {wishlistData.map(data => (
                <div  className='wishlistDetails'>
                    <div id='wishlistItem'>
                        <img src={require('./images/Image36.png')} alt="" />
                        <div id='summaryInCart'>
                            <h4>{data.product_id.bookName}</h4>
                        <span id='auth'>{data.product_id.author}</span>
                        <span id='rupee'>{data.product_id.price}</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined bin hover" onClick={removeWishItem}>
                        delete
                    </span>
            </div>
            ))}
        </div>
        <Footer/>
    </div>
  )
}

export default Wishlist
