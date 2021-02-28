import React from 'react';
import {useRef} from "react";
import classes from '../DailyProperty.module.css';
import {DatePicker} from 'react-persian-datepicker';
import {BoorseContext} from '../../../context/context';
import moment from 'moment-jalaali';
import calendarStyles from "./datepickerstyle.module.css";



const DailyPropertyInput = (props) => {
  
    const { value } = props.dayProperty;
    
    
    
    return (
      <form className={classes.rowInput}>
        <div className={classes.dayStyle}>
          <select
            name="day"
            className={classes.dropStyle}
            onChange={props.getInput}
          >
            <option value="شنبه" defaultValue={true}>
              شنبه
            </option>
            <option value="یکشنبه">یکشنبه</option>
            <option value="دوشنبه">دوشنبه</option>
            <option value="سه شنبه">سه شنبه</option>
            <option value="چهارشنبه">چهارشنبه</option>
          </select>
        </div>

        <div className={classes.calendar}>
          <DatePicker
            className={classes.inputStyle}
            calendarStyles={calendarStyles}
            onChange={(value) => props.setDate(value)}
          />
          <span className={`${classes.green} ${classes.icon}`}>
            <i className="fas fa-calendar-day"></i>
          </span>
        </div>
        <div className={classes.propertyStyle}>
          <input
            className={`${classes.inputStyle} ${classes.ml5}`}
            type="number"
            placeholder="دارایی امروز"
            value={value}
            name="value"
            onChange={props.getInput}
          ></input>

          <div className={classes.iconBox}>
            <span
              className={`${classes.green} ${classes.pl5}`}
              onClick={props.submitInput}
            >
              <i className="fas fa-check"></i>
            </span>
            <span className={classes.grey} onClick={props.clearInput}>
              <i className="fas fa-eraser"></i>
            </span>
          </div>
        </div>
      </form>
    );
}
export default DailyPropertyInput;