import React from 'react';
import DailyPropertyList from "../DailyPropertyList/DailyPropertyList";

const DayList = (props) => {
    return (
      <table>
        
        <th>
          {props.properties.map((property) => {
            return (
              <DailyPropertyList
                key={property.id}
                propertyValue={property}
                delete={() => props.delete(property.id)}
                edit={() => props.edit(property.id)}
                setDate={props.setDate}
              />
            );
          })}
        </th>
      </table>
    );
}

export default DayList;