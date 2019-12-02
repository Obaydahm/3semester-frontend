import React from "react";
import "./CityInfo.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CityInfo({ city }) {
  return (
    <div className="cityinfo-wrapper">
      <div className="cityinfo-topbar">
        <h1>{city.cityName}</h1>
        <h3>{city.cityInfo.country}</h3>
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
                <span>{city.cityInfo.continent}</span>
              </div>

              <div className="item">
                <span className="title">Country</span>
                <span>{city.cityInfo.country}</span>
              </div>

              <div className="item">
                <span className="title">State</span>
                <span>{city.cityInfo.state}</span>
              </div>

              <div className="item">
                <span className="title">Calling Code</span>
                <span>+{city.cityInfo.callingcode}</span>
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
                <span>{city.cityInfo.currency_name}</span>
              </div>

              <div className="item">
                <span className="title">Abbreviation</span>
                <span>{city.cityInfo.currency_abbreviation}</span>
              </div>

              <div className="item">
                <span className="title">Symbol</span>
                <span>{city.cityInfo.currency_symbol}</span>
              </div>

              <div className="item">
                <span className="title">Subunit</span>
                <span>{city.cityInfo.currency_subunit}</span>
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
                <span>{city.cityInfo.timezone_region}</span>
              </div>

              <div className="item">
                <span className="title">Timezone</span>
                <span>{city.cityInfo.timezone_short}</span>
              </div>

              <div className="item">
                <span className="title">Offset</span>
                <span>{city.cityInfo.timezone_offset}</span>
              </div>

              <div className="item">
                <span className="title">Offset in seconds</span>
                <span>{city.cityInfo.timezone_offset_seconds}</span>
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
                <span>{city.cityInfo.roadinfo_driveon}</span>
              </div>

              <div className="item">
                <span className="title">Speed in</span>
                <span>{city.cityInfo.roadinfo_unit}</span>
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
                <span>{city.cityInfo.qibla}&#176;</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CityInfo;
