import React,{useState} from 'react';
import classes from './AuthContainer.module.css';
import Layout from '../components/Layout/Layout';
import {AuthContext} from '../context/AuthContext';
import Input from '../components/UI/Input/Input';
import Loader from '../components/UI/spinner/spinner';
import Button from '../components/UI/button/button';

const Auth = () => {
    const { loading, logInUser, signUpUser } = React.useContext(AuthContext);
    const [display, setDisplay] = useState(true);
    const [inputController, setInputController] = useState({
      logIn: {
        email: {
          elementtype: "input",
          elementConfig: {
            type: "email",
            placeholder: "آدرس الکترونیکی",
          },
          value: "",
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementtype: "input",
          elementConfig: {
            type: "password",
            placeholder: "رمز عبور",
          },
          value: "",
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
        },
        passwordConfirm: {
          elementtype: "input",
          elementConfig: {
            type: "password",
            placeholder: "تایید رمز عبور",
          },
          value: "",
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
        },
      },
      signUp: {
        username: {
          elementtype: "input",
          elementConfig: {
            type: "username",
            placeholder: "نام کاربری",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          touched: false,
        },
        email: {
          elementtype: "input",
          elementConfig: {
            type: "email",
            placeholder: "آدرس الکترونیکی",
          },
          value: "",
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementtype: "input",
          elementConfig: {
            type: "password",
            placeholder: "رمز عبور",
          },
          value: "",
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
        },
        passwordConfirm: {
          elementtype: "input",
          elementConfig: {
            type: "password",
            placeholder: "تایید رمز عبور",
          },
          value: "",
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
        },
      },
    });
    const [formIsValid,setFormIsValid]=useState(false);
      
    //check validity
    const checkValidity = (value , rules) => {
      let isValid = false;

      if(rules.required){
        isValid = value.trim() !== "";
      }
      if(rules.minLength){
        isValid = value.length >= rules.minLength;
      }
      if(rules.isEmail){
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
      }
      return isValid;
      //return true or false
    }
    const changeDisplay = () => {
      setDisplay(!display);
    }
    const getUserInput = (e,inputIdent) => {
      //identify the login or signup page
      if(display){
        const newUser = { ...inputController};
        const newUserElement = {...newUser.logIn[inputIdent]};
        newUserElement.value = e.target.value;
        newUserElement.valid = checkValidity(
          newUserElement.value,
          newUserElement.validation);
        newUserElement.touched = true;
        newUser.logIn[inputIdent] = newUserElement;
        
        let formValidation = true;
        for (let inputIdent in newUser.logIn){
          formValidation = newUser.logIn[inputIdent].valid && formValidation;
        }
        setFormIsValid(formValidation);
        setInputController(newUser);
      }else{
        const newUser = { ...inputController };
        const newUserElement = { ...newUser.signUp[inputIdent] };
        newUserElement.value = e.target.value;
        newUserElement.valid = checkValidity(
          newUserElement.value,
          newUserElement.validation
        );
        newUserElement.touched = true;
        newUser.signUp[inputIdent] = newUserElement;

         
        let formValidation = true;
        for (let inputIdent in newUser.signUp) {
          formValidation = newUser.signUp[inputIdent].valid && formValidation;
        }
        setFormIsValid(formValidation);

        setInputController(newUser);
      }
      
    };
    const submitUserInput = (e) => {
      e.preventDefault();
      // extract data that i want to submit
      let userData = {};
      if(display){
        for(let userElementIdent in inputController.logIn){
          userData[userElementIdent] = inputController.logIn[userElementIdent].value; 
        }
        logInUser(userData);
      }else{
        for (let userElementIdent in inputController.signUp) {
          userData[userElementIdent] =
            inputController.signUp[userElementIdent].value;
        }
        signUpUser(userData);
      }
      
    };
    //creating form elements array
    const formElementsArray = [];
    //decide what form should be render
    if(display){
      //convertin object to array
      for (let key in inputController.logIn) {
        formElementsArray.push({
          id: key,
          config: inputController.logIn[key],
        });
      }
    }else{
      for (let key in inputController.signUp) {
        formElementsArray.push({
          id: key,
          config: inputController.signUp[key],
        });
      }
    }
    

    //creating a dynamic form
    let form = (
      <div className={classes.formAndBtn}>
        {display && <h3>ورود به حساب کاربری</h3>}
        {display || <h3>ثبت نام</h3>}
        <form dir="rtl" className={classes.formContainer}>
          {formElementsArray.map((formEl) => (
            <Input
              key={formEl.id}
              elementtype={formEl.config.elementtype}
              elementConfig={formEl.config.elementConfig}
              value={formEl.config.value}
              invalid={!formEl.config.valid}
              touched={formEl.config.touched}
              changed={(e) => getUserInput(e, formEl.id)}
            />
          ))}
        </form>
        {display && (
          <div className={classes.Box}>
            <div className={classes.BtnBox}>
              <Button
                clicked={submitUserInput}
                btnType="ActiveLogin"
                disabled={!formIsValid}
              >
                ورود
              </Button>
              <Button clicked={changeDisplay} btnType="SuccessLogin">
                ثبت نام
              </Button>
            </div>
            {loading && (
              <Loader
                className={classes.spinner}
                type="Circles"
                color="#34363b"
                height={40}
                width={40}
              />
            )}
          </div>
        )}
        {display || (
          <div className={classes.Box}>
            <div className={classes.BtnBox}>
              <Button
                clicked={submitUserInput}
                btnType="ActiveLogin"
                disabled={!formIsValid}
              >
                ثبت نام
              </Button>
              <Button clicked={changeDisplay} btnType="SuccessLogin">
                بازگشت
              </Button>
            </div>
            {loading && (
              <Loader
                className={classes.spinner}
                type="Circles"
                color="#34363b"
                height={40}
                width={40}
              />
            )}
          </div>
        )}
      </div>
    );
    
    return (
      <Layout>
        {form}
      </Layout>
    );
}

export default Auth;