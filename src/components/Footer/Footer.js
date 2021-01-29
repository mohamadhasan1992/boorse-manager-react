import React from 'react';
import classes from './footer.module.css';

const Footer =() => {
    return (
      <div dir="rtl" className={classes.Content}>
        <ul className={classes.list}>
          <li className={classes.item}>درباره ی ما</li>
          <li className={classes.item}>همکاری با ما</li>
          <li className={classes.item}>ارتباط با ما</li>
        </ul>
        <h5>کلیه حقوق طراحی و راه اندازی این سایت به محمدحسن تبریزی تعلق دارد.</h5>
      </div>
    );
}

export default Footer;