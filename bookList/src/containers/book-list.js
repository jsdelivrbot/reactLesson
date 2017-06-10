import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return ( <li key = { book.title }
                className = "list-group-item" > { book.title } </li>
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


export default connect(mapStateToProps)(BookList);

/*
phương thức mapStateToProps sẽ truy xuất state books trong reducers.
Ngay khi trạng thái (state) ứng dụng bị thay đổi thì container này sẽ render lại một danh sách các quyển sách
theo trạng thái mới thông qua phương thức connect

*/