import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';
import PropertyTitle from '../components/Property/PropertyTitle/PropertyTitle';
import PropertyList from '../components/Property/PropertyList/PropertyList';
import PropertyInput from '../components/Property/PropertyInput/PropertyInput';
import DailyPropertyContainer from '../containers/DailyProperty';
import {BoorseContext} from '../context/context';
import moment from 'moment-jalaali';



const Property = () => {
  // getting data from context
  const {
    display,
    properties,
    propertiesSum,
    postNewProperty,
    patchProperty,
    deleteProperty,
    updateProperties,
    updatePropertiesSum
  } = React.useContext(BoorseContext);


  const [state, setState] = useState({
    property: {
      name: "",
      buyDate: "",
      buyValue: "",
      buyPrice: "",
      buyPurpose: "",
      sellDate: "",
      sellValue: "",
      sellPrice: "",
      sellPurpose: "",
      bought: false,
      edit: false,
      completed: false,
    },
  });

  ///wholeProperty section ///////////////////////////////////////////

  ///stock section ///////////////////////////////////////////
  //grab each input
  const getDateInput = (e,name) => {
    const value = moment(e).format("jYYYY-jM-jD");
    let newProperty = {
      ...state.property,
      [name]:value
    };
    setState({property:newProperty});
  }
  const inputGetter = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    let newProperty = {
      ...state.property,
      [name]: value,
      bought: true,
    };
    //when the property is going to buy
    //property.bought should be false and should be change to true
    if (
      newProperty.edit &&
      newProperty.sellDate &&
      newProperty.sellDate &&
      newProperty.sellValue &&
      newProperty.sellPrice &&
      newProperty.sellPurpose
    ) {
      newProperty.complete = true;
    } 
    setState({ property: newProperty });
  };
  //

  const buySubmitHandler = (e) => {
    e.preventDefault();
    const newProperty = { ...state.property };
    if (
      newProperty.name &&
      newProperty.buyDate &&
      newProperty.buyValue &&
      newProperty.buyPrice &&
      newProperty.buyPurpose
    ) {
      postNewProperty(newProperty);
    }else {
      alert("error");
      clearInputHandler();
    }
    setState({
      property: {
        name: "",
        buyDate: "",
        buyValue: "",
        buyPrice: "",
        buyPurpose: "",
        sellDate: "",
        sellValue: "",
        sellPrice: "",
        sellPurpose: "",
        bought: false,
        edit: false,
        completed: false,
      },
    });
  };
  //clear all the property inputs
  const clearInputHandler = () => {
    setState({
      property: {
        name: "",
        buyDate: "",
        buyValue: "",
        buyPrice: "",
        buyPurpose: "",
        sellDate: "",
        sellValue: "",
        sellPrice: "",
        sellPurpose: "",
        bought: false,
        edit: false,
        completed: false,
      },
    });
  };
  const deleteHandler = (id) => {
    // send a delete request to server
   deleteProperty(id);
   // change properties state
    const filteredProperties = properties.filter(
      (property) => property._id !== id
    );
    updateProperties(filteredProperties);

   //change propertiesSum state
    const selectedProperty = properties.find(
      (item) => item._id === id
    );
    updatePropertiesSum(selectedProperty,false);
    
  };
  
  const editHandler = (id) => {
    //find property and change edited flag and the send it to the local state
    const editedProperty = properties.find((property) => property._id === id);
    editedProperty.edit = true;
    setState({ property: editedProperty });
    // delete property
    deleteHandler(id);
    
  };
 
  
  return (
    <Layout>
      {display && (
        <>
          <WholeProperty />
          <PropertyTitle />
          <PropertyInput
            property={state.property}
            getInput={inputGetter}
            buySubmit={buySubmitHandler}
            clearInput={clearInputHandler}
            getDateInput={getDateInput}
          />

          <PropertyList handleEdit={editHandler} handleDelete={deleteHandler} />
          <PropertyResult propertyResult={propertiesSum} />
        </>
      )}
      {display || <DailyPropertyContainer />}
    </Layout>
  );
}


export default Property;