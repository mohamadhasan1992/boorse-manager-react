import React,{Component} from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';

class Navbar extends Component{

    render(){
        return (
          <div dir="rtl" className={classes.Content}>
            <p>نرم افزار مدیریت سرمایه</p>
            <img className={classes.logo} src={logo} alt="Logo" />
            <div>
              <button
                className={`${classes.signInBtn} ${classes.ml5}`}
              >
                ورود
              </button>
              <button
                className={`${classes.signInBtn} ${classes.signInBtnActive}`}
              >
                خروج
              </button>
            </div>
          </div>
        );
    }
}

export default Navbar;