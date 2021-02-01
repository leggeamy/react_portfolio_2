import React, { useState } from 'react';

function WorkList() {
  return (
    <div>
      <div className="flex-row">
          <div className="container">
          <img
            src={require('../../assets/Portfolio/1.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Cake Lab</div>
          </div>
          </div>

        <div className="container">
          <img
            src={require('../../assets/Portfolio/2.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Daily Dashboard</div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/3.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Budget Tracker</div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/4.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Password Generator</div>
          </div>
          </div>

          <div className="container">
          <img
            src={require('../../assets/Portfolio/5.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Horiseon</div>
          </div>
          </div>

          <div className="container">
        <img
            src={require('../../assets/Portfolio/6.png').default}
            className="img-thumbnail"
          />
          <div class="middle">
              <div class="text">Run Buddy</div>
          </div>
          </div>
      </div>
    </div>
  );
  }

export default WorkList;