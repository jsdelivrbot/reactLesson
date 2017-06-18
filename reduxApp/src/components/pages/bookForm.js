import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
// import {Panel} from 'react-bootstrap';
import {DeleteBook, PostBook, UpdateBook} from '../../actions/bookActions';

class BookForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.autoGenId = this.autoGenId.bind(this);
        this.state = {
            _id: 0,
            title: "",
            description: "",
            price: 0
        }
    };
    onSubmitForm(e){
        e.preventDefault();

        this.autoGenId();

        this.props.PostBook([this.state]);
        this.state = {
             _id: 0,
            title: "",
            description: "",
            price: 0
        }
        this.setState(this.state);
    }
    autoGenId(){
        let maxId = 0;
        this.props.books.forEach((item)=>{
            if(item._id > maxId) maxId = item._id;
        })
        maxId ++;
        this.state._id = maxId;
        this.setState(this.state);
    }
    render(){
        return(
            <div className = "well">
                <div className="panel panel-default">
                    <form onSubmit = {this.onSubmitForm} action="">
                        <div className="group-control">
                            <label>Tiêu Đề</label>
                            <input className = "form-control" type="text" placeholder = "Điền tiêu đề sách"
                                value = {this.state.title} onChange = {e=>this.setState({title: e.target.value})}
                            />                        
                        </div>
                        <div className="group-control">
                            <label>Mô Tả</label>
                            <input className = "form-control" type="text" placeholder = "Điền mô tả cuốn sách"
                                value = {this.state.description} onChange = {e=>this.setState({description: e.target.value})}
                            />                        
                        </div>
                        <div className="group-control">
                            <label>Giá bán</label>
                            <input className = "form-control" type="text" placeholder = "Điền giá bán"
                                value = {this.state.price} onChange = {e=>this.setState({price: e.target.value})}
                            />                        
                        </div>
                        <br/>
                        <button className="btn btn-lg btn-primary">Lưu Thông Tin</button>
                    </form>
                </div>                    
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
};
function mapActionToProps(dispatch){
    return bindActionCreators({
        PostBook,
        UpdateBook,
        DeleteBook
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(BookForm);
