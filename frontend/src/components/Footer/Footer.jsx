import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Get your favorite meals delivered fast with Tomato. Explore top restaurants, enjoy exclusive deals, and stay connected for updates. Download the app today for hassle-free food delivery!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>
                    Get in touch!
                </h2>
                <ul>
                    <li>+12-345-678-901</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024  © Tomato.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
