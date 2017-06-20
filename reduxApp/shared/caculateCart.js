export default function caculateCart(cartItems){
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