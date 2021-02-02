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
                  <a href="https://cake-lab-app.herokuapp.com/" target="_blank">Cake Lab</a>
                  <a href="https://github.com/lylylong/cake-app" target="_blank">GitHub Repo</a>
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
                  <a href="https://leggeamy.github.io/Daily-Dashboard/" target="_blank">Daily Dashboard</a>
                  <a href="https://github.com/leggeamy/Daily-Dashboard" target="_blank">GitHub Repo</a>
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
                  <a href="https://boiling-harbor-83587.herokuapp.com/" target="_blank">Budget Tracker</a>
                  <a href="https://github.com/leggeamy/Budget-Tracker" target="_blank">GitHub Repo</a>
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
                  <a href="https://leggeamy.github.io/password-generator/" target="_blank">Password Generator</a>
                  <a href="https://github.com/leggeamy/password-generator" target="_blank">GitHub Repo</a>
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
                  <a href="https://leggeamy.github.io/horiseon/" target="_blank">Horiseon</a>
                  <a href="https://github.com/leggeamy/horiseon" target="_blank">GitHub Repo</a>
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
                  <a href="https://leggeamy.github.io/run-buddy/" target="_blank">Run Buddy</a>
                  <a href="https://github.com/leggeamy/run-buddy" target="_blank">GitHub Repo</a>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
  }

export default WorkList;