import React from 'react';
import coverImage from "../../assets/images/about_cover.png";

function About() {
  return (
    <section>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <div>
        <p>
        Born and raised in London, Ontario, Amy Legge is a visual artist and an aspiring full-stack web developer. She has several years of operations management experience, for ecommerce brands and marketing agencies. She is currently enrolled in the University of Toronto's Continuing Studies Coding Bootcamp, set to graduate February 2021.
        </p>
      </div>
    </section>
  );
}

export default About;