import React from "react";
import PropertyBought from './PropertyBought/PropertyBought';
import PropertyCompleted from './PropertyCompleted/PropertyCompleted';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store-redux/actions/index';

const PropertyList = (props) => {
  
  let propertyList = null;
  if(props.propertyState.properties.length > 0){
    propertyList = props.propertyState.properties.map((property) => {
      if (property.complete) {
        return (
          <PropertyCompleted
            key={property._id}
            property={property}
            deleteProperty={() => props.handleDelete(property._id)}
            editProperty={() => props.handleEdit(property._id)}
          />
        );
      } else {
        return (
          <PropertyBought
            key={property.name}
            property={property}
            editProperty={() => props.handleEdit(property._id)}
            deleteProperty={() => props.handleDelete(property._id)}
          />
        );
      }
    });
  }else{
    propertyList = <h5>لطفا اطلاعات سهام خود را وارد نمایید.</h5>
  }
  return (
    <h4>
      {propertyList}
    </h4>
  );
  // const {properties} = React.useContext(BoorseContext);
    
}


const mapStateToProps = (state) => {
  return {
    propertyState:state.property
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (id) => dispatch(actionCreators.delete_property(id)),
    handleEdit: (id) =>
      dispatch(actionCreators.update_property(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);




