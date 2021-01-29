import React from 'react';
import DailyPropertyList from "../DailyPropertyList/DailyPropertyList";
import classes from './../DailyProperty.module.css';

const DayList = (props) => {
    return (
      <table>
        
        <th>
          {props.properties.map((property) => {
            return <DailyPropertyList propertyValue={property} />;
          })}
        </th>
      </table>
    );
}

export default DayList;