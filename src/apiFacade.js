const URL = "https://sinanjasar.dk/3sem-project/api/weather/";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

class ApiFacade {
  makeOptions(method, body) {
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
  }

  fetchCityInfo = (city) => {
    return fetch(URL + "forecast7/" + city, this.makeOptions("get")).then(handleHttpErrors).catch(err => console.log(err));
  }

}
const facade = new ApiFacade();
export default facade;