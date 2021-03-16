import React from 'react';
import classes from "../../propertyDetail.module.css";
import Icon from '../../../UI/icons/icons';


//if edit is true all the columns should be inputs
//if edit is not true buy part should be displayed
const PropertyBought = (props) => {
      const {
      name,
      buyDate,
      buyValue,
      buyPrice,
      buyPurpose,
    } = props.property;
    return (
      <div className={classes.Content}>
        <div className={classes.Border}>{name}</div>
        <div className={classes.Border}>{buyDate}</div>
        <div className={classes.Border}>{buyValue}</div>
        <div className={classes.Border}>{buyPrice}</div>
        <div className={classes.Border}>{buyPurpose}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className={classes.iconBox}>
          <Icon
            icontype="trash"
            clicked={props.deleteProperty}
          />
          <Icon
            icontype="edit"
            clicked={props.editProperty}
          />
        </div>
      </div>
    );
    
    
    
}

export default PropertyBought;
