"use strict"
import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {GetBooks} from '../../actions/bookActions';
// import { Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';

class BooksList extends React.Component{
    constructor(props){
        super(props);
        // this.renderItem= this.renderItem.bind(this);
        this.props.GetBooks();
    };
    
    render(){
        const bookList = this.props.books.map((book)=>{
            return (
                <div id="book-item" className = "col-xs-12 col-sm-6 col-md-4"  key = {book.id}>
                    <BookItem
                        id = {book.id}
                        title = {book.title}
                        description = {book.discription}
                        price = {book.price}
                    />
                </div>
            );
        });

        return (
            // <Grid>
            //     <Row style = {{marginTop: '15px'}}>
            //         {bookList}
            //     </Row>
            // </Grid>
            <div className = "container">
                <div id = "bookList" className="row"> 
                    <div className="col-xs-12 col-sm-6">
                        <BookForm/>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <Cart/>
                    </div>
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
        GetBooks: GetBooks
    }, dispatch);
}
export default connect(mapStateToProps, mapActionToProps)(BooksList) ;