import React from 'react';
import classes from '../wholeProperty.module.css';

const ResultBoard = (props) => {
    const {initValue, devideBy} = props;
    const freeMoney = initValue * 0.1;
    const eachProperty = Math.round((initValue-freeMoney) / devideBy);
    return (
      <div dir="rtl" className={classes.leftBox}>
          <p>سبد پیشنهادی شما دارای <span>{devideBy}</span>سهم به ارزش ذاتی {eachProperty} تومان می باشد.</p>
          <h5>مقدار 10 درصد از سرمایه ی اولیه شما به میزان {freeMoney} تومان به صورت رزرو و برای نوسان گیری در نظر گرفته شده است.</h5>
        <h6 className={classes.heading6}>
          لطفا جزییات اطلاعات سهام خریداری شده را در قسمت مربوطه وارد کنید.
        </h6>
      </div>
    );
}
export default ResultBoard;