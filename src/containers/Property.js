import React,{Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import Layout from '../components/Layout/Layout';
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';
import PropertyTitle from '../components/Property/PropertyTitle/PropertyTitle';
import PropertyList from '../components/Property/PropertyList/PropertyList';
import PropertyInput from '../components/Property/PropertyInput/PropertyInput';
import LayoutSelector from '../components/Property/LayoutSelector/LayoutSelector';
import DailyPropertyContainer from '../containers/DailyProperty';

import moment from "moment-jalaali";
import axios from '../axios';


class Property extends Component {
  state = {
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
    displayInput: "stock",
    dayProperty: {
      id: "",
      value: "",
      date: "",
      day: "شنبه",
      edit: false,
    },
    dayProperties: [],
  };
  componentDidMount() {
    axios.get("/property").then((response) => {
      const properties = response.data.data.properties;
      this.setState({ properties });
    });
  }

  calcBuyValue = (obj) => {
    return obj.buyValue * obj.buyPrice;
  };
  ///wholeProperty section ///////////////////////////////////////////
  
  
  ///stock section ///////////////////////////////////////////
  //grab each input
  inputGetter = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    let newProperty = {
      ...this.state.property,
      [name]: value,
      bought: true,
    };
    //when the property is going to buy
    //property.bought should be false and should be change to true
    if (newProperty.edit) {
      newProperty.completed = true;
    } else {
      newProperty.id = uuidv4();
    }
    this.setState({ property: newProperty });
  };
  //
  
  
  buySubmitHandler = (e) => {
    e.preventDefault();
    const newProperty = { ...this.state.property };
    if (
      newProperty.sellDate &&
      newProperty.sellDate &&
      newProperty.sellValue &&
      newProperty.sellPrice &&
      newProperty.sellPurpose
    ) {
      newProperty.complete = true;
    }
    if (
      newProperty.name &&
      newProperty.buyDate &&
      newProperty.buyValue &&
      newProperty.buyPrice &&
      newProperty.buyPurpose
    ) {
      console.log(newProperty);
      if (newProperty.edit) {
        axios
          .patch(
            `/property/${newProperty._id}`,
            newProperty
          )
          .then((response) => {
            console.log(response);
          });
      } else {
        axios
          .post("/property", newProperty)
          .then((response) => {
            console.log(response);
          });
      }
      const propertiesSum =
        this.state.propertiesSum + this.calcBuyValue(newProperty);
      const updatedProperties = [...this.state.properties, newProperty];

      this.setState({
        propertiesSum,
        properties: updatedProperties,
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
      });
    } else {
      alert("error");
      this.clearInputHandler();
    }
  };
  //clear all the property inputs
  clearInputHandler = () => {
    this.setState({
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
    });
  };
  deleteHandler = (id) => {
    axios
      .delete(`/property/${id}`)
      .then((response) => console.log(response));
    const selectedProperty = this.state.properties.find(
      (item) => item.id === id
    );
    const filteredProperties = this.state.properties.filter(
      (property) => property.id !== id
    );
    const value = this.calcBuyValue(selectedProperty);
    const updatedPropertiesSum = this.state.propertiesSum - value;
    this.setState({
      properties: filteredProperties,
      propertiesSum: updatedPropertiesSum,
    });
  };
  //edit an bought property
  editHandler = (id) => {
    const filteredProperties = this.state.properties.filter(
      (property) => property.id !== id
    );
    const editedProperty = this.state.properties.find(
      (property) => property.id === id
    );
    editedProperty.edit = true;

    const updatedPropertyValue =
      this.state.propertiesSum - this.calcBuyValue(editedProperty);
    this.setState({
      properties: [...filteredProperties],
      property: editedProperty,
      propertiesSum: updatedPropertyValue,
    });
  };
  layoutSelector = (e) => {
    this.setState({ displayInput: e.target.value });
  };
  //working on Dailyproperty part///////////////////////////
  //setting date by datePicker
  setDate = (e) => {
    const date = moment(e).format("jYYYY/jM/jD");
    const newDayProperty = { ...this.state.dayProperty, date };
    this.setState({ dayProperty: newDayProperty });
  };
  //getting info about a DailyProperty
  getDayInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newDayProperty = {
      ...this.state.dayProperty,
      [name]: value,
    };
    if (!newDayProperty.edit) {
      this.setDate();
      newDayProperty.id = uuidv4();
    } else {
      newDayProperty.edit = false;
    }
    this.setState({ dayProperty: newDayProperty });
  };
  submitDayInput = (e) => {
    e.preventDefault();
    const newDayProperty = this.state.dayProperty;
    const updatedDayProperties = [...this.state.dayProperties, newDayProperty];
    this.setState({
      dayProperties: updatedDayProperties,
      dayProperty: {
        id: "",
        value: "",
        date: "",
        day: "",
      },
    });
  };
  clearDayInput = () => {
    this.setState({
      dayProperty: {
        id: "",
        value: "",
        date: "",
        day: "",
      },
    });
  };
  deleteDayProperty = (id) => {
    const filteredDayProperties = this.state.dayProperties.filter(
      (item) => item.id !== id
    );
    this.setState({ dayProperties: filteredDayProperties });
  };
  editDayProperty = (id) => {
    const selectedDayProperty = this.state.dayProperties.find(
      (item) => item.id === id
    );
    const filteredDayProperties = this.state.dayProperties.filter(
      (item) => item.id !== id
    );
    selectedDayProperty.edit = true;
    this.setState({
      dayProperties: filteredDayProperties,
      dayProperty: selectedDayProperty,
    });
  };
  render() {
    return (
      <Layout>
        <LayoutSelector
          changeLayout={this.layoutSelector}
          active={this.state.displayInput}
        />
        {this.state.displayInput === "stock" && (
          <>
            <WholeProperty />
            <PropertyTitle />
            <PropertyInput
              property={this.state.property}
              getInput={this.inputGetter}
              buySubmit={this.buySubmitHandler}
              clearInput={this.clearInputHandler}
            />

            <PropertyList
              handleEdit={this.editHandler}
              handleDelete={this.deleteHandler}
            />
            <PropertyResult propertyResult={this.state.propertiesSum} />
          </>
        )}
        {this.state.displayInput === "dailyProperty" && (
          <DailyPropertyContainer dayProperty={this.state.property}
          getDayInput={this.submitDayInput}
          clearDayInput={this.clearDayInput}
          setDate={this.setDate}
          dayProperties={this.state.dayProperties}
          deleteDayProperty={this.deleteDayProperty}
          editDayProperty={this.editDayProperty}

           />
        )}
      </Layout>
    );
  }
}

export default Property;