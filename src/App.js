import React, { Component } from "react";

// Internal Components
import Calendar from "./components/Calendar"; 
import MastHead from "./components/MastHead";
import subMonths from "date-fns/sub_months";
import addMonths from "date-fns/add_months";
import format from "date-fns/format";
// CSS
import "./util.css";
import "./App.css";

// Images 
import "./logo.svg";

//TODO 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: new Date()
    };
    
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
  }
  
  handlePrevButtonClick() {
    this.setState({
      month: subMonths(this.state.month, 1)
    });  
  }
  
  handleNextButtonClick() {
    this.setState({
      month: addMonths(this.state.month, 1)
    });
  }
  
  render() {
    let { month } = this.state;
    
    return (
      <div className="container">
        <MastHead 
          title={format(month, "MMMM GGGG")} 
          onPrevButtonClick={this.handlePrevButtonClick} 
          onNextButtonClick={this.handleNextButtonClick}
        />
        <Calendar month={month}/>
      </div>
    );
  }
}

export default App; 