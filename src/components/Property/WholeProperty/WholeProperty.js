import React,{setState} from 'react';
import classes from '../WholeProperty/wholeProperty.module.css';
import CheckboxComponent from './CheckBoxComponent/CheckboxComponent';
import BoardResult from './ResultBoard/ResultBoard';
import axios from '../../../axios';
import  {BoorseContext} from '../../../context/context';


const WholeProperty = () => {
  
  const { wholePropertyObject } = React.useContext(BoorseContext);
  const {initialProperty, difficulty} = wholePropertyObject;
  const difficultyList = [
      {
        id: 1,
        difficultyName: "بالا",
        difficultyStatus: false,
        difficultyValue: "high",
        devisionNumber: 2,
      },
      {
        id: 2,
        difficultyName: "متوسط",
        difficultyStatus: true,
        difficultyValue: "medium",
        devisionNumber: 3,
      },
      {
        id: 3,
        difficultyName: "کم",
        difficultyStatus: false,
        difficultyValue: "low",
        devisionNumber: 4,
      },
    ];
    //const [showResultBoard, setShowResultBoard] = setState(false);
  //selectedDifficulty = this.state.difficulty.find(item => item.difficultyStatus === true);
  /////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  // grabInitProperty = (e) => {
  //   const enteredValue = e.target.value.toString();

  //   this.setState({ initialProperty: enteredValue });
  // };

  // submitWholeInput = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/wholeProperty", this.state.initialProperty)
  //     .then((response) => {
  //       console.log(response);
  //     });
  //   this.setState({ showResultBoard: true });
  // };

  // clearWholeInput = () => {
  //   this.setState({ wholeProperty: "" });
  // };

  // checkboxSelectHandler = (e) => {
  //   let difficulty = [];
  //   this.state.difficulty.forEach((item) => {
  //     if (item.difficultyValue === e.target.value) {
  //       item.difficultyStatus = true;
  //     } else {
  //       item.difficultyStatus = false;
  //     }
  //     difficulty.push(item);
  //   });
  //   this.setState({
  //     difficulty,
  //     selectedDifficulty: difficulty.find((el) => el.difficultyStatus === true),
  //   });
  // };
  return (
    <div className={classes.oneBox}>
      <div className={classes.rightBox}>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>سرمایه ی اولیه</div>
          <input
            type="dropdown"
            className={`${classes.inputStyle} ${classes.ml5}`}
            placeholder={initialProperty}
            //value={props.initValue}
            //onChange={this.grabInitProperty}
          ></input>
          <div className={classes.iconBox}>
            <span
              className={`${classes.green} ${classes.pl5}`}
              //onClick={this.submitWholeInput}
            >
              <i className="fas fa-check"></i>
            </span>
            <span className={classes.grey} 
            //onClick={this.clearWholeInput}
            >
              <i className="fas fa-eraser"></i>
            </span>
          </div>
        </div>
        <div className={classes.inline}>
          <div className={classes.paddingLeft}>میزان ریسک پذیری</div>

          <form className={classes.formStyle}>
            {difficultyList.map((eachDifficulty) => {
              return (
                <CheckboxComponent
                  key={eachDifficulty.id}
                  difficulty={eachDifficulty}
                  //selectedCheckbox={this.checkboxSelectHandler}
                />
              );
            })}
          </form>
        </div>
      </div>
      
        <BoardResult
          initValue={initialProperty}
          devideBy={difficulty.devisionNumber}
        />
      
    </div>
  );

}
    


export default WholeProperty;