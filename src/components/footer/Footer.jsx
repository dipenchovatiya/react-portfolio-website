import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DIPEN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Dipen-Chovatiya/100060588042568/"><FaFacebookF/></a>
        <a href="http://instagram.com/dipenchovatiya"><FiInstagram/></a>
        <a href="https://twitter.com/dipenchovatiya"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small> Chardip Tech &copy; 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer