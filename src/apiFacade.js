const URL = "https://sinanjasar.dk/3sem-project/api/weather/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function ApiFacade() {
  const makeOptions = (method, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const fetchCityInfo = city => {
    return fetch(URL + "forecast7/" + city, makeOptions("get")).then(
      handleHttpErrors
    );
  };

  const fetchEvents = (city, date) => {
    const eventsURL = "https://runivn.dk/3SEMPROJECT/api/resource/events?"
      + "startdate=" + date
      + "&enddate=" + date
      + "&country=" + city.cityInfo.country
      + "&city=" + city.cityName;
    return fetch(eventsURL, makeOptions("get")).then(handleHttpErrors);
  };
  return { fetchCityInfo, fetchEvents };
}
export default ApiFacade();
