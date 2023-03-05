import React from 'react';
import '../css/footer.css';
import { Link } from "react-router-dom";



function footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-info'>
                    <div>
                        <h2>ABOUT OUR STORE</h2>
                        <p><b>Cubelelo.com</b> is India's leading cubestore. We started back in 2014 with a mission to provide one stop solution to all your speed-cubing needs. We are trusted and loved by 1 million + cubers across the country. We hope you will enjoy the shopping experience with us.</p>
                        <p><b>Happy Cubing!</b></p>
                    </div>
                    <div>
                        <h2>INFORMATION</h2>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Offers & Discounts</Link></li>
                            <li><Link to="/about">Sponsorships</Link></li>
                            <li><Link to="/about">Gift Card</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>CUSTOMER SERVICE</h2>
                        <ul>
                            <li><Link to="/about">FAQ</Link></li>
                            <li><Link to="/about">Privacy Policy</Link></li>
                            <li><Link to="/about">Shiping Policy</Link></li>
                            <li><Link to="/about">Replacement Policy</Link></li>
                            <li><Link to="/about">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>SUPPORT</h2>
                        <p>For all queries, please reach us on call or WhatsApp on 8080-573-573</p>
                        <p>Timings: 9:30 am to 6:00 pm</p>
                        <p>You can also write to us at <b>support@cubelelo.com</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer