import React from 'react';
import DailyPropertyItem from "../DailyPropertyItem/DailyPropertyItem";
import classes from "../DailyProperty.module.css";

const DayTable = (props) => {
  
    return (
      <div className={classes.table}>
        {props.properties.map((property, index) => {
          return (
            <div >
              <DailyPropertyItem
                key={property._id}
                propertyValue={property}
                delete={() => props.delete(property._id)}
                edit={() => props.edit(property._id)}
                setDate={props.setDate}
              />
            </div>
          );
        })}
      </div>
    );
}

export default DayTable;