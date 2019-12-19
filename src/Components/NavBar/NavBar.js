import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar navbar-dark bg-info navbar-expand-lg">
            <div className="navbar-brand container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/posts/add">Add Post</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/MyInterests">About</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NavBar;