import Nav from '../components/nav.jsx';
import Footer from '../components/footer.jsx';
import "../css/cart.css";


import React from 'react'

export default function cart() {
  return (
    <>
        <Nav></Nav>
        <div className='cartpage'>
            <h1>Nothing in Cart!</h1>
        </div>
        <Footer></Footer>
    </>
  )
}
  