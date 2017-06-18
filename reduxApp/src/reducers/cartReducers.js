export default function cartReducer(state = {
                                                cartItems: [],
                                                totalAmout: 0
                                            }, action){
    // let cloneCart = [];
    switch(action.type){
        case 'ADD_CART':
            const cartItems = [...state.cartItems, action.payload];
            return {
                cartItems: cartItems,
                totalAmount: total(cartItems)
            };
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
                totalAmount: total(cloneCart)
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
                totalAmount: total(cloneCart)
            };
        }
        case 'MINUS_QUANTITY_CART': {
            let cloneCart = [];
            state.cartItems.forEach(function(item){
                if(item._id == action.payload){
                    item.quantity --;
                    if(item.quantity < 0) item.quantity = 0;
                }
                cloneCart.push(item);
            });
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart)
            };
        }
        case 'DELETE_ITEM_CART': {
            let cloneCart = [];
            cloneCart = state.cartItems.filter(function(item){
                return item._id != action.payload;
            })
            return {
                cartItems: cloneCart,
                totalAmount: total(cloneCart)
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
    },0)
    return totalAmount;
}