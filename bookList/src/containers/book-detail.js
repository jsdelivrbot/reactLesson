import React, {Component} from 'react';
import {connect} from 'react-redux';
class BookDetail extends Component {
    render(){
        if(!this.props.book) {
            return <div></div>;
        }
        return (
            <div>
                <h3>Details for: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>pages: {this.props.book.pages}</div>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log("mapStateToProps: " + JSON.stringify(state.activeBook));
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);