import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import classes from './AuthContainer.module.css';

const SignIn = () => {
    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const inputController = [
      {
        label: "نام کاربری",
        name: "username",
        type: "text",
        placeholder: "نام کاربری",
        value: user.username,
      },
      {
        label: "آدرس الکترونیکی",
        name: "email",
        type: "email",
        placeholder: "آدرس الکترونیکی",
        value: user.email,
      },
      {
        label: "رمز عبور",
        name: "password",
        type: "password",
        placeholder: "رمز عبور",
        value: user.password,
      },
      {
        label: "تایید رمز عبور",
        name: "confirmPassword",
        type: "password",
        placeholder: "تایید رمز عبور",
        value: user.confirmPassword,
      },
    ];
    const getUserInput = (e) => {
      const newUser = { ...user,
      [e.target.name]:e.target.value};
      setUser(newUser);
    }
    const submitUserInput = () => {
      console.log(user);
    }
    const formInputs = inputController.map((item) => (
      <input
        key={item.name}
        name={item.name}
        type={item.type}
        value={item.value}
        placeholder={item.placeholder}
        className={classes.inputStyle}
        onChange={ e => getUserInput(e)}
      ></input>
    ));
    return (
      <Layout>
        <div className={classes.formAndBtn}>
          <form dir="rtl" className={classes.formContainer}>
            <h3>ثبت نام</h3>
            {formInputs}
          </form>
          <button onClick={submitUserInput} className={classes.signInBtn}>
            ثبت نام
          </button>
        </div>
      </Layout>
    );
}

export default SignIn;