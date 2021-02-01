import React, { useState } from 'react';

function WorkList() {
  return (
    <div>
      <div className="flex-row">
          <div className="container">
          <img
            src={require('../../assets/Portfolio/1.png').default}
            alt="Cake Lab"
            className="img-thumbnail"
          />
          <div class="middle">
          <div class="text">
                  <a href="https://cake-lab-app.herokuapp.com/">Cake Lab</a>
              </div>
          </div>
          </div>

        <div className="container">
          <img
            src={require('../../assets/Portfolio/2.png').default}
            alt="Daily Dashboard"
            className="img-thumbnail"
          />
          <div class="middle">
          <div class="text">
                  <a href="https://leggeamy.github.io/Daily-Dashboard/">Daily Dashboard</a>
              </div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/3.png').default}
            alt="Budget Tracker"
            className="img-thumbnail"
          />
          <div class="middle">
          <div class="text">
                  <a href="https://boiling-harbor-83587.herokuapp.com/">Budget Tracker</a>
              </div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/4.png').default}
            alt="Password Generator"
            className="img-thumbnail"
          />
          <div class="middle">
          <div class="text">
                  <a href="https://leggeamy.github.io/password-generator/">Password Generator</a>
              </div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/5.png').default}
            alt="Horiseon"
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">
                  <a href="https://leggeamy.github.io/horiseon/">Horiseon</a>
              </div>
          </div>
          </div>

          <div className="container">
        <img
            src={require('../../assets/Portfolio/6.png').default}
            alt="Run Buddy"
            className="img-thumbnail"
          />
          <div class="middle">
          <div class="text">
                  <a href="https://leggeamy.github.io/run-buddy/">Run Buddy</a>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
  }

export default WorkList;