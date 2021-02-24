import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';
import PropertyTitle from '../components/Property/PropertyTitle/PropertyTitle';
import PropertyList from '../components/Property/PropertyList/PropertyList';
import PropertyInput from '../components/Property/PropertyInput/PropertyInput';
import LayoutSelector from '../components/Property/LayoutSelector/LayoutSelector';
import DailyPropertyContainer from '../containers/DailyProperty';
import {BoorseContext} from '../context/context';



const Property = () => {
  const [state, setState] = useState({
    propertiesSum: 0,
    properties: [],
    property: {
      id: "",
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
    dayProperty: {
      id: "",
      value: "",
      date: "",
      day: "شنبه",
      edit: false,
    },
    dayProperties: [],
  });
  
  const {display,layoutSelector} = React.useContext(BoorseContext);
  const calcBuyValue = (obj) => {
    // return obj.buyValue * obj.buyPrice;
  };
  ///wholeProperty section ///////////////////////////////////////////
  
  
  ///stock section ///////////////////////////////////////////
  //grab each input
  const inputGetter = (e) => {
    // e.preventDefault();
    // const name = e.target.name;
    // const value = e.target.value;

    // let newProperty = {
    //   ...this.state.property,
    //   [name]: value,
    //   bought: true,
    // };
    // //when the property is going to buy
    // //property.bought should be false and should be change to true
    // if (newProperty.edit) {
    //   newProperty.completed = true;
    // } else {
    //   newProperty.id = uuidv4();
    // }
    // this.setState({ property: newProperty });
  };
  //
  
  
  const buySubmitHandler = (e) => {
    // e.preventDefault();
    // const newProperty = { ...this.state.property };
    // if (
    //   newProperty.sellDate &&
    //   newProperty.sellDate &&
    //   newProperty.sellValue &&
    //   newProperty.sellPrice &&
    //   newProperty.sellPurpose
    // ) {
    //   newProperty.complete = true;
    // }
    // if (
    //   newProperty.name &&
    //   newProperty.buyDate &&
    //   newProperty.buyValue &&
    //   newProperty.buyPrice &&
    //   newProperty.buyPurpose
    // ) {
    //   console.log(newProperty);
    //   if (newProperty.edit) {
    //     axios
    //       .patch(
    //         `/property/${newProperty._id}`,
    //         newProperty
    //       )
    //       .then((response) => {
    //         console.log(response);
    //       });
    //   } else {
    //     axios
    //       .post("/property", newProperty)
    //       .then((response) => {
    //         console.log(response);
    //       });
    //   }
    //   const propertiesSum =
    //     this.state.propertiesSum + this.calcBuyValue(newProperty);
    //   const updatedProperties = [...this.state.properties, newProperty];

    //   this.setState({
    //     propertiesSum,
    //     properties: updatedProperties,
    //     property: {
    //       id: "",
    //       name: "",
    //       buyDate: "",
    //       buyValue: "",
    //       buyPrice: "",
    //       buyPurpose: "",
    //       sellDate: "",
    //       sellValue: "",
    //       sellPrice: "",
    //       sellPurpose: "",
    //       bought: false,
    //       edit: false,
    //       completed: false,
    //     },
    //   });
    // } else {
    //   alert("error");
    //   this.clearInputHandler();
    // }
  };
  //clear all the property inputs
  const clearInputHandler = () => {
    // this.setState({
    //   property: {
    //     id: "",
    //     name: "",
    //     buyDate: "",
    //     buyValue: "",
    //     buyPrice: "",
    //     buyPurpose: "",
    //     sellDate: "",
    //     sellValue: "",
    //     sellPrice: "",
    //     sellPurpose: "",
    //     bought: false,
    //     edit: false,
    //     completed: false,
    //   },
    // });
  };
  const deleteHandler = (id) => {
    // axios
    //   .delete(`/property/${id}`)
    //   .then((response) => console.log(response));
    // const selectedProperty = this.state.properties.find(
    //   (item) => item.id === id
    // );
    // const filteredProperties = this.state.properties.filter(
    //   (property) => property.id !== id
    // );
    // const value = this.calcBuyValue(selectedProperty);
    // const updatedPropertiesSum = this.state.propertiesSum - value;
    // this.setState({
    //   properties: filteredProperties,
    //   propertiesSum: updatedPropertiesSum,
    // });
  };
  //edit an bought property
  const editHandler = (id) => {
    // const filteredProperties = this.state.properties.filter(
    //   (property) => property.id !== id
    // );
    // const editedProperty = this.state.properties.find(
    //   (property) => property.id === id
    // );
    // editedProperty.edit = true;

    // const updatedPropertyValue =
    //   this.state.propertiesSum - this.calcBuyValue(editedProperty);
    // this.setState({
    //   properties: [...filteredProperties],
    //   property: editedProperty,
    //   propertiesSum: updatedPropertyValue,
    // });
  };
  // const layoutSelector = (e) => {
  // };
  //working on Dailyproperty part///////////////////////////
  //setting date by datePicker
  
  //getting info about a DailyProperty
  
  
  
 
  
    return (
      <Layout>
        <LayoutSelector
          changeLayout={layoutSelector}
          active={display}
        />
        {display && (
          <>
            <WholeProperty />
            <PropertyTitle />
            <PropertyInput
              property={state.property}
              getInput={inputGetter}
              buySubmit={buySubmitHandler}
              clearInput={clearInputHandler}
            />

            <PropertyList
              handleEdit={editHandler}
              handleDelete={deleteHandler}
            />
            <PropertyResult propertyResult={state.propertiesSum} />
          </>
        )}
        {display || (
          <DailyPropertyContainer />
        )}
      </Layout>
    );
  }


export default Property;