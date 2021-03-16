import React from "react";
import classes from '../../propertyDetail.module.css';
import Icon from '../../../UI/icons/icons';

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
    <div className={`${classes.Content} ${classes.Completed}`}>
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
        <Icon
          icontype="file"
          clicked={props.deleteProperty}
        />
        <Icon
          icontype="edit"
          clicked={props.editProperty}
        />
      </div>
    </div>
  );
};
export default PropertyCompleted;
