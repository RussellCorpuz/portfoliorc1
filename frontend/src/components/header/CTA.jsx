import React from 'react'
import CV from '../../assets/bg.jpg'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className="btn btn-primary">Send Message</a>
    </div>
  )
}

export default CTA