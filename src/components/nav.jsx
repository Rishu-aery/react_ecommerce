import React from 'react'
import '../nav.css'
import '../assets/images/logo.png'
export default function nav() {
    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src='https://fakeimg.pl/100x100'></img><r className="colorwhite">E-commerce</r> </a>
                    
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
            {/* <nav className='navbar'>
                <img src="https://fakeimg.pl/100x100" />
                <p>E commerce</p>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>

            </nav> */}
        </>
    )
}
