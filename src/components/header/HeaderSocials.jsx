import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dipenchovatiya" target="_blank" rel="noopener noreferrer"><ImLinkedin/></a>
        <a href="https://github.com/dipenchovatiya" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="http://instagram.com/dipenchovatiya" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100060588042568" target="_blank" rel="noopener noreferrer"><AiFillFacebook/></a>
        <a href="https://wa.me/7163424094?text=Hi%20Dipen%2C%20I%20am%20interested%20in%20your%20work%20and%20want%20to%20talk%20more%20about%20it%21" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp/></a>
    </div>
  )
}

export default HeaderSocials