import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItemCart} from '../../actions/cartActions';

class Cart extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.cart);
        this.onDeleteItemCart = this.onDeleteItemCart.bind(this);
    }
    render(){
        if(this.props.cart[0]){
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
    renderCart(){
        const cartItemsList = this.props.cart.map((item)=>{
            return (
                <div key = {item._id} className = "row">
                    <div className="panel panel-default">
                        <div className="col-xs-12 col-sm-4">
                            <p className = "lead">{item.title} <span></span></p>                        
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <p className="lead">$ {item.price}</p>
                        </div>
                        <div className="col-xs-6 col-sm-2">
                            <p className="lead">qty: <label className="label label-success">{item.quantity}</label></p>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                            <div className="btn-group" style = {{minwidth: '300px'}}>
                                <button className="btn btn-sm btn-default">-</button>
                                <button className="btn btn-sm btn-default">+</button>
                                <span></span>
                                <button onClick = {()=>this.onDeleteItemCart(item._id)} className="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Cart</h3>
                </div>
                <div className="panel-body">
                    {cartItemsList}
                </div>
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
        deleteItemCart: deleteItemCart
    }, dispatch);
}
export default connect(mapStateToProps, mapActionToProps)(Cart);