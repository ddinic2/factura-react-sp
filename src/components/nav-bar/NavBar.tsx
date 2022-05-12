import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="nav-link" to='/'>My invoices</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/partners'}>Partners</NavLink> 
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/my-company'}>My company</NavLink> 
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to={'/service-items'}>Services</NavLink> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;