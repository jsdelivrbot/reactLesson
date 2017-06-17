export default function cartReducer(state = [], action){
    // let cloneCart = [];
    switch(action.type){
        case 'ADD_CART':
            return [...state, action.payload];
        case 'UPDATE_CART':{
            let cloneCart = [];
            state.forEach(function(item){
                if(item._id == action.payload._id){
                    item = action.payload;
                }
                cloneCart.push(item);
            });
            return cloneCart;
        }
        case 'PLUS_QUANTITY_CART': {
            let cloneCart = [];
            state.forEach(function(item){
                if(item._id == action.payload){
                    item.quantity ++;
                }
                cloneCart.push(item);
            });
            return cloneCart;
        }
        case 'MINUS_QUANTITY_CART': {
            let cloneCart = [];
            state.forEach(function(item){
                if(item._id == action.payload){
                    item.quantity --;
                }
                cloneCart.push(item);
            });
            return cloneCart;
        }
        case 'DELETE_ITEM_CART': {
            let cloneCart = [];
            cloneCart = state.filter(function(item){
                return item._id != action.payload;
            })
            return cloneCart;
        }
        default:
            return state;
    }
}