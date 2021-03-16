import React from 'react';
import classes from './icons.module.css';
import {
  FaEraser,
  FaRegTrashAlt,
  FaCheck,
  FaFileSignature,
} from "react-icons/fa";

const Icon = (props) => {
    const iconClasses = [classes.IconStyle];

    let iconElement = null;
    switch (props.icontype) {
      case "tik":
        iconElement = (
          <FaCheck className={`${classes.IconStyle} ${classes.Success}`} onClick={props.clicked} />
        );
        break;
      case "trash":
        iconElement = (
          <FaRegTrashAlt
            className={`${classes.IconStyle} ${classes.Danger}`}
            onClick={props.clicked}
          />
        );
        break;
      case "edit":
        iconElement = (
          <FaEraser
            className={`${classes.IconStyle} ${classes.Peace}`}
            onClick={props.clicked}
          />
        );
        break;
      case "file":
        iconElement = (
          <FaFileSignature
            className={`${classes.IconStyle} ${classes.Success}`}
            onClick={props.clicked}
          />
        );
        break;
        default:
            iconElement = (
              <FaFileSignature
                className={`${classes.IconStyle} ${classes.Success}`}
                onClick={props.clicked}
              />
            );
    }
    return (
        <>
            {iconElement}
        </>
    );


}

export default Icon;