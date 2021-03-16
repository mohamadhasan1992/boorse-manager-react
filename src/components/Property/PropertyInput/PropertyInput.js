import React from 'react';
import {DatePicker} from 'react-persian-datepicker';
import classes from "../propertyDetail.module.css";
import calendarStyles from './calendarStyles.module.css';
import { connect } from 'react-redux';
import Icon from '../../UI/icons/icons';
import * as actionCreators from '../../../store-redux/actions/index';

const PropertyInput = (props) => {
  console.log(props.property);
  const buySubmit = () => {
    const createdProperty = props.property;
    
    if (
      props.property.sellDate &&
      props.property.sellValue &&
      props.property.sellPrice &&
      props.property.sellPurpose
    ) {
      createdProperty.complete = true;
      props.completeBuy(createdProperty);
    }
    if(props.property._id){
      props.completeBuy(createdProperty);
    }
    // if for the first one user wants to create a property
    if(props.property._id ||
        props.property.name &&
        props.property.buyDate &&
        props.property.buyValue &&
        props.property.buyPrice &&
        props.property.buyPurpose){
          createdProperty.bought = true;
          props.buySubmit(createdProperty);
        }
    
  }
  return (
    <form className={classes.Content}>
      <input
        className={classes.inputStyle}
        type="string"
        placeholder="نماد جدید"
        value={props.property.name}
        id="name"
        name="name"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
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
        value={props.property.buyValue}
        id="buyValue"
        name="buyValue"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
      ></input>
      <input
        className={classes.inputStyle}
        type="number"
        placeholder="قیمت خرید"
        value={props.property.buyPrice}
        id="buyPrice"
        name="buyPrice"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
      ></input>
      <input
        className={classes.inputStyle}
        type="string"
        placeholder="هدف خرید"
        value={props.property.buyPurpose}
        id="buyPurpose"
        name="buyPurpose"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
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
        value={props.property.sellValue}
        id="sellValue"
        name="sellValue"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
      ></input>
      <input
        className={classes.inputStyle}
        type="number"
        placeholder="قیمت فروش"
        value={props.property.sellPrice}
        id="sellPrice"
        name="sellPrice"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
      ></input>
      <input
        className={classes.inputStyle}
        type="text"
        placeholder="هدف فروش"
        value={props.property.sellPurpose}
        id="sellPurpose"
        name="sellPurpose"
        onChange={(e) => props.getInput(e.target.name, e.target.value)}
      ></input>
      <div className={classes.iconBox}>
        <Icon icontype="tik" clicked={buySubmit} />
        <Icon icontype="edit" clicked={props.clearInput} />
      </div>
    </form>
  );
} 
const mapStateToProps = (state) => {
  return {
    property: state.property.property,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (name, value) =>
      dispatch(actionCreators.get_input_property(name, value)),
    getDateInput: (event, name) =>
      dispatch(actionCreators.get_date_property(event, name)),
    buySubmit: (data) => dispatch(actionCreators.add_property(data)),
    clearInput: () => dispatch(actionCreators.clear_input_property()),
    completeBuy: (data) => dispatch(actionCreators.complete_buy_property(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInput);