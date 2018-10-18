import React from 'react';

function CreateReminder(props) {
    return(
        <div className="reminder-card">
            <input type="text" onChange={props.onTitleChange} placeholder="Add title" aria-label="Input title" />
            <div class="gray-container">
                <input type="text" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
                <div className="time">
                    <input type="text" required className="start-time" />
                    <input type="text" required className="end-time" />
                </div>
            </div>
        </div>
    );
}

export default CreateReminder; 