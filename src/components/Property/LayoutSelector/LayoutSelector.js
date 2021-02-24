import React from 'react';
import classes from "./LayoutSelector.module.css";

const LayoutSelector = (props) => {
    const active = props.active;
    return (
      <div className={`${classes.stickTop} ${classes.pl5}`}>
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
      </div>
    );
}

export default LayoutSelector;