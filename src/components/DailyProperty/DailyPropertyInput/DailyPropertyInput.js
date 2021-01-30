import React from 'react';
import classes from '../DailyProperty.module.css';
import {Calendar, DatePicker} from 'react-persian-datepicker';

const DailyPropertyInput = (props) => {
  const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
  };
    const { value, day, date } = props.dayProperty;
    const getInput = (value) => {
      console.log(value);
    }
    return (
      <form className={classes.rowInput}>
        <div className={classes.dayStyle}>
          <lable for="days" className={classes.pl5}>
            روز هفته
          </lable>
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
          <DatePicker calendarStyles={styles} name="date" onChange={(value) =>getInput(value)}/>
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