import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom";

function Events({ city, setCity, facade, notFound, setNotFound }) {
  const match = useRouteMatch();
  const [events, setEvents] = useState([]);
  const [eventsNotFound, setEventsNotFound] = useState(false);
  useEffect(() => {
    if (city !== "" && city !== undefined) {
      facade.fetchEvents(city, match.params.date)
        .then(data => setEvents(data))
        .catch(e => setEventsNotFound(true));
    }
  }, []);

  return (
    <div>
      <h4>Events</h4>
      {
        eventsNotFound ? (
          <p>No events was found for that specific date</p>
        )
          :
          (
            events.map((event, i) => (
              <ul key={i}>
                <li>Event: <b>{event.eventName}</b></li>
                <li>Date: {event.eventDate}</li>
                <li>Address: {event.eventAddress}</li>
                <li><a href={event.eventURL} target="_blank" rel="noopener noreferrer">Get tickets</a></li>
              </ul>
            ))
          )
      }
    </div>
  );
}

export default Events;