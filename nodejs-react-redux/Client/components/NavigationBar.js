import React from 'react';
import {Link} from 'react-router-dom';
export default ()=>{
    return (
        <nav className = "navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">Son<strong className = "text-warning">CatTuong</strong></a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar navbar-right">
                        <li className="nav navbar-nav navbar-right">
                            <Link to = "test">Test</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}