import './App.css';
import Book from './Components/BookDetails/Book';
import Cart from './Components/Cart/Cart';
import ForgotPage from './Components/ForgotPassword/ForgotPage';
import Order from './Components/Order Details/Order';
import Signup from './Components/Signup/Signup';
import Wishlist from './Components/Wishlist/Wishlist';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div >
    <Routes>
    <Route exact path='/' element={<Signup/>} />
    <Route exact path='/BooksView/Book' element={<Book/>} />
    <Route exact path='/ForgotPage' element={<ForgotPage/>} />
     <Route exact path='/booksview' element={<Dashboard/>} />
     <Route exact path = '/cart' element={<Cart/>} />
     <Route exact path = '/Order' element={<Order/>} />
     <Route exact path = '/Wishlist' element={<Wishlist/>} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
