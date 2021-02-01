import React from 'react';
import coverImage from "../../assets/images/resume_cover.png";


function Resume() {
  return (
    <section>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <div>
        <h2>AMY LEGGE</h2>
        <h4>LONDON, ONTARIO N6J 1K4</h4>
        <h4>Phone: 519-709-3989</h4>
        <h3>SUMMARY</h3>
        <ul>
          <li>Ambitious full stack web developer with a passion for creative problem-solving.</li>
          <li>Versatile team player with proven success managing and collaborating with cross-functional teams.</li>
          <li>Flexible, fast learner who brings curiousity and enthusiasm to every project.</li>
          <li>Proficient in the MERN stack.</li>
        </ul>
       <p>
           
       </p>
        <h3>TECHNICAL SKILLS</h3>
        <ul>
          <li>
            MongoDB
          </li>
          <li>
            Express
          </li>
          <li>
            React
          </li>
          <li>
            Node
          </li>
        </ul>
        <h3>PROJECTS</h3>
        <ul>
          <li>
          <a href="../Portfolio/index.js">View My Portfolio</a>
          </li>
        </ul>

        <h3>EDUCATION</h3>
        <ul>
          <li>
            Bootcamp Certificate: University of Toronto, School of Continuing Studies Coding Bootcamp, 24 weeks
          </li>
          <li>
            Bachelor's Degree: Western University, London Ontario
          </li>
        </ul>
        
        <h3>EXPERIENCE</h3>
        <ul>
          <li>
            Operations Manager, adHOME Creative, 2017-2020
          </li>
          <li>
            Operations Manager, Tiny Devotions, 2016-2017
          </li>
          <li>
            Assistant Manager, Tiny Devotions, 2016
          </li>
          <li>
            Finance Administrator, Tiny Devotions, 2015-2016
          </li>
          <li>
            Administrative Assistant, Chelsey Park Retirement Home, 2013-2015
          </li>
        </ul>





      </div>
    </section>
  );
}

export default Resume;