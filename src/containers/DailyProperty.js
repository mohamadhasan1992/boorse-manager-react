import React from 'react';
import DailyPropertyInput from "../components/DailyProperty/DailyPropertyInput/DailyPropertyInput";
import DailyPropertyChart from "../components/DailyProperty/DailyPropertyChart/DailyPropertyChart";
import DayTable from "../components/DailyProperty/DayTable/DayTable";
import classes from './DailyProperty.module.css';
import {BoorseContext} from '../context/context';

const DailyPropertyContainer = (props) => {
  const {dailyProperty} = React.useContext(BoorseContext);
  const dailyPropertyChart = dailyProperty.map(item => {
    return {value:item.value , label:item.date.toString()}
  });
  
    return (
      <div className={classes.Content}>
        <div className={classes.Width}>
          <DailyPropertyInput
            dayProperty={props.dayProperty}
            getInput={props.getDayInput}
            submitInput={props.submitDayInput}
            clearInput={props.clearDayInput}
            setDate={props.setDate}
          />
          <DayTable
            properties={dailyProperty}
            delete={props.deleteDayProperty}
            edit={props.editDayProperty}
          />
        </div>
        <DailyPropertyChart
          data={dailyPropertyChart}
          className={classes.chart}
        />
      </div>
    );
}
export default DailyPropertyContainer;