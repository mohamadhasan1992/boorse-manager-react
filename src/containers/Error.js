import React from 'react';
import classes from './error.module.css';
import { Link } from 'react-router-dom'; 


const error = (props) => {
    return(
        <div className={classes.Content} dir='rtl'>
            <h1>
                404
            </h1>
            <h3>
                صفحه ی مورد نظر پیدا نشد!!
            </h3>
            <Link to="/" className={classes.btn}>
                بازگشت به خانه
            </Link>
        </div>
    )
};
export default error;