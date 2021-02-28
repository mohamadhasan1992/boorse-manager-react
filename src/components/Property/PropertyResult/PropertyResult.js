import React from 'react';
import classes from '../PropertyResult/propertyResult.module.css'


const PropertyResult= (props) => {
        return (
          <div className={classes.Content}>
            <span className={classes.ml5}>ارزش سهام: </span>
            <span>{props.propertyResult} </span>
            <span> تومان </span>
          </div>
        );
}

export default PropertyResult;