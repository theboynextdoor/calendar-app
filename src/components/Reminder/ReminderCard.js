import React from "react"; 

export default function ReminderCard(props) {
    return (
        <div className="reminder-card">
            <header className="reminder-card__header" style={props.styleHeader}>
                <ul className="reminder-card__action-container">
                    {props.children}
                </ul>
                <h2 className="reminder-card__title">{props.title}</h2>
            </header>
            <div className="reminder-card__body">
                <p className="reminder-card__date">{props.date}</p>
            </div>
        </div>
    ); 
}