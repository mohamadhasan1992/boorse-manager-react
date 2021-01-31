import React from "react";
import classes from '../DailyProperty.module.css';

const DailyPropertyItem = (props) => {
    const { value,date,day } = props.propertyValue;
    return (
      <div className={classes.tableItem}>
        <div className={classes.pl5}>{day}</div>
        <div className={classes.pl5}>{date}</div>
        <div className={classes.pl10}>{value}</div>
        <div className={classes.iconBox}>
          <span
            className={`${classes.red} ${classes.pl5}`}
            onClick={props.delete}
          >
            <i className="fas fa-trash"></i>
          </span>
          <span className={classes.grey} onClick={props.edit}>
            <i className="fas fa-eraser"></i>
          </span>
        </div>
      </div>
    );
};
export default DailyPropertyItem;
