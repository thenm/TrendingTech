import React, { Component } from "react";
import "./App.css";
import Techs from "../src/Components/Techs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <div className="card-header"><h1>Trending Technologies</h1></div>
          <Techs />
        </div>
      </div>
    );
  }
}

export default App;
