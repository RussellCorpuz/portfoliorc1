import React from "react";
import "./experience.css";
import { BiBookmarkHeart } from "react-icons/bi";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="">Skills I have</h5>
      <h2 className="">My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontent">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BiBookmarkHeart className="experience__details-icon" />
              <div>
                <h4>Phyton</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
