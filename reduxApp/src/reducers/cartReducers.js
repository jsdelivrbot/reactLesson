export default function cartReducer(state = {
                                                cartItems: [],
                                                totalAmout: 0,
                                                totalQty: 0
                                            }, action){
    // let cloneCart = [];
    switch(action.type){
        case 'ADD_CART':{
            const cartItems = [...state.cartItems, action.payload];
            return {
                cartItems: cartItems,
                totalAmount: total(cartItems).totalAmount,
                totalQty: total(cartItems).totalQty
            };}
        case 'GET_CART':{
            const cartItems = [...state.cartItems, action.payload];
            console.log("cartItems ", cartItems);
            console.log("action.payload ", action.payload);

            return {
                cartItems: cartItems,
                totalAmount: total(cartItems).totalAmount,
                totalQty: total(cartItems).totalQty
            };}
        case 'UPDATE_CART':{
            let cloneCart = [];
            state.cartItems.forEach(function(item){
                if(item._id == action.payload._id){
                    item = action.payload;
                }
                cloneCart.push(item);
            });
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart).totalAmount,
                totalQty: total(cloneCart).totalQty
            };
        }
        case 'PLUS_QUANTITY_CART': {
            let cloneCart = [];
            state.cartItems.forEach(function(item){
                if(item._id == action.payload){
                    item.quantity ++;
                }
                cloneCart.push(item);
            });
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart).totalAmount,
                totalQty: total(cloneCart).totalQty
            };
        }
        case 'MINUS_QUANTITY_CART': {
            let cloneCart = [];
            state.cartItems.forEach(function(item){
                if(item._id == action.payload){
                    item.quantity --;
                    if(item.quantity < 1) item.quantity = 1;
                }
                cloneCart.push(item);
            });
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart).totalAmount,
                totalQty: total(cloneCart).totalQty
            };
        }
        case 'DELETE_ITEM_CART': {
            let cloneCart = [];
            cloneCart = state.cartItems.filter(function(item){
                return item._id != action.payload;
            })
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart).totalAmount,
                totalQty: total(cloneCart).totalQty
            };
        }
        default:
            return state;
    }
}
//caculate total
export function  total(cartItems){
    const totalAmount = cartItems.map(function(item){
        return item.price * item.quantity;
    }).reduce(function(a, b){
        return a + b;
    },0);
    const totalQty = cartItems.map(function(item){
        return item.quantity;
    }).reduce(function(a, b){
        return a + b;
    },0);
    return {
        totalAmount:totalAmount,
        totalQty: totalQty
    };
}