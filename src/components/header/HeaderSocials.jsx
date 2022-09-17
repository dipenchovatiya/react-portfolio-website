import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/dipenchovatiya" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/dipenchovatiya" target="_blank"><FaGithubSquare/></a>
        <a href="https://instagram.com/dipenchovatiya" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocials