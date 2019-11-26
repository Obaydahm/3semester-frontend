import React, { useState } from 'react';

import "./CityInfo.css";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CityInfo({ facade }) {

  return (
    <div className="cityinfo-wrapper">
      <div className="cityinfo-topbar">
        <h1>Copenhagen</h1>
        <h3>Denmark</h3>
      </div>

      <div className="cityinfo-content">
        <Row>

          <Col md="4">
            <div className="cityinfo-content-box">

              <div className="icon">
                <FontAwesomeIcon icon="question-circle" />
              </div>
              <div className="header">General information</div>

              <div className="item">
                <span className="title">Continent</span>
                <span>Europe</span>
              </div>

              <div className="item">
                <span className="title">Country</span>
                <span>Denmark</span>
              </div>

              <div className="item">
                <span className="title">State</span>
                <span>Capital Region of Denmark</span>
              </div>

              <div className="item">
                <span className="title">Calling Code</span>
                <span >+45</span>
              </div>
            </div>
          </Col>

          <Col md="4">
            <div className="cityinfo-content-box">

              <div className="icon">
                <FontAwesomeIcon icon="usd-circle" />
              </div>
              <div className="header">Currency</div>

              <div className="item">
                <span className="title">Name</span>
                <span>Danish Krone</span>
              </div>

              <div className="item">
                <span className="title">Abbreviation</span>
                <span>DKK</span>
              </div>

              <div className="item">
                <span className="title">Symbol</span>
                <span>kr.</span>
              </div>

              <div className="item">
                <span className="title">Subunit</span>
                <span >Øre</span>
              </div>
            </div>
          </Col>

          <Col md="4">
            <div className="cityinfo-content-box">

              <div className="icon">
                <FontAwesomeIcon icon="clock" />
              </div>
              <div className="header">Timezone</div>

              <div className="item">
                <span className="title">Region</span>
                <span>Europe/Copenhagen</span>
              </div>

              <div className="item">
                <span className="title">Timezone</span>
                <span>CET - Central Europe Time</span>
              </div>

              <div className="item">
                <span className="title">Offset</span>
                <span >+0100</span>
              </div>

              <div className="item">
                <span className="title">Offset in seconds</span>
                <span>3600</span>
              </div>

            </div>
          </Col>

          <Col md="4">
            <div className="cityinfo-content-box">

              <div className="icon">
                <FontAwesomeIcon icon="road" />
              </div>
              <div className="header">Road</div>

              <div className="item">
                <span className="title">Drive on</span>
                <span>Right side</span>
              </div>

              <div className="item">
                <span className="title">Speed in</span>
                <span>km/h</span>
              </div>

            </div>
          </Col>

          <Col md="4">
            <div className="cityinfo-content-box">

              <div className="icon">
                <FontAwesomeIcon icon="kaaba" />
              </div>
              <div className="header">Qibla</div>

              <div className="item">
                <span className="title">Direction degree</span>
                <span>138</span>
              </div>

            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
}

export default CityInfo;