import React from 'react';
import {DatePicker} from 'react-persian-datepicker';
import classes from "../propertyDetail.module.css";
import calendarStyles from './calendarStyles.module.css';
import moment from 'moment-jalaali';


const PropertyInput = (props) => {
  
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
      <form className={classes.Content}>
        <input
          className={classes.inputStyle}
          type="string"
          placeholder="نماد جدید"
          value={name}
          id="name"
          name="name"
          onChange={props.getInput}
        ></input>
        <DatePicker
          className={`${classes.inputStyle} ${classes.buyDateClass}`}
          calendarStyles={calendarStyles}
          name="buyDate"
          onChange={(e) => props.getDateInput(e, "buyDate")}
        />
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="حجم خرید"
          value={buyValue}
          id="buyValue"
          name="buyValue"
          onChange={props.getInput}
        ></input>
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="قیمت خرید"
          value={buyPrice}
          id="buyPrice"
          name="buyPrice"
          onChange={props.getInput}
        ></input>
        <input
          className={classes.inputStyle}
          type="string"
          placeholder="هدف خرید"
          value={buyPurpose}
          id="buyPurpose"
          name="buyPurpose"
          onChange={props.getInput}
        ></input>
        <DatePicker
          className={`${classes.inputStyle} ${classes.sellDateClass}`}
          calendarStyles={calendarStyles}
          name="sellDate"
          onChange={(e) => props.getDateInput(e, "sellDate")}
        />
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="حجم فروش"
          value={sellValue}
          id="sellValue"
          name="sellValue"
          onChange={props.getInput}
        ></input>
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="قیمت فروش"
          value={sellPrice}
          id="sellPrice"
          name="sellPrice"
          onChange={props.getInput}
        ></input>
        <input
          className={classes.inputStyle}
          type="text"
          placeholder="هدف فروش"
          value={sellPurpose}
          id="sellPurpose"
          name="sellPurpose"
          onChange={props.getInput}
        ></input>
        <div className={classes.iconBox}>
          <span
            className={`${classes.cursor} ${classes.green} ${classes.pl5}`}
            onClick={props.buySubmit}
          >
            <i className="fas fa-check"></i>
          </span>
          <span
            className={`${classes.cursor} ${classes.grey}`}
            onClick={props.clearInput}
          >
            <i className="fas fa-eraser"></i>
          </span>
        </div>
      </form>
    );
}
export default PropertyInput;