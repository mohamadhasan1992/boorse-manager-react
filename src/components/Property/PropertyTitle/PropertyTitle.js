import React from 'react';
import classes from './PropertyTitle.module.css';


const PropertyTitle = (props) => {
    return (
      <React.Fragment>
        <div className={classes.Content}>
          <div>نام نماد</div>
          <div>تاریخ خرید</div>
          <div>حجم خرید</div>
          <div>قیمت خرید</div>
          <div>هدف خرید</div>
          <div>تاریخ فروش</div>
          <div>حجم فروش</div>
          <div>قیمت فروش</div>
          <div>دلیل فروش</div>
        </div>
      </React.Fragment>
    );
}

export default PropertyTitle;