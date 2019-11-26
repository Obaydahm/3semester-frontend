import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import facade from './apiFacade';
import Search from "./components/Search/Search";
import CityInfo from "./components/CityInfo/CityInfo";
import "./App.css";

function App() {
  library.add(fas);

  const [searches, setSearches] = useState([]);
  const [city, setCity] = useState({});
  /*initialize city on fetch method and pass as props to Search component. Then it can be added to list of latest searches*/
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search searches={searches} city={city} setSearches={setSearches} facade={facade} />
        </Route>
        <Route path="/cityinfo">
          <CityInfo city={city} facade={facade} />
        </Route>
      </Router>
    </div>
  );
}
function Home() {

  const linkStyle = {
    fontSize: '20px',
    color: '#999999'
  };

  return (
    <div>
      {localStorage.getItem("searches")}
      <br />
      <Link to="/search" style={linkStyle}>Search</Link><br />
      <Link to="/cityinfo" style={linkStyle}>City Info</Link>
    </div>
  );
}
export default App;
