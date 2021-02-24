import React,{Component} from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import {BoorseContext} from '../../context/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {user} = React.useContext(BoorseContext);
  let userbtn;
  if(user){
    userbtn = <img
              className={classes.userPhoto}
              src={user.photo}
              alt={user.username}
            ></img>;
  }else{
    userbtn=<Link to="/login" className={classes.signInBtn}>
              ورود
            </Link>;
  }
  
  
    return (
      <div dir="rtl" className={classes.Content}>
        <p>نرم افزار مدیریت سرمایه</p>
        <img className={classes.logo} src={logo} alt="Logo" />
        <div>
          {userbtn}
          <button className={`${classes.signInBtn} ${classes.signInBtnActive}`}>
            خروج
          </button>
        </div>
      </div>
    );
}

export default Navbar;