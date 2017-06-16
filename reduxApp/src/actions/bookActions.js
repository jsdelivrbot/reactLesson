export function PostBook (books){
    return {
        type: 'POST_BOOK',
        payload: books
    };
}
export function DeleteBook (id){
    return {
        type: 'DELETE_BOOK',
        payload: id
    };
}
export function UpdateBook (book){
    return {
        type: 'UPDATE_BOOK',
        payload: book
    };
}