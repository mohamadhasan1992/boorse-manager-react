import React,{useState} from 'react';
import classes from "../propertyDetail.module.css";


const PropertyForSell = (props) => {
    const { name, buyDate, buyValue, buyPrice, buyPurpose, sellDate, sellValue, sellPrice, sellPurpose } = props.property;
    const [sold,setSold] = useState(false);

    const sellClicked = ()=>{
        setSold(true);
    }
    if(!sold){
        return (
          <div className={classes.Content}>
            <div className={classes.inputStyle}>{name}</div>
            <div className={classes.inputStyle}>{buyDate}</div>
            <div className={classes.inputStyle}>{buyValue}</div>
            <div className={classes.inputStyle}>{buyPrice}</div>
            <div className={classes.inputStyle}>{buyPurpose}</div>
            <button
              type="submit"
              className={classes.btnSell}
              onClick={sellClicked}
            >
              فروش
            </button>
          </div>
        );
    }else{
        return (
          <form className={classes.Content}>
            <div className={classes.inputStyle}>{name}</div>
            <div className={classes.inputStyle}>{buyDate}</div>
            <div className={classes.inputStyle}>{buyValue}</div>
            <div className={classes.inputStyle}>{buyPrice}</div>

            <button
              type="submit"
              className={classes.btnComplete}
              onClick={props.completedClicked}
            >
              تکمیل فروش
            </button>

            <input
              className={classes.inputStyle}
              type="number"
              placeholder="تاریخ فروش"
              value={sellDate}
              id="sellDate"
              name="sellDate"
              onChange={props.handleSellChange}
            ></input>
            <input
              className={classes.inputStyle}
              type="number"
              placeholder="حجم فروش"
              value={sellValue}
              id="sellValue"
              name="sellValue"
              onChange={props.handleSellChange}
            ></input>
            <input
              className={classes.inputStyle}
              type="number"
              placeholder="قیمت فروش"
              value={sellPrice}
              id="sellPrice"
              name="sellPrice"
              onChange={props.handleSellChange}
            ></input>
            <input
              className={classes.inputStyle}
              type="text"
              placeholder="هدف فروش"
              value={sellPurpose}
              id="sellPurpose"
              name="sellPurpose"
              onChange={props.handleSellChange}
            ></input>
          </form>
        );
    }
    
};
export default PropertyForSell;