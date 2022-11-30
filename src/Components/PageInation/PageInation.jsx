import React from 'react'
import './PageInation.css'

function PageInation(props) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(props.totalPosts/props.postsPerPage); i++){
        pages.push(i)
    }
  return (
    <div id='pageInationBox'>
        {pages.map((page, index)=>{
            return <button key={index} className='inationBtn' onClick={() => props.setCurrentPage(page)}>{page}</button>
        })}
    </div>
  )
}

export default PageInation