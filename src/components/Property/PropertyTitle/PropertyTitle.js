import React from 'react';
import classes from './PropertyTitle.module.css';


const PropertyTitle = (props) => {
    return (
      <React.Fragment>
        <div className={classes.stickTop}>سبد پیشنهادی</div>
        <div className={classes.Content}>
          <div className={classes.colWidth}>نام نماد</div>
          <div className={classes.colWidth}>تاریخ خرید</div>
          <div className={classes.colWidth}>حجم خرید</div>
          <div className={classes.colWidth}>قیمت خرید</div>
          <div className={classes.colWidth}>هدف خرید</div>
          <div className={classes.colWidth}>تاریخ فروش</div>
          <div className={classes.colWidth}>حجم فروش</div>
          <div className={classes.colWidth}>قیمت فروش</div>
          <div className={classes.colWidth}>دلیل فروش</div>
        </div>
      </React.Fragment>
    );
}

export default PropertyTitle;