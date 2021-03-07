import React,{useState,useEffect} from 'react';
import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';
import {BoorseContext} from '../../context/context';
import { Link } from 'react-router-dom';
import {ImClock} from 'react-icons/im';
import 'moment/locale/fa';
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { isAutenticated, user, logOutUser } = React.useContext(AuthContext);
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  let userbtn;
  if (isAutenticated) {
    userbtn = (
      <img
        className={classes.userPhoto}
        src={user.photo}
        alt={user.username}
      ></img>
    );
  } else {
    userbtn = (
      <Link to="/login" className={classes.signInBtn}>
        ورود
      </Link>
    );
  }
  
  
    return (
      <div dir="rtl" className={classes.Content}>
        <div className={classes.iconBox}>
          <img className={classes.logo} src={logo} alt="Logo" />
          <p>نرم افزار مدیریت سرمایه</p>
        </div>
        <div className={classes.date}>
          <p>{value.toString().split(" ")[4].split(":")[1]}</p>
          <p>:</p>
          <p>{value.toString().split(" ")[4].split(":")[0]}</p>
          <ImClock className={classes.mr5}/>
        </div>
        <div>
          {userbtn}
          <Link onClick={logOutUser} to="/" className={`${classes.signInBtn} ${classes.signInBtnActive}`}>
            خروج
          </Link>
        </div>
      </div>
    );
}

export default Navbar;