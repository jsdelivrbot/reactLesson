export function addToCart(book){
    return {
        type: "ADD_CART",
        payload: book
    }
}
export function updateCart(book){
    return {
        type: "UPDATE_CART",
        payload: book
    }
}
export function PlusQuantityCart(id){
    console.log("id = ", id);
    return {
        type: "PLUS_QUANTITY_CART",
        payload: id
    }
}