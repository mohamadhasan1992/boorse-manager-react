import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from '../WholeProperty/wholeProperty.module.css';


const WholeProperty = (props) => {
  return (
    <div className={classes.oneBox}>
      <div className={classes.rightBox}>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>سرمایه ی اولیه</div>
          <input
            type="dropdown"
            className={classes.inputStyle}
            placeholder="سرمایه ی اولیه"
            onChange={props.change}
          ></input>
        </div>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>میزان ریسک پذیری</div>
          
          <form className={classes.formStyle}>
            <div>
              <input type="checkbox" id="high" name="high" value="high"></input>
              <label htmlFor="high">بالا</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="medium"
                name="medium"
                value="medium"
                checked="true"
              ></input>
              <label htmlFor="high">متوسط</label>
            </div>
            <div>
              <input type="checkbox" id="low" name="low" value="low"></input>
              <label htmlFor="high">پایین</label>
            </div>
          </form>

        </div>
      </div>
      <div dir="rtl" className={classes.leftBox}>
        <p>سبد پیشنهادی شما شامل 4 سهم با نسبت های 25، 25، 10 و 30 درصد می باشد.</p>
        <p>مقدار سرمایه ناظر: 10درصد</p>
        <h6 className={classes.heading6}>
          لطفا جزییات اطلاعات سهام خریداری شده را در قسمت مربوطه وارد کنید. 
        </h6>
      </div>
    </div>
  );
}
    


export default WholeProperty;