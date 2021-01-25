import React,{Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import PropertyDetail from '../components/Property/PropertyDetail/PropertyDetail';
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';

const Property = () => {
  let initialProperty;
  const grabWholeProperty = (e) => {
    initialProperty = e.target.value;
    
  }
    return (
      <Auxiliary>
        <WholeProperty change={(e) => grabWholeProperty(e)}/>
        <PropertyDetail />
        <PropertyResult />
      </Auxiliary>
    );
}

export default Property;