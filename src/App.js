import React, { Component } from "react";
import { connect } from "react-redux"; 

// Internal Components
import Calendar from "./components/Calendar"; 
import MastHead from "./components/MastHead";

import subMonths from "date-fns/sub_months";
import addMonths from "date-fns/add_months";
import format from "date-fns/format";
import isSameMonth from "date-fns/is_same_month";
import isSameYear from "date-fns/is_same_year";

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
    let previousMonth = subMonths(this.state.month, 1); 
    let firstMonth = Object.keys(this.props.days)[0];
    
    if (!isSameMonth(firstMonth, previousMonth)) {
      this.setState({
        month: previousMonth
      });
    }
  }
  
  handleNextButtonClick() {
    let nextMonth = addMonths(this.state.month, 1); 
    let dates = Object.keys(this.props.days);
    
    let lastMonth = dates[dates.length - 1]; 

    // check to make sure that the month doesn't exceed the last month
    if (!isSameMonth(lastMonth, nextMonth) && !isSameYear(lastMonth, nextMonth) ) {
      this.setState({
        month: nextMonth
      });
    }
    
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

const mapStateToProps = state => {
  return {
    days: state.days 
  }
}

export default connect(mapStateToProps, {})(App);
