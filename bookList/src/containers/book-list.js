import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return ( 
                <li 
                key = { book.title }
                onClick = {()=>{this.props.selectBook(book)}}
                className = "list-group-item" > 
                    { book.title } 
                </li>
            );
        });
    }
    render() {
        return ( <ul className = "list-group col-sm-4" > { this.renderList() } </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    //Bất cứ khi nào selectBook thay đổi, kết quả sẽ được chuyển tới toàn bộ
    //reducer
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

/*
phương thức mapStateToProps sẽ truy xuất state books trong reducers.
Ngay khi trạng thái (state) ứng dụng bị thay đổi thì container này sẽ render lại một danh sách các quyển sách
theo trạng thái mới thông qua phương thức connect

*/