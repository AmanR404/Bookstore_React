import React from 'react'
import './BooksView.css'
import { useNavigate } from 'react-router-dom'

function BooksView(props) {

const navigate = useNavigate()
   
return (
                <div id='booksPage'>      
                    <div id='apiData'>
                        <div>
                            <img onClick={()=> navigate('./Book')} src={require('../BookDetails/images/Image_11.png')} alt="" />
                            <div id='apiText'>
                                    <h4>{props.book.bookName}</h4>
                                    <span id='apiAuthor'>{props.book.author}</span>
                                    <div id='apiRating'><span id='outOf'>4.5 </span><span className="material-symbols-outlined">star</span></div>
                                    <span id='apiPrice'>{props.book.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
}

export default BooksView