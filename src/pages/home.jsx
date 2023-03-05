import React from 'react'
import Nav from '../components/nav.jsx'
import Slider from '../components/slider.jsx'
import Cards from '../components/cards.jsx'
import Footer from '../components/footer.jsx'
import Container from '../components/container.jsx'



export default function home() {
    return (
        <>
            <Nav></Nav>
            <Slider></Slider>
            <Container></Container>
            <Cards></Cards>
            <Footer></Footer>
        </>
    )
}
