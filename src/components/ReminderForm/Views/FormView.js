import React from "react";
import Overlay from "../../Overlay";
import Modal from "../../Modal";
import ColorPicker from "../../ColorPicker";
import "../index.css";

const DeleteButton = (props) => (<button className="btn btn--mute m-r-1" onClick={props.onClick}>DELETE</button>); 
const TitleInput= (props) => ( 
  <input 
    type="text" 
    className="input-field input-field--title" 
    placeholder="Add Title" 
    aria-label="Enter title here"
    value={props.title}
    onChange={props.onChange}
    required
  /> 
);

const DateInput = (props) => (
  <input 
      type="text"
      className={props.hasError ? "input-field input-field--error input-field--date w-50" : "input-field input-field--date w-50"}
      arial-label="Enter date here"
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.date}
      required
  />
);

const StartTimeInput = (props) => (
  <input 
      type="text"
      className={props.hasError ? "input-field input-field--time input-field--error" : "input-field input-field--time"}
      aria-label="Enter reminder's start time"
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.startTime}
      required
  />  
);

const EndTimeInput = (props) => (
  <input
    type="text"
    className={props.hasError ? "input-field input-field--time input-field--error" : "input-field input-field--time"}
    aria-label="Enter reminder's end time"
    onChange={props.onChange}
    onBlur={props.onBlur}
    value={props.endTime}
    required
  />  
); 

// Field Values: title, startTime, endTime, date, color
export default function ReminderForm(props) {
  return (
    <Overlay classNames={["center-x-y"]}>
      <Modal onClick={props.onModalClick}>
        <div className="reminder-form">
          <div className="row m-t-1">
            <TitleInput title={props.title} onChange={props.onTitleChange} />
            <ColorPicker 
              colorOptions={props.colorOptions} 
              color={props.color} 
              onColorOptionClick={props.onColorOptionClick} 
              onColorButtonClick={props.onColorButtonClick}
              isOptionsDisplayed={props.isOptionsDisplayed}
              />
          </div>
          <div className="row row--center-x m-t-1 bg-gray">
            <DateInput date={props.date} onChange={props.onDateChange} onBlur={props.onDateBlur} hasError={props.hasDateError}/>
            <div className="row row--center-x w-50">
              <StartTimeInput startTime={props.startTime} onChange={props.onStartTimeChange} onBlur={props.onStartTimeBlur} hasError={props.hasStartTimeError}/>
              <div className="seperator">&ndash;</div>
              <EndTimeInput endTime={props.endTime} onChange={props.onEndTimeChange} onBlur={props.onEndTimeBlur} hasError={props.hasEndTimeError}/>
            </div>
          </div>
          <div className="btns m-t-1">
            <button className="btn" onClick={props.onSaveButtonClick}>SAVE</button>
            {(props.type === "edit") ? <DeleteButton onClick={props.onDeleteButtonClick} /> : null}
          </div>
        </div>
      </Modal>
    </Overlay>
  );
}