import React,{Component,useState} from 'react';
import PropertyBought from './PropertyBought/PropertyBought';
import PropertyCompleted from './PropertyCompleted/PropertyCompleted';

class PropertyList extends Component {
  submitCompleter = (id) => {
    console.log(id);
  };
  completeChangeHandler = () => {
      console.log("hello world");
  };
  render() {
    return (
      <>
        {
            this.props.properties.map((property) => {
                if (property.completed) {
                  return (
                    <PropertyCompleted
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
}

export default PropertyList;




