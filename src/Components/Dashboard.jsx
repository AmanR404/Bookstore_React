import React from 'react'
import { gettingData } from './Services/UserServices'
import BooksView from './BooksView/BooksView'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './Dashboard.css'
import PageInation from './PageInation/PageInation'

function Dashboard() {

    const [bookData, setbookData] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = bookData.slice(firstPostIndex, lastPostIndex)

    useEffect(()=>{
      getData()
      }, [])

    const getData = ()=>{
        gettingData()
        .then((response)=> {console.log(response.data.result); setbookData(response.data.result)})
        .catch((error)=> console.log(error))       
    }

 
  return (
    <div>
      <Header/>
      <div id='innerTagline'>
            <span>Books</span>
            <form>
                 <select name="Sort by relevance" id="dropdown">
                        <option value="Sort by relevance">
                        Sort by relevance
                        </option>
                  </select>
            </form>
       </div>
     {currentPosts.map(book =>(
        <BooksView book={book} key={book._id}/>
    ))}
      <PageInation totalPosts={bookData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
      <Footer/>
    </div>
  )
}

export default Dashboard