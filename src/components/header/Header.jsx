import React from 'react'
import './header.css'

import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Dipen Chovatiya</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={ME} alt="Dipen Chovatiya" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>

    </header>
  )
}

export default Header