import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, PlusQuantityCart} from '../../actions/cartActions';

class BookItem extends React.Component {
    constructor(props){
        super(props);
    }
    BuyNowClick(){
        let book = {
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            quantity: 1
        };
        if(this.props.cart.cartItems.length > 0) {
            let _id = this.props._id;
            let indexCart = this.props.cart.cartItems.findIndex(function(item){
                return item._id == _id;
            })
            if(indexCart== -1){
                this.props.addToCart(this.props.cart, book);
            }
            else {
                this.props.PlusQuantityCart(this.props.cart.cartItems[indexCart]._id, this.props.cart);
            }
        }
        else {
            this.props.addToCart(this.props.cart, book);
        }
        
    }
    render(){
        return(
            <div className="well">
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className = "text-center" >{this.props.title}</h4>
                        
                        { (this.props.image)?(<img style = {{maxWidth: '100%', height:'170px'}} src = {'/images/' +this.props.image}/>) : ("")  }
                        <h4>$ {this.props.price}</h4>
                        <p>{this.props.description}</p>
                        <button onClick = {this.BuyNowClick.bind(this)} className="btn btn-primary">Mua Ngay</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
};
function mapActionToProps(dispatch){
    return bindActionCreators({
        addToCart: addToCart,
        PlusQuantityCart: PlusQuantityCart
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(BookItem);