import React from 'react';
import {Link, NavLink} from 'react-router-dom';
export default ()=>{
    return (
        <nav className = "navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/">
                        Son<strong className = "text-warning">CatTuong</strong>
                    </NavLink>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar navbar-right">
                        <li className="nav navbar-nav navbar-right">
                            <Link to = "signup">Đăng Ký</Link>
                        </li>
                        <li className="nav navbar-nav navbar-right">
                            <Link to = "login">Đăng Nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}