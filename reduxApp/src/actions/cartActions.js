export function addToCart(book){
    return {
        type: "ADD_CART",
        payload: book
    }
}