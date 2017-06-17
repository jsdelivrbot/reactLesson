export default function cartReducer(state = [], action){
    switch(action.type){
        case 'ADD_CART':
            return [...state, action.payload];
        case 'UPDATE_CART':
            let cloneCart = [];
            state.forEach(function(item){
                if(item.id == action.payload.id){
                    item = action.payload;
                }
                cloneCart.push(item);
            });
            return cloneCart;
        case 'PLUS_QUANTITY_CART':
            let Cart = [];
            state.forEach(function(item){
                if(item.id == action.payload){
                    item.quantity ++;
                }
                Cart.push(item);
            });
            return Cart;
        default:
            return state;
    }
}