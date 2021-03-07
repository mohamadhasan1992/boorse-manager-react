import React,{useState} from 'react';
import classes from '../WholeProperty/wholeProperty.module.css';
import CheckboxComponent from './CheckBoxComponent/CheckboxComponent';
import BoardResult from './ResultBoard/ResultBoard';
import  {BoorseContext} from '../../../context/context';


const WholeProperty = () => {
  
  const { wholePropertyObject, setInitialProperty } = React.useContext(
    BoorseContext
  );
  
  const [initValue, setInitValue] = useState(wholePropertyObject.initValue);
  const [difficulty, setDifficulty] = useState(wholePropertyObject.difficulty);
  
    //const [showResultBoard, setShowResultBoard] = setState(false);
  //selectedDifficulty = this.state.difficulty.find(item => item.difficultyStatus === true);
  /////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  const grabInitProperty = (e) => {
    const enteredValue = e.target.value.toString();
    setInitValue(enteredValue);
  };

  const submitWholeInput = (e) => {
    e.preventDefault();
    setInitialProperty(initValue, difficulty);
  };

  const clearWholeInput = () => {
    setInitValue("لطفا سرمایه ی اولیه خود را وارد کنید");
  };

  const checkboxSelectHandler = (e) => {
    var newDifficulty = [];
    difficulty.forEach((item) => {
      if (item.difficultyValue === e.target.value) {
        item.difficultyStatus = true;
      } else {
        item.difficultyStatus = false;
      }
      newDifficulty.push(item);
    });
    setDifficulty(newDifficulty);
  };
  return (
    <div className={classes.oneBox}>
      <div className={classes.rightBox}>
        <div className={classes.inline}>
          <h4 className={classes.paddingLeft}>سرمایه ی اولیه</h4>
          <input
            type="input"
            className={`${classes.inputStyle} ${classes.ml5}`}
            value={initValue}
            onChange={e => grabInitProperty(e)}
          ></input>
          <div className={classes.iconBox}>
            <span
              className={`${classes.green} ${classes.pl5}`}
              onClick={submitWholeInput}
            >
              <i className="fas fa-check"></i>
            </span>
            <span className={classes.grey} 
            onClick={clearWholeInput}
            >
              <i className="fas fa-eraser"></i>
            </span>
          </div>
        </div>
        <div className={classes.inline}>
          <h4 className={classes.paddingLeft}>میزان ریسک پذیری</h4>

          <form className={classes.formStyle}>
            {difficulty.map((eachDifficulty) => {
              return (
                <CheckboxComponent
                  key={eachDifficulty.id}
                  difficulty={eachDifficulty}
                  selectedCheckbox={checkboxSelectHandler}
                />
              );
            })}
          </form>
        </div>
      </div>
      
        {/* <BoardResult
          initValue={initialProperty}
          devideBy={difficulty.devisionNumber}
        /> */}
      
    </div>
  );

}
    


export default WholeProperty;