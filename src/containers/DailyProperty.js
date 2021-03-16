import React from 'react';
import DailyPropertyInput from "../components/DailyProperty/DailyPropertyInput/DailyPropertyInput";
import DailyPropertyChart from "../components/DailyProperty/DailyPropertyChart/DailyPropertyChart";
import DayTable from "../components/DailyProperty/DayTable/DayTable";
import classes from './DailyProperty.module.css';
import { connect } from 'react-redux';
import * as actionCreators from "../store-redux/actions/index";

const DailyPropertyContainer = (props) => {
  console.log(props.dailyPropertyState);
  
  const dailyPropertyChart = props.dailyPropertyState.dailyProperties.map((item) => {
    return { value: item.value, label: item.date.split("T")[0].toString() };
  });
  
    return (
      <div className={classes.Content}>
        <div>
          <DailyPropertyInput
            dayProperty={props.dailyPropertyState.dailyProperty}
            getInput={(e) => props.getInput(e)}
            submitInput={(e) => props.submitDailyPropertyInput(e)}
            clearInput={props.clearDailyPropertyInput}
            setDate={props.setDate}
          />
          <DayTable
            properties={props.dailyPropertyState.dailyProperties}
            delete={props.deleteDailyPropertyInput}
            edit={props.updateDailyProperty}
          />
        </div>
        <DailyPropertyChart 
        data={dailyPropertyChart} 
        />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    dailyPropertyState: state.dailyProperty
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInput: (event) =>
      dispatch(actionCreators.get_input_daily_property(event)),
    setDate: (value) => dispatch(actionCreators.add_daily_property(value)),
    submitDailyPropertyInput: (event) =>
      dispatch(actionCreators.add_daily_property(event)),
    clearDailyPropertyInput: () =>
      dispatch(actionCreators.clear_input_daily_property()),
    deleteDailyPropertyInput: (id) =>
      dispatch(actionCreators.delete_daily_property(id)),
    updateDailyProperty: (id) => dispatch(actionCreators.update_daily_property(id)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyPropertyContainer);