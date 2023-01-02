import React from 'react';
import '../css/nav.css';
import { Link } from "react-router-dom";

export default function nav () {
    return (
    <div className = "header">
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <a href = "/" className="navbar-brand"><img src='https://fakeimg.pl/100x100'></img>
                <Link to='/' className="colorwhite">E-commerce</Link> </a>
                
                <form className="d-flex">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
                <div className='login'>
                    <p>Login/signup</p>
                    <h4>My account<i class="fa-solid fa-chevron-down icon1"></i></h4>
                </div>
                <div className='line'></div>
                <div className='cart'>
                    <i class="fa-solid fa-cart-shopping icon2"></i>
                    <h3>Cart</h3>
                </div>
            </div>
        </nav>

        <div className='navlink'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Puzzels</Link>
                </li>
                <li>
                    <Link to="/category">Categories</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/sales">Sales</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
        </div>
        
    </div>
    )
}
