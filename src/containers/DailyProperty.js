import React from 'react';
import DailyPropertyInput from "../components/DailyProperty/DailyPropertyInput/DailyPropertyInput";
import DailyPropertyChart from "../components/DailyProperty/DailyPropertyChart/DailyPropertyChart";
import DayTable from "../components/DailyProperty/DayTable/DayTable";
import classes from './DailyProperty.module.css';
import {BoorseContext} from '../context/context';

const DailyPropertyContainer = (props) => {
  const {
    dailyProperty,
    dayPropertyInput,
    getDailyPropertyInput,
    submitDailyPropertyInput,
    clearDailyPropertyInput,
    deleteDailyPropertyInput,
    updateDailyProperty,
  } = React.useContext(BoorseContext);
  const dailyPropertyChart = dailyProperty.map(item => {
    return {value:item.value , label:item.date.split('T')[0].toString()}
  });
  
    return (
      <div className={classes.Content}>
        <div>
          <DailyPropertyInput
            dayProperty={dayPropertyInput}
            getInput={(e) => getDailyPropertyInput(e)}
            submitInput={(e) => submitDailyPropertyInput(e)}
            clearInput={clearDailyPropertyInput}
            setDate={props.setDate}
          />
          <DayTable
            properties={dailyProperty}
            delete={deleteDailyPropertyInput}
            edit={updateDailyProperty}
          />
        </div>
        <DailyPropertyChart data={dailyPropertyChart} />
      </div>
    );
}
export default DailyPropertyContainer;