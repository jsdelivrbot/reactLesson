import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Route, Switch  } from 'react-router-dom';
import ProductDetail from './productDetail';
export default function(){
    return (
        <div id = "login">
            <h1>Danh sách sản phẩm</h1>
            <Link to = "products/detail">Sản phẩm</Link>
            <Route path = '/products/detail' component = {ProductDetail}/>
        </div>
        
    );
}