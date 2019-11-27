import React from "react";
import { Link, useHistory } from "react-router-dom";
import exit from "./icons/exit.svg";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search() {
  const [searches, setSearches] = useState([]);
  const [search, setSearch] = useState("");

  const iconCloudStyle = {
    fontSize: "60px",
    color: "#f2f8ff"
  };
  const iconSunStyle = {
    fontSize: "30px",
    color: "yellow",
    marginTop: "27px",
    marginLeft: "-5px"
  };
  const spanStyle = {
    padding: "45px 0px"
  };

  const history = useHistory();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (localStorage.getItem("searches") !== null) {
      searches = localStorage.getItem("searches").split(",");
    }

    /* If search already exists, remove and at to front */
    searches = searches.filter(s => s.toLowerCase() !== search.toLowerCase());
    const capitalized =
      search.charAt(0).toUpperCase() + search.substring(1).toLowerCase();
    searches.unshift(capitalized);
    /* ------------------------------------------------ */

    /* If there are more than 5 searches, remove the first search */
    if (searches.length > 5) {
      searches.pop();
    }
    /* ---------------------------------------------------------- */

    setSearches(searches);
    setSearch("");
    localStorage.setItem("searches", searches);
    history.push("/" + capitalized);
  }

  return (
    <div className="search-wrapper">
      <Link to="/">
        <img alt="exit-icon" src={exit} className="search-exit" />
      </Link>

      <span className="fa-layers fa-fw" style={spanStyle}>
        <FontAwesomeIcon icon="circle" style={iconSunStyle} />
        <FontAwesomeIcon icon="cloud" style={iconCloudStyle} />
      </span>

      <h1>Search for a city</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            onChange={handleChange}
            type="text"
            value={search}
            placeholder="Search for a city ..."
          ></input>
          <button onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={["fal", "search-location"]}
              className="search-magnifier"
            />
          </button>
        </div>
      </form>
      <h4>Latest searches</h4>
      <ul>
        {localStorage.getItem("searches") !== null ? (
          localStorage
            .getItem("searches")
            .split(",")
            .map((search, index) => (
              <li key={index}>
                <Link to={search}>{search}</Link>
              </li>
            ))
        ) : (
          <p>
            Nothing to see here{" "}
            <span role="img" aria-label="wink-smiley">
              &#128521;
            </span>
          </p>
        )}
      </ul>
    </div>
  );
}

export default Search;
