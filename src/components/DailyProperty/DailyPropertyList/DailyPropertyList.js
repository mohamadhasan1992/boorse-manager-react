import React from "react";
import classes from '../DailyProperty.module.css';

const DailyPropertyList = (props) => {
    const { value,date,day } = props.propertyValue;
    console.log(value);
    return (
      <tr className={classes.list}>
        <div className={classes.pl5}>{day}</div>
        <div className={classes.pl5}>{date}</div>
        <div className={classes.pl10}>{value}</div>
        <div className={classes.iconBox}>
          <span
            className={`${classes.red} ${classes.pl5}`}
            onClick={props.buySubmit}
          >
            <i className="fas fa-trash"></i>
          </span>
          <span className={classes.grey} onClick={props.clearInput}>
            <i className="fas fa-eraser"></i>
          </span>
        </div>
      </tr>
    );
};
export default DailyPropertyList;
