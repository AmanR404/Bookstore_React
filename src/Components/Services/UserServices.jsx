import axios from "axios";

const headerConfig = {
        headers: { 'x-access-token': localStorage.getItem('token')}
}

export const LoginApi = (userData)=>{
        let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",userData)
        return response
}

export const gettingData = async ()=> {
        let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book", headerConfig)
       return await response
}

export const addToCart = (id)=>{
        let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id, headerConfig)
        return response
}
export const updateCartQty = (id, countObj)=>{
        let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`, countObj, headerConfig)
        return response
}
export const removeCartElement = (id)=>{
        let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`, headerConfig)
        return response
}
export const addToWishlist = (id)=>{
        let response =  axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`, id, headerConfig)
        return response
}
export const getCartData = ()=>{
        let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items", headerConfig)
        return response
}
export const getWishlistItem = ()=>{
        let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items", headerConfig)
        return response
}
export const removeWishlistItem = (id)=>{
        let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`, headerConfig)
        return response
}