import React from 'react';
import classes from "../../propertyDetail.module.css";


//if edit is true all the columns should be inputs
//if edit is not true buy part should be displayed
const PropertyBought = (props) => {

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
      bought,
      edit,
    } = props.property;
    return (
      <div className={classes.Content}>
        <div>{name}</div>
        <div>{buyDate}</div>
        <div>{buyValue}</div>
        <div>{buyPrice}</div>
        <div>{buyPurpose}</div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
        <div className={classes.iconBox}>
          <span
            className={`${classes.red} ${classes.pl5}`}
            onClick={props.deleteProperty}
          >
            <i className="fas fa-trash-alt"></i>
          </span>
          <span className={classes.grey} onClick={props.editProperty}>
            <i className="fas fa-eraser"></i>
          </span>
        </div>
      </div>
    );
    
    
    
}

export default PropertyBought;
