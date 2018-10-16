import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className="calendar-header">
          <div>
            <span>Sun</span>
          </div>
          <div>
            <span>Mon</span>
          </div>
          <div>
            <span>
              Tue
            </span>
          </div>
          <div>
            <span>
              Wed
            </span>
          </div>
          <div>
            <span>
              Thu
            </span>
          </div>
          <div>
            <span>
              Fri
            </span>
          </div>
          <div>
            <span>
              Sat
            </span>
          </div>
        </div>
    );
}
