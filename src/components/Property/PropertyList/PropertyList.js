import React from 'react';
import PropertyBought from './PropertyBought/PropertyBought';
import PropertyCompleted from './PropertyCompleted/PropertyCompleted';
import {BoorseContext} from '../../../context/context';

const PropertyList = () => {
  const {properties} = React.useContext(BoorseContext);
  
  const submitCompleter = (id) => {
    console.log(id);
  };
  const completeChangeHandler = () => {
      console.log("hello world");
  };
    return (
      <>
        {
            properties.map((property) => {
                if (property.complete) {
                  return (
                    <PropertyCompleted
                      key={property.id}
                      property={property}
                      deleteProperty={() => this.props.handleDelete(property.id)}
                      editProperty={() => this.props.handleEdit(property.id)}
                    />
                  );
                }else{
                    return (
                      <PropertyBought
                        property={property}
                        editProperty={() =>
                          this.props.handleEdit(property.id)
                        }
                        deleteProperty={() => this.props.handleDelete(property.id)}
                      />
                    );  
                }
            })
        }
      </>
    );
}

export default PropertyList;




