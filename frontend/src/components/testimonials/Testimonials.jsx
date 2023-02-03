import React from 'react'
import './testimonials.css'
import CL from '../../assets/u1.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>


      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">

        <article className='testimonial'>
          <div>
          <div className="client__avatar" >
              <img src={CL} alt="client1" />
          </div>
            <h5 className='client__name'>Fname Lname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, explicabo? Blanditiis, similique harum repudiandae beatae eos labore perspiciatis rerum cupiditate autem? Hic suscipit culpa autem harum, praesentium at sequi eos.
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div>
          <div className="client__avatar" >
              <img src={CL} alt="client1" />
          </div>
            <h5 className='client__name'>Fname Lname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, explicabo? Blanditiis, similique harum repudiandae beatae eos labore perspiciatis rerum cupiditate autem? Hic suscipit culpa autem harum, praesentium at sequi eos.
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div>
          <div className="client__avatar" >
              <img src={CL} alt="client1" />
          </div>
            <h5 className='client__name'>Fname Lname</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, explicabo? Blanditiis, similique harum repudiandae beatae eos labore perspiciatis rerum cupiditate autem? Hic suscipit culpa autem harum, praesentium at sequi eos.
            </small>
          </div>
        </article>
        
      </div>

    </section>
  )
}

export default Testimonials