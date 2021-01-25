import React from 'react';
import classes from "../propertyDetail.module.css";


const PropertyForBuy = (props) => {
    const {name ,buyDate, buyValue, buyPrice, buyPurpose} = props.property;
    
    return (
      <form className={classes.Content}>
        <input
          className={classes.inputStyle}
          placeholder="نماد جدید"
          type="text"
          id="name"
          name="name"
          onChange={props.handleBuyChange}
          value={name}
        ></input>
        <input
          className={classes.inputStyle}
          placeholder="تاریخ خرید"
          type="number"
          value={buyDate}
          id="buyDate"
          name="buyDate"
          onChange={props.handleBuyChange}
        ></input>
        <input
          className={classes.inputStyle}
          placeholder="حجم خرید"
          type="number"
          value={buyValue}
          id="buyValue"
          name="buyValue"
          onChange={props.handleBuyChange}
        ></input>
        <input
          className={classes.inputStyle}
          placeholder="قیمت خرید"
          type="number"
          value={buyPrice}
          id="buyPrice"
          name="buyPrice"
          onChange={props.handleBuyChange}
        ></input>
        <input
          className={classes.inputStyle}
          placeholder="هدف خرید"
          type="text"
          value={buyPurpose}
          id="buyPurpose"
          name="buyPurpose"
          onChange={props.handleBuyChange}
        ></input>
        <button
          type="submit"
          className={classes.btnBuy}
          onClick={props.buySubmit}
        >
          خرید
        </button>
      </form>
    );
};
export default PropertyForBuy;