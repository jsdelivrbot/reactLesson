import React from 'react';
// import {Panel} from 'react-bootstrap';

class BookForm extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "well">
                <div className="panel panel-default">
                    <div className="group-control">
                        <label>Tiêu Đề</label>
                        <input className = "form-control" type="text" placeholder = "Điền tiêu đề sách"
                            ref = "title"
                        />                        
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
                </div>                    
            </div>
        );
    }
}

export default BookForm;