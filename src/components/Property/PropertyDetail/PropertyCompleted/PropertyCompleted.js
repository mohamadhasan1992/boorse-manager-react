import React from 'react';
import classes from "../propertyDetail.module.css";

const PropertyCompleted = (props) => {
    const {name, buyDate, buyValue, buyPrice, buyPurpose , sellDate,sellValue,sellPrice, sellPurpose} = props.property;
    return (
      <div className={classes.Content}>
        <div className={classes.inputStyle}>{name}</div>
        <div className={classes.inputStyle}>{buyDate}</div>
        <div className={classes.inputStyle}>{buyValue}</div>
        <div className={classes.inputStyle}>{buyPrice}</div>
        <div className={classes.inputStyle}>{buyPurpose}</div>
        <div className={classes.inputStyle}>{sellDate}</div>
        <div className={classes.inputStyle}>{sellValue}</div>
        <div className={classes.inputStyle}>{sellPrice}</div>
        <div className={classes.inputStyle}>{sellPurpose}</div>
      </div>
    );
};
export default PropertyCompleted;