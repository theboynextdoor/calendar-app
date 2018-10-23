import React from 'react'; 
import './index.css';

function Modal(props) {
    return (
        <div className="modal">
            <button className="modal--close" onClick={props.onClick}><i className="fas fa-times"></i></button>
            {props.children}
        </div>
    );
}

export default Modal;