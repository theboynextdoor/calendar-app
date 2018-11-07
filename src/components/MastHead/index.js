import React from 'react';
import Logo from './Views/Logo';
import Title from './Views/Title';
import './style.css';

function MastHead(props) {
    return (
        <header className='masthead'> 
            <Logo src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" text="Calendar" />
            <button onClick={props.onPrevButtonClick} className="btn--prev">prev</button>
            <Title title={props.title} />
            <button onClick={props.onNextButtonClick} className="btn--next">next</button>
        </header> 
    );
}

export default MastHead; 