"use strict"
import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {GetBooks} from '../../actions/bookActions';
// import { Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';
import {getCart} from '../../actions/cartActions';


class BooksList extends React.Component{
    constructor(props){
        super(props);
        this.props.GetBooks();
        this.props.getCart();      
    };

    render(){
        console.log('this.props = ', this.props);
        const bookList = this.props.books.map((book)=>{
            return (
                <div id="book-item" className = "col-xs-12 col-sm-6 col-md-4"  key = { `book_${book._id}`}>
                    <BookItem
                        _id = {book._id}
                        title = {book.title}
                        description = {book.description}
                        price = {book.price}
                        image = { (book.image)?(book.image) : ("")   }
                    />
                </div>
            );
        });
        
        return (
            <div className = "container">
                <div id = "bookList" className="row">                   
                    {bookList}
                </div>
            </div>
        );
    };
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}
function mapActionToProps(dispatch){
    return bindActionCreators({
        GetBooks: GetBooks,
        getCart: getCart
    }, dispatch);
}
export default connect(mapStateToProps, mapActionToProps)(BooksList) ;