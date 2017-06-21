import axios from 'axios';
import caculateCart from '../../shared/caculateCart';

export function addToCart(currentCart, book){
    let newCart = {cartItems: [...currentCart.cartItems, book]}; 
    
    newCart.totalAmount = caculateCart(newCart.cartItems).totalAmount;
    newCart.totalQty = caculateCart(newCart.cartItems).totalQty; 
    return function(dispatch){
        axios.post('/api/cart', {cart: newCart})
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
export function PlusQuantityCart(id, currentCart){
    // const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 500);
    let cloneCart = {cartItems:[]};
    currentCart.cartItems.forEach(function(item){
        if(item._id == id){
            item.quantity ++;
        }
        cloneCart.cartItems.push(item);
    });

    return function(dispatch){

        axios.post('/api/cart', {cart: cloneCart})
        .then(function(res){
            dispatch({
                type: "PLUS_QUANTITY_CART",
                payload: res.data.cart
            })
        })
        .catch(function(err){
            dispatch({
                type: 'PLUS_QUANTITY_CART_ERR',
                payload: err
            })
        })
    };
}
export function MinusQuantityCart(id, currentCart){
    // const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 500);
    let cloneCart = {cartItems:[]};
    currentCart.cartItems.forEach(function(item){
        if(item._id == id){
            item.quantity --;
            if(item.quantity < 1) item.quantity = 1;
        }
        cloneCart.cartItems.push(item);
    });

    return function(dispatch){

        axios.post('/api/cart', {cart: cloneCart})
        .then(function(res){
            dispatch({
                type: "MINUS_QUANTITY_CART",
                payload: res.data.cart
            })
        })
        .catch(function(err){
            dispatch({
                type: 'MINUS_QUANTITY_CART_ERR',
                payload: err
            })
        })
    };
}
// export function MinusQuantityCart(id){
//     console.log("id = ", id);
//     return {
//         type: "MINUS_QUANTITY_CART",
//         payload: id
//     }
// }
export function deleteItemCart(id, currentCart){
    console.log("id = ", id);
    console.log("currentCart = ", currentCart);
    let deletedCart = {...currentCart};
    
    deletedCart.cartItems = deletedCart.cartItems.filter(function(item){
        return item._id != id;
    });
    deletedCart.totalAmount = caculateCart(deletedCart.cartItems).totalAmount;
    deletedCart.totalQty = caculateCart(deletedCart.cartItems).totalQty;
    console.log("deletedCart ", deletedCart);

    return function(dispatch){
        axios.post('/api/cart', {
            cart: deletedCart
        })
        .then(function(res){
            dispatch({
                type: "DELETE_ITEM_CART",
                payload: res.data.cart
            })
        })
        .catch(function(err){
            dispatch({
                type: 'DELETE_ITEM_CART_ERR',
                payload: err
            })
        })
    }
}
