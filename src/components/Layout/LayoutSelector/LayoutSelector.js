import React from 'react';
import classes from "./LayoutSelector.module.css";
// import { Calendar } from "react-persian-datepicker";
// import JCalendar from 'reactjs-persian-calendar'



const LayoutSelector = (props) => {
   
  
   
    const active = props.active;
    return (
      <div className={`${classes.Content} ${classes.pl5}`}> 
        
        <button
          className={
            !active
              ? `${classes.btn} ${classes.ml5} ${classes.btnActive}`
              : `${classes.btn} ${classes.ml5}`
          }
          onClick={props.changeLayout}
          value="dailyProperty"
        >
          دارایی
        </button>

        <button
          className={
            active
              ? `${classes.btn} ${classes.ml5} ${classes.btnActive}`
              : `${classes.btn} ${classes.ml5}`
          }
          onClick={props.changeLayout}
          value="stock"
        >
          سبدبان
        </button>
      </div>
    );
}

export default LayoutSelector;



{/* <div>
  <JCalendar
    locale={"fa"}
    color={"#000066"}
    size={25}
    onClick={(val) => console.log(val)}
    itemRender={(key, item, children) => children}
  />
</div>; */}