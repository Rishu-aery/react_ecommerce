import React from 'react'
import Nav from '../components/nav.jsx'
import Slider from '../components/slider.jsx'
import Cards from '../components/cards.jsx'
import Footer from '../components/footer.jsx'


export default function home() {
    return (
        <>
            <Nav></Nav>
            <Slider></Slider>
            <Cards></Cards>
            <Footer></Footer>
        </>
    )
}
