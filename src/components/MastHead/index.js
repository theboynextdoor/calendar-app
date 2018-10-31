import React from 'react';
import Logo from './Views/Logo';
import Title from './Views/Title';
import './style.css';

function MastHead({title}) {
    return (
        <header className='masthead'> 
            <Logo src="https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png" text="Calendar" />
            <Title title={title} />
        </header> 
    );
}

export default MastHead; 