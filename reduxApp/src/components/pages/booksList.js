"use strict"
import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {GetBooks} from '../../actions/bookActions';
// import { Grid, Col, Row, Button} from 'react-bootstrap';

class BooksList extends React.Component{
    constructor(props){
        super(props);
        // this.renderItem= this.renderItem.bind(this);
        this.props.GetBooks();
    };
    
    render(){
        const bookList = this.props.books.map((book)=>{
            return (
                <div id="book-item"  key = {book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.discription}</p>
                    <p>{book.price}</p>
                    <button className = "btn btn-primary">Buy Now</button>
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