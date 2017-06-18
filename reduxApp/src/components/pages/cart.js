import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItemCart, PlusQuantityCart, MinusQuantityCart} from '../../actions/cartActions';
import Modal from 'react-modal';

class Cart extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.cart.cartItems);
        this.onDeleteItemCart = this.onDeleteItemCart.bind(this);
        this.onPlusClick = this.onPlusClick.bind(this);

        this.state = {
            modalIsOpen: false
        };
        this.closeModal = this.closeModal.bind(this);

    }
    render(){
        if(this.props.cart.cartItems[0]){
            return this.renderCart();
        }
        else {
            return this.renderEmptyCart();
        }
    }
    renderEmptyCart(){
        return (
            <div></div>
        );
    };
    onDeleteItemCart(id){
        // console.log(id);
        this.props.deleteItemCart(id);
    }
    onPlusClick(id){
        this.props.PlusQuantityCart(id);
    }
    onMinusClick(id){
        this.props.MinusQuantityCart(id);
    }
    OnPurchaseClick(){
        this.setState({modalIsOpen: true});
    }

      closeModal() {
        this.setState({modalIsOpen: false});
    }

    renderCart(){
        const cartItemsList = this.props.cart.cartItems.map((item)=>{
            return (
                <div key = {item._id} className = "row">
                   
                        <div className="col-xs-12 col-sm-4">
                            <p className = "lead">{item.title} <span></span></p>                        
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <p className="lead">$ {item.price}</p>
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <p className="lead">Số lượng: <label className="label label-success">{item.quantity}</label></p>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                            <div className="btn-group" style = {{minwidth: '300px'}}>
                                <button onClick = { ()=>{ this.onMinusClick(item._id) } } className="btn btn-sm btn-default">-</button>
                                <button onClick = {()=>this.onPlusClick(item._id)} className="btn btn-sm btn-default">+</button>
                                <span></span>
                                <button onClick = {()=>this.onDeleteItemCart(item._id)} className="btn btn-sm btn-danger">Xóa</button>
                            </div>
                        </div>
                        
                </div>
            );
        });
        const customStyles = {
                content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)'
                }
            };
        return (
             
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Giỏ Hàng</h3>
                </div>
                <div className="panel-body">
                    {cartItemsList}
                </div>
                <div className="panel-footer">
                    <h5>Tổng tiền: {this.props.cart.totalAmount}</h5>
                    <button onClick = {this.OnPurchaseClick.bind(this)} className="btn btn-lg btn-success">Thanh Toán</button>
                </div>

                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <div className="modal-header">
                    <button onClick = {this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Cám ơn bạn !</h4>
                </div>
                <div className="modal-body">
                    <h5>Hóa đơn của bạn đã lưu thành công</h5>
                    <p className = "text-primary">Tổng Tiền: {this.props.cart.totalAmount} $</p>
                    <p>Chúng tôi sẽ gửi tới bạn email xác nhận thanh toán</p>
                </div>
                <div className="modal-footer">
                        <button onClick = {this.closeModal} type="button" className="btn btn-default" >Đóng</button>
                        <button type="button" className="btn btn-primary">Lưu Thay Đổi</button>
                </div>
                    
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log("state.cart", state.cart);
    return {
        cart: state.cart
    }
}
function mapActionToProps(dispatch){
    return bindActionCreators({
        deleteItemCart: deleteItemCart,
        PlusQuantityCart: PlusQuantityCart,
        MinusQuantityCart: MinusQuantityCart
    }, dispatch);
}
export default connect(mapStateToProps, mapActionToProps)(Cart);