import React from 'react';
import classes from '../WholeProperty/wholeProperty.module.css';
import CheckboxComponent from './CheckBoxComponent/CheckboxComponent';
import BoardResult from './ResultBoard/ResultBoard';
import { connect } from 'react-redux';
import Input from '../../UI/Input/Input';
import Icon from '../../UI/icons/icons';
import * as actionCreators from '../../../store-redux/actions/index';

const WholeProperty = (props) => {
  
  return (
    <div className={classes.oneBox}>
      <div className={classes.rightBox}>
        <div className={classes.inline}>
          <h4 className={classes.paddingLeft}>سرمایه ی اولیه</h4>
          <Input
            type="input"
            className={`${classes.inputStyle} ${classes.ml5}`}
            value={props.wholeProperty.initValue}
            changed={(e) => props.grabInitProperty(e)}
          ></Input>
          <div className={classes.iconBox}>
            <Icon icontype="tik" clicked={props.submitWholeInput} />
            {/* <Icon icontype="edit" clicked={props.updateWholeInput} /> */}
          </div>
        </div>
        <div className={classes.inline}>
          <h4 className={classes.paddingLeft}>میزان ریسک پذیری</h4>

          <form className={classes.formStyle}>
            {props.wholeProperty.difficulty.map((eachDifficulty) => {
              return (
                <CheckboxComponent
                  key={eachDifficulty.id}
                  difficulty={eachDifficulty}
                  selectedCheckbox={props.grabDifficulty}
                />
              );
            })}
          </form>
        </div>
      </div>
      {props.wholeProperty.showResult && <BoardResult
          initValue={props.wholeProperty.initValue}
          difficulty={props.wholeProperty.difficulty}
        />}
    </div>
  );

}
    
const mapStateToProps = (state) => {
  return {
    wholeProperty:state.wholeProperty
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    grabInitProperty: (event) =>
      dispatch(actionCreators.get_initial_value(event)),
    grabDifficulty: (event) =>
      dispatch(actionCreators.get_difficulty_value(event)),
    submitWholeInput: () => dispatch(actionCreators.add_whole_property()),
    // updateWholeInput: () =>
    //   dispatch({ type: actionTypes.UPDATE_WHOLE_PROPERTY }),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(WholeProperty);

