import React from 'react';
import '../master.css';

function Header(props) {
    return (
        <div className="calendar__row">
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Sun</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Mon</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Tue</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Wed</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Thu</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Fri</span>
          </div>
          <div className="calendar__header p-t-1">
            <span className="calendar__label">Sat</span>
          </div>
        </div>
    );
}

export default Header; 