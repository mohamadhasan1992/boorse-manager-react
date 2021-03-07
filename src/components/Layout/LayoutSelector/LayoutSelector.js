import React from 'react';
import classes from "./LayoutSelector.module.css";
import Button from '../../UI/button/button';
// import { Calendar } from "react-persian-datepicker";
// import JCalendar from 'reactjs-persian-calendar'



const LayoutSelector = (props) => {
   
    const active = props.active;
    return (
      <div className={`${classes.Content} ${classes.pl5}`}> 
        <Button
          btnType={
            !active
              ? "Active"
              : "Success"
          }
          clicked={props.changeLayout}
        >
          دارایی
        </Button>
        <Button
          btnType={
            active
              ? "Active"
              : "Success"
          }
          clicked={props.changeLayout}
        >
          سبدبان
        </Button>
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