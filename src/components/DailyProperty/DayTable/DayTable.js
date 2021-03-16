import React from 'react';
import DailyPropertyItem from "../DailyPropertyItem/DailyPropertyItem";
import classes from "../DailyProperty.module.css";

const DayTable = (props) => {
  const items = props.properties.map((property) => {
          return (
            
              <DailyPropertyItem
                key={property._id}
                propertyValue={property}
                delete={() => props.delete(property._id)}
                edit={() => props.edit(property._id)}
                setDate={props.setDate}
              />
          );
        })
    return <div className={classes.table}>{items}</div>;
}

export default DayTable;