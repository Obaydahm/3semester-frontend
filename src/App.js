import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom"
import Search from "./components/Search/Search"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
