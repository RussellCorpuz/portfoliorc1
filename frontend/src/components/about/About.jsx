import React from 'react'
import './about.css'
import ME from '../../assets/mee.jpg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {RiFolderOpenFill} from 'react-icons/ri'


const About = () => {
  return (
      <section id='about'>
        <h5 className="">Get to know</h5>
        <h2 className="">About ME</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" className="" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Years of Working Experience</small>
              </article>
              <article className='about__card'>
                <HiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>List of Future Clients</small>
              </article>
              <article className='about__card'>
                <RiFolderOpenFill className='about__icon'/>
                <h5>Projects</h5>
                <small>List of Projects</small>
              </article>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, et. Harum, obcaecati eveniet corporis doloribus aspernatur consectetur totam at ratione facilis deleniti corrupti voluptas cumque praesentium quas velit voluptates hic!</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
  )
}

export default About