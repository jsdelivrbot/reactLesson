import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

class BookItem extends React.Component {
    constructor(props){
        super(props);
    }
    BuyNowClick(){
        const book = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price
        };
        this.props.addToCart(book);
    }
    render(){
        return(
            <div className="well">
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className = "text-center" >{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <h4>$ {this.props.price}</h4>
                        <button onClick = {this.BuyNowClick.bind(this)} className="btn btn-primary">Buy Now</button>
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
        addToCart: addToCart
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(BookItem);