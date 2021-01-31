import React from 'react';
import DailyPropertyItem from "../DailyPropertyItem/DailyPropertyItem";
import classes from "../DailyProperty.module.css";

const DayList = (props) => {
  
    return (
      <div className={classes.table}>
        {props.properties.map((property, index) => {
          return (
            <div >
              <DailyPropertyItem
                key={property.id}
                propertyValue={property}
                delete={() => props.delete(property.id)}
                edit={() => props.edit(property.id)}
                setDate={props.setDate}
              />
            </div>
          );
        })}
      </div>
    );
}

export default DayList;