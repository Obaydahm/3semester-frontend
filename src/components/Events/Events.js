import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Events.css";

function Events({ city, setCity, facade, notFound, setNotFound }) {
  const match = useRouteMatch();
  const [events, setEvents] = useState([]);
  const [eventsNotFound, setEventsNotFound] = useState(false);
  useEffect(() => {
    if (city !== "" && city !== undefined) {
      facade.fetchEvents(city, match.params.date)
        .then(data => setEvents(data))
        .catch(e => setEventsNotFound(true));
    } else {
      facade
        .fetchCityInfo(match.params.cityName)
        .then(data => {
          setCity(data);
          /*facade.fetchEvents(city, match.params.date)
            .then(data => setEvents(data))
            .catch(e => setEventsNotFound(true));*/
          console.log(city);
        })
        .catch(e => setNotFound(true));
    }
  }, []);

  return (
    <div className="event-wrapper">
      {
        eventsNotFound ? (
          <p>No events was found for that specific date</p>
        )
          :
          (
            events.map((event, i) => (
              <div key={i} className="event">
                <div className="event-name">{event.eventName}</div>
                <div className="event-details">
                  <div className="detail">
                    <label>Date</label>
                    <div>{event.eventDate}</div>
                  </div>

                  <div className="detail">
                    <label>Address</label>
                    <div>{event.eventAddress}</div>
                  </div>

                  <a href={event.eventURL} target="_blank" rel="noopener noreferrer">
                    <span>Get tickets</span>
                    <FontAwesomeIcon icon="ticket-alt" />
                  </a>

                </div>

              </div>
            ))
          )
      }
    </div>
  );
}

export default Events;