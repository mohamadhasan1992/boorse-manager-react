import React from "react";
import classes from '../../propertyDetail.module.css';

const PropertyCompleted = (props) => {
  const {
    name,
    buyDate,
    buyValue,
    buyPrice,
    buyPurpose,
    sellDate,
    sellValue,
    sellPrice,
    sellPurpose,
  } = props.property;
  return (
    <div className={classes.Content}>
      <div>{name}</div>
      <div>{buyDate}</div>
      <div>{buyValue}</div>
      <div>{buyPrice}</div>
      <div>{buyPurpose}</div>
      <div>{sellDate}</div>
      <div>{sellValue}</div>
      <div>{sellPrice}</div>
      <div>{sellPurpose}</div>
      <div className={classes.iconBox}>
        <span className={`${classes.red} ${classes.pl5}`} onClick={props.deleteProperty}>
          <i className="fas fa-trash-alt"></i>
        </span>
        <span className={classes.grey} onClick={props.editProperty}>
          <i className="fas fa-eraser"></i>
        </span>
      </div>
    </div>
  );
};
export default PropertyCompleted;
