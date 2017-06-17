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
export function deleteItemCart(id){
    console.log("id = ", id);
    return {
        type: "DELETE_ITEM_CART",
        payload: id
    }
}