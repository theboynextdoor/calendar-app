import React from 'react';
import Logo from './Logo';
import Title from './Title';
import './style.css';

function MastHead(props) {
    return (
        <header className='masthead'> 
            <Logo />
            <Title title={props.title} />
        </header> 
    );
}

export default MastHead; 