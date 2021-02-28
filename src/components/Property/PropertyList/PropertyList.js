import React from 'react';
import PropertyBought from './PropertyBought/PropertyBought';
import PropertyCompleted from './PropertyCompleted/PropertyCompleted';
import {BoorseContext} from '../../../context/context';

const PropertyList = (props) => {
  const {properties} = React.useContext(BoorseContext);
    return (
      <>
        {
          properties.map((property) => {
              if (property.complete) {
                return (
                  <PropertyCompleted
                    key={property._id}
                    property={property}
                    deleteProperty={() => props.handleDelete(property._id)}
                    editProperty={() => props.handleEdit(property._id)}
                  />
                );
              }else{
                  return (
                    <PropertyBought
                      key={property._id}
                      property={property}
                      editProperty={() =>
                        props.handleEdit(property._id)
                      }
                      deleteProperty={() => props.handleDelete(property._id)}
                    />
                  );  
              }
            })
        }
      </>
    );
}

export default PropertyList;




