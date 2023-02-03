import React from 'react'
import "./swiperport.css";
import IMG1 from "../../assets/p1.jpg";
import IMG2 from "../../assets/p2.jpg";
import IMG3 from "../../assets/p3.jpg";
import IMG4 from "../../assets/p4.jpg";
import IMG5 from "../../assets/p5.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Swiperport = () => {
    return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2 className='h2swipe'>Portfolio</h2>


    <Swiper className="container testimonials__container" 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }} >

        <SwiperSlide className="container portfolio__container">
        <article className="portfolio__itemswipe">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3 className='h3swipe'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        </SwiperSlide>

        <SwiperSlide className="container portfolio__container">
        <article className="portfolio__itemswipe">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3 className='h3swipe'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        </SwiperSlide>

        <SwiperSlide className="container portfolio__container">
        <article className="portfolio__itemswipe">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3 className='h3swipe'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        </SwiperSlide>

        <SwiperSlide className="container portfolio__container">
        <article className="portfolio__itemswipe">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3 className='h3swipe'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        </SwiperSlide>

        <SwiperSlide className="container portfolio__container">
        <article className="portfolio__itemswipe">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3 className='h3swipe'>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        </SwiperSlide>

    </Swiper>
    </section>
)
}

export default Swiperport