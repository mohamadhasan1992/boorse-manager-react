import React from 'react';
import {DatePicker} from 'react-persian-datepicker';
import classes from "../propertyDetail.module.css";


const PropertyInput = (props) => {
  const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
  };
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
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="تاریخ خرید"
          value={buyDate}
          id="buyDate"
          name="buyDate"
          onChange={props.getInput}
        ></input>
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
        <input
          className={classes.inputStyle}
          type="number"
          placeholder="تاریخ فروش"
          value={sellDate}
          id="sellDate"
          name="sellDate"
          onChange={props.getInput}
        ></input>
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
export default PropertyInput;