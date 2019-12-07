import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import "./CityInfo.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CityInfo({ city, setCity, facade }) {
  const match = useRouteMatch();
  useEffect(() => {
    if (city === null || city === "") {
      facade
        .fetchCityInfo(match.params.cityName)
        .then(data => setCity(data));
    }

  }, []);

  document.body.style = "background: #fff";
  return (
    <div className="cityinfo-wrapper">
      <div className="cityinfo-topbar">
        <h1>{city.cityName}</h1>
        <h3>{city.country}</h3>
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
                <span>{city.continent}</span>
              </div>

              <div className="item">
                <span className="title">Country</span>
                <span>{city.country}</span>
              </div>

              <div className="item">
                <span className="title">State</span>
                <span>{city.state}</span>
              </div>

              <div className="item">
                <span className="title">Calling Code</span>
                <span>+{city.callingCode}</span>
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
                <span>{city.currencyName}</span>
              </div>

              <div className="item">
                <span className="title">Abbreviation</span>
                <span>{city.currencyAbb}</span>
              </div>

              <div className="item">
                <span className="title">Symbol</span>
                <span>{city.currencySymbol}</span>
              </div>

              <div className="item">
                <span className="title">Subunit</span>
                <span>{city.currencySubunit}</span>
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
                <span>{city.timezoneRegion}</span>
              </div>

              <div className="item">
                <span className="title">Timezone</span>
                <span>{city.timezoneShort}</span>
              </div>

              <div className="item">
                <span className="title">Offset</span>
                <span>{city.timezoneOffset}</span>
              </div>

              <div className="item">
                <span className="title">Offset in seconds</span>
                <span>{city.timezoneOffsetSeconds}</span>
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
                <span>{city.roadInfoDriveSide}</span>
              </div>

              <div className="item">
                <span className="title">Speed in</span>
                <span>{city.roadInfoSpeedUnit}</span>
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
                <span>{city.qibla}&#176;</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CityInfo;
