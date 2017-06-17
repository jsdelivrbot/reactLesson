"use strict"
import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {GetBooks} from '../../actions/bookActions';

class BooksList extends React.Component{
    constructor(props){
        super(props);
        // this.renderItem= this.renderItem.bind(this);
        this.props.GetBooks();
    };
    

    
    render(){
        const bookItems = this.props.books.map((book)=>{
            return (
                <div id="book-item" className="group-item" key = {book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.discription}</p>
                    <p>{book.price}</p>
                </div>
            );
        });

        return (
            <div>
                {bookItems}
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