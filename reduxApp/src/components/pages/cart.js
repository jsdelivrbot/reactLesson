import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Cart extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.cart);
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
    renderCart(){
        const cartItemsList = this.props.cart.map((item)=>{
            return (
                <div key = {item.id} className = "row">
                    <div className="col-xs-12 col-sm-4">
                        <h4>{item.title} <span className = "badge">{item.price}</span></h4>                        
                    </div>
                </div>
            );
        });
        return (
            <div className="panel panel-default">
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
    console.log("state.cart", state.cart);
    return {
        cart: state.cart
    }
}
// function mapActionToProps(dispatch){
//     bindActionCreators({}, dispatch);
// }
export default connect(mapStateToProps)(Cart);