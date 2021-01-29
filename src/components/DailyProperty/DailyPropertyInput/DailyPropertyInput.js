import React from 'react';
import classes from '../DailyProperty.module.css';

const DailyPropertyInput = (props) => {
    const {todayProperty} = props.todayProperty;
    return (
      <form className={classes.rowInput}>
        <input
          className={`${classes.inputStyle} ${classes.ml5}`}
          type="number"
          placeholder="دارایی امروز"
          value={todayProperty}
          name="todayProperty"
          onChange={props.getInput}
        ></input>
        <div className={classes.iconBox}>
          <span
            className={`${classes.green} ${classes.pl5}`}
            onClick={props.buySubmit}
          >
            <i className="fas fa-check"></i>
          </span>
          <span className={classes.grey} onClick={props.clearInput}>
            <i className="fas fa-eraser"></i>
          </span>
        </div>
      </form>
    );
}
export default DailyPropertyInput;