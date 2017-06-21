import axios from 'axios';

export function GetBooks (){
    return function(dispatch){
            axios.get('/api/books')
            .then(function(res){
                dispatch({
                    type: 'Get_BOOKS',
                    payload: res.data.books
                })
            })
            .catch(function(err){
                dispatch({
                    type: 'GET_BOOKS_ERR',
                    payload: err
                })
            })
        }
    
}
export function PostBook (books){
    return function(dispatch){
        axios.post('/api/books', {books: books})
        .then(function(res){
            dispatch({
                type: 'POST_BOOK',
                payload: res.data.books
            })
        })
        .catch(function(err){
            dispatch({
                type: 'POST_BOOK_ERR',
                payload: err
            })
        })
    }
}
export function DeleteBook (id){
    return function(dispatch){
        axios.delete(`/api/books/${id}`)
        .then(function(res){
            dispatch({
                type: 'DELETE_BOOK',
                payload: id
            })
        })
        .catch(function(err){
            dispatch({
                type: 'DELETE_BOOK_ERR',
                payload: err
            })
        })
    }
}
export function UpdateBook (book){
    return function(dispatch){
        axios.put(`/api/books/${book._id}`, {book: book})
        .then(function(res){
            dispatch({
                type: 'UPDATE_BOOK',
                payload: res.data
            })
        })
        .catch(function(err){
            dispatch({
                type: 'UPDATE_BOOK_ERR',
                payload: err
            })
        })
    }
}