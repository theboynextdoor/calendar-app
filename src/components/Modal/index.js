import React from 'react'; 
import './index.css';

function Modal(props) {
    return (
        <div className={props.showModal ? "modal center-x-y" : "modal modal--hidden center-x-y"}>
            <div className="modal__background"></div>
            <div className="modal__content">
                <button 
                    className="modal__close-btn" 
                    onClick={props.onClick}>
                    <i className="fas fa-times"></i>
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;