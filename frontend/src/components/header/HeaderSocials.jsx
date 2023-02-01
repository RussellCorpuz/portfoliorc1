import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithubSquare} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" className="" target="_blank"><CiLinkedin /></a>
        <a href="https://github.com" className="" target="_blank"><FaGithubSquare /></a>
        <a href="https://facebook.com" className="" target="_blank"><AiOutlineFacebook /></a>
    </div>
  )
}

export default HeaderSocials