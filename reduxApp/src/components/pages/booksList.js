"use strict"
import React from 'react';
import {connect } from "react-redux";


class BooksList extends React.Component{
    constructor(props){
        super(props);
        // this.renderItem= this.renderItem.bind(this);
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

export default connect(mapStateToProps)(BooksList) ;