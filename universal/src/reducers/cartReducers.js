export default function cartReducer(state = {
                                                cartItems: [],
                                                totalAmout: 0,
                                                totalQty: 0
                                            }, action){
    switch(action.type){
        case 'ADD_CART':{
            return {
                cartItems: action.payload.cartItems,
                totalAmount: action.payload.totalAmount,
                totalQty: action.payload.totalQty
            };}
        case 'GET_CART':{
            const cartItems = [...action.payload.cartItems];

            return {
                cartItems: action.payload.cartItems,
                totalAmount: action.payload.totalAmount,
                totalQty: action.payload.totalQty
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
            return {
                cartItems: action.payload.cartItems,
                totalAmount: action.payload.totalAmount,
                totalQty: action.payload.totalQty
            };
        }
        case 'MINUS_QUANTITY_CART': {
            return {
                cartItems: action.payload.cartItems,
                totalAmount: action.payload.totalAmount,
                totalQty: action.payload.totalQty
            };
        }
        case 'DELETE_ITEM_CART': {
            return {
                cartItems: action.payload.cartItems,
                 totalAmount: action.payload.totalAmount,
                 totalQty: action.payload.totalQty
            };
        }
        default:
            return state;
    }
}
