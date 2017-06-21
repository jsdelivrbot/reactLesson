import React from 'react';
import {connect } from "react-redux";
import {bindActionCreators} from 'redux'
// import {Panel} from 'react-bootstrap';
import {DeleteBook, PostBook, UpdateBook} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';
import axios from 'axios';
import {GetBooks} from '../../actions/bookActions';

class BookForm extends React.Component {
    constructor(props){
        super(props);
        this.props.GetBooks();  
        this.state = {
            images: [{}],
            img: ''
        }
        
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.autoGenId = this.autoGenId.bind(this);
        this.resetDefaultValue = this.resetDefaultValue.bind(this);
        this.onDeleteBook = this.onDeleteBook.bind(this);
    };
    componentDidMount(){
        axios.get('/api/images')
        .then(function(res){
            this.setState({images: res.data.images})
        }.bind(this))
        .catch(function(err){
            this.setState({
                images: 'Đã có lỗi trong khi load dữ liệu'
            })
        }.bind(this));
    }
    onSubmitForm(e){
        e.preventDefault();

        // let newId = this.autoGenId();
        const book = [{
            // _id: newId,
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
            image: findDOMNode(this.refs.selectedImage).value
        }]
        this.props.PostBook(book);
        this.resetDefaultValue();
    }
    onDeleteBook(){
        this.props.DeleteBook(findDOMNode(this.refs.deleteBook).value);
    }
    resetDefaultValue(){
        findDOMNode(this.refs.description).value = "";
        findDOMNode(this.refs.title).value = "";
        findDOMNode(this.refs.price).value = "";
        findDOMNode(this.refs.selectedImage).value = "";
        this.setState({img: ''});
    }
    autoGenId(){
        let maxId = 0;
        this.props.books.forEach((item)=>{
            if(item._id > maxId) maxId = item._id;
        });
        maxId ++;
        return maxId;        
    }
    onSelectImage(){
        console.log(`has changed ${this.refs.selectedImage.value}`);
        this.setState({
            img: `/images/${this.refs.selectedImage.value}`
        })
    }
    render(){
        const renderIdList = this.props.books.map(function(item){
            return (
                <option key = {item._id} value = {item._id}>{item.title}</option>
            );
        });
        const imageList = this.state.images.map(function(item, i){
            return (
                <option key = {i} value = {item.name}>{item.name}</option>
            );
        }, this)
        return(
            
            <div className = "well">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="panel panel-default">                               
                            <select onChange = {this.onSelectImage.bind(this)} className = 'form-control' ref = "selectedImage" >
                                <option>Chọn ảnh cho sách</option>
                                {imageList}
                            </select>                              
                        </div>                        
                        <img src = {this.state.img} style = {{maxWidth: '100%'}}/>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel panel-default" style = {{padding: '10px'}}>
                            <form onSubmit = {this.onSubmitForm} action="">
                                <div className="form-group has-error">
                                    <label>Tiêu Đề</label>
                                    <input className = "form-control" type="text" placeholder = "Điền tiêu đề sách"
                                    ref = "title"
                                    aria-describedby="inputError2Status"
                                    />
                                    <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
                                    <span id="inputError2Status" className="sr-only">(error)</span>                    
                                </div>
                                <div className="group-control">
                                    <label>Mô Tả</label>
                                    <input className = "form-control" type="text" placeholder = "Điền mô tả cuốn sách"
                                    ref = "description"
                                    />                        
                                </div>
                                <div className="group-control">
                                    <label>Giá bán</label>
                                    <input className = "form-control" type="text" placeholder = "Điền giá bán"
                                    ref = "price"
                                    />                        
                                </div>
                                <br/>
                                <button className="btn btn-lg btn-primary">Lưu Thông Tin</button>
                            </form>
                        </div>
                        <div className="panel panel-default" style = {{padding: '10px'}}>
                            <label htmlFor="sel1">Chọn tiêu đề sách:</label>
                            <div className="input-group">    
                                <select className="form-control" ref = "deleteBook">
                                    <option>Chọn sản phẩm cần xóa</option>
                                    {renderIdList}
                                </select>
                                <span className="input-group-btn">
                                    <button className="btn btn-danger" onClick = {this.onDeleteBook}>Xóa</button>
                                </span>
                                
                            </div>
                        </div>  
                    </div>
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
        DeleteBook,
        GetBooks: GetBooks,
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(BookForm);
