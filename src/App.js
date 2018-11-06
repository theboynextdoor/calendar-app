import React, { Component } from "react";
import { connect } from "react-redux";

// Internal Components
import Calendar from "./components/Calendar"; 

// CSS
import "./util.css";
import "./App.css";

// Images 
import "./logo.svg";

class App extends Component { 
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Calendar />
    );
  }
}

export default App; 