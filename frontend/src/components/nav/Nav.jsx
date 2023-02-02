import React from 'react'
import './nav.css'
import {MdHomeWork} from 'react-icons/md'
import {FaUserTie} from 'react-icons/fa'
import {MdOutlineWork} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {BsTelephoneInboundFill} from 'react-icons/bs'
import {FcLike} from 'react-icons/fc'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHomeWork /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWork /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsTelephoneInboundFill /></a>
      <a href="" onClick={() => setActiveNav('')} className={activeNav === '' ? 'active' : ''}><FcLike /></a>
    </nav>
  )
}

export default Nav