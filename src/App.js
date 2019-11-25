import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
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
          <Search searches={searches} city={city} setSearches={setSearches} />
        </Route>
      </Router>
    </div>
  );
}
function Home() {
  return <div>{localStorage.getItem("searches")}</div>;
}
export default App;
