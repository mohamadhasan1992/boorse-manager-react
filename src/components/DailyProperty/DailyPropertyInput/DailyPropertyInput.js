import React from 'react';
import {useRef} from "react";
import classes from '../DailyProperty.module.css';
import {DatePicker} from 'react-persian-datepicker';
import {BoorseContext} from '../../../context/context';



const DailyPropertyInput = (props) => {
  const {dailyProperty} = React.useContext(BoorseContext);
  console.log(dailyProperty);
  const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
  };
    const { value } = props.dayProperty;
    
    
    return (
      <form className={classes.rowInput}>
        <div className={classes.dayStyle}>
          
          <select
            name="day"
            className={classes.dropStyle}
            onChange={props.getInput}
          >
            <option value="شنبه" selected>
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
            calendarStyles={styles}
            onChange={props.setDate}
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