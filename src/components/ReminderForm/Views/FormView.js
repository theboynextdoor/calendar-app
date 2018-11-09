import React from "react";
import Modal from "../../Modal";
import ColorPicker from "../../ColorPicker";
import "../index.css";

const DeleteButton = (props) => (<button className="btn btn--mute m-r-1" onClick={props.onClick}>DELETE</button>); 

// Field Values: title, startTime, endTime, date, color
export default function ReminderForm(props) {
  return (
    <Modal onClick={props.onModalClick} showModal={props.showModal}>
      <div className="reminder-form">
        <div className="row m-t-1">
          <input 
            type="text" 
            className={props.hasTitleError ? "input-field input-field--title input-field--error" : "input-field input-field--title" } 
            placeholder="Add Title" 
            aria-label="Enter title here"
            value={props.title}
            onChange={props.onTitleChange}
            onBlur={props.onTitleBlur}
            required
          /> 
          <ColorPicker 
            colorOptions={props.colorOptions} 
            color={props.color} 
            onColorOptionClick={props.onColorOptionClick} 
            onColorButtonClick={props.onColorButtonClick}
            isOptionsDisplayed={props.isOptionsDisplayed}
            />
        </div>
        <div className="row row--center-x m-t-1 bg-gray">
          <input 
            type="text"
            className={props.hasDateError ? "input-field input-field--error input-field--date w-50" : "input-field input-field--date w-50"}
            arial-label="Enter date here"
            onChange={props.onDateChange}
            onBlur={props.onDateBlur}
            value={props.date}
            required
          />
          <div className="row row--center-x w-50">
            <input 
              type="text"
              className={props.hasStartTimeError ? "input-field input-field--time input-field--error" : "input-field input-field--time"}
              aria-label="Enter reminder's start time"
              onChange={props.onStartTimeChange}
              onBlur={props.onStartTimeBlur}
              value={props.startTime}
              required
            />  
            <div className="seperator">&ndash;</div>
            <input
              type="text"
              className={props.hasEndTimeError ? "input-field input-field--time input-field--error" : "input-field input-field--time"}
              aria-label="Enter reminder's end time"
              onChange={props.onEndTimeChange}
              onBlur={props.onEndTimeBlur}
              value={props.endTime}
              required
            />  
          </div>
        </div>
        <div className="btns m-t-1">
          <button className="btn" onClick={props.onSaveButtonClick}>SAVE</button>
          {(props.type === "edit") ? <DeleteButton onClick={props.onDeleteButtonClick} /> : null}
        </div>
      </div>
    </Modal>
  );
}