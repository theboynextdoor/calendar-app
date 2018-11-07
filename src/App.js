import React, { Component } from "react";

// Internal Components
import Calendar from "./components/Calendar"; 

// CSS
import "./util.css";
import "./App.css";

// Images 
import "./logo.svg";

class App extends Component { 
  render() {
    return (
      <Calendar />
    );
  }
}

export default App; 