import axios from 'axios';

export function addToCart(book){
    return function(dispatch){
        axios.post('/api/cart', {cart: book})
        .then(function(res){
            dispatch({
                type: 'ADD_CART',
                payload: res.data.cart
            })
        })
        .catch(function(err){
            dispatch({
                type: 'ADD_CART_ERR',
                payload: err
            })
        });
    }
    // return {
    //     type: "ADD_CART",
    //     payload: book
    // }
}
export function getCart(){
    return function(dispatch){
        axios.get('/api/cart')
        .then(function(res){
            dispatch({
                type: "GET_CART",
                payload: res.data.cart
            })
        })
        .catch(function(err){
            dispatch({
                type: 'GET_CART_ERR',
                payload: err
            })
        });
    }
}
export function updateCart(book){
    return {
        type: "UPDATE_CART",
        payload: book
    }
}
export function PlusQuantityCart(id){
    // console.log("id = ", id);
    return {
        type: "PLUS_QUANTITY_CART",
        payload: id
    }
}
export function MinusQuantityCart(id){
    console.log("id = ", id);
    return {
        type: "MINUS_QUANTITY_CART",
        payload: id
    }
}
export function deleteItemCart(id){
    console.log("id = ", id);
    return {
        type: "DELETE_ITEM_CART",
        payload: id
    }
}