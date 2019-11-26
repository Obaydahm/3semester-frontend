import React from 'react';

function CityInfo({ facade }) {
  const logCity = (event) => {
    event.preventDefault();
    facade.fetchCityInfo("Copenhagen").then(data => console.log(data));
  }
  return (
    <button onClick={logCity}>klik</button>
  )
}

export default CityInfo;