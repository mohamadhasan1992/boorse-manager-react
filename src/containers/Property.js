import React,{Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import WholeProperty from '../components/Property/WholeProperty/WholeProperty';
import PropertyResult from '../components/Property/PropertyResult/PropertyResult';
import PropertyTitle from '../components/Property/PropertyTitle/PropertyTitle';
import PropertyList from '../components/Property/PropertyList/PropertyList';
import PropertyInput from '../components/Property/PropertyInput/PropertyInput';
import LayoutSelector from '../components/Property/LayoutSelector/LayoutSelector';
import DailyPropertyInput from '../components/DailyProperty/DailyPropertyInput/DailyPropertyInput';
import DayTable from "../components/DailyProperty/DayTable/DayTable";
import moment from "moment-jalaali";

class Property extends Component {
  state = {
    initialValue: "",
    difficulty: [
      {
        id: 2,
        difficultyName: "بالا",
        difficultyStatus: false,
        difficultyValue: "high",
      },
      {
        id: 3,
        difficultyName: "متوسط",
        difficultyStatus: true,
        difficultyValue: "medium",
      },
      {
        id: 4,
        difficultyName: "کم",
        difficultyStatus: false,
        difficultyValue: "low",
      },
    ],
    selectedDifficulty: "medium",
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
    propertyResult: "-",
    dayProperty: {
      id: "",
      value: "",
      date: "",
      day: "شنبه",
      edit:false
    },
    dayProperties: [],
  };
  ///wholeProperty section ///////////////////////////////////////////
  grabInitProperty = (e) => {
    const enteredValue = e.target.value.toString();
    this.setState({ initialValue: enteredValue });
  };
  checkboxSelectHandler = (e) => {
    //find the checked checkbox
    const checked = this.state.difficulty.find(
      (item) => item.difficultyValue === e.target.value
    );

    //turn the checkedstatus => true
    checked.difficultyStatus = true;
    //remove it from the array
    const filteredDifficulty = this.state.difficulty.filter(
      (item) => item.difficultyValue !== e.target.value
    );
    filteredDifficulty.forEach((item) => (item.difficultyStatus = false));
    //create updated array
    const updatedDifficulty = [...filteredDifficulty, checked];
    this.setState({
      difficulty: updatedDifficulty,
      selectedDifficulty: checked,
    });
  };
  ///stock section ///////////////////////////////////////////

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
  submitWholeInput = (e) => {
    e.preventDefault();
    if (this.state.initialValue) {
      alert(`you should have ${this.state.selectedDifficulty.id} property `);
    } else {
      alert("Error");
    }
  };
  clearWholeInput = () => {
    this.setState({ initialValue: "" });
  };
  buySubmitHandler = (e) => {
    e.preventDefault();
    const newProperty = { ...this.state.property };
    if (
      newProperty.name &&
      newProperty.buyDate &&
      newProperty.buyValue &&
      newProperty.buyPrice &&
      newProperty.buyPurpose
    ) {
      const updatedProperties = [...this.state.properties, newProperty];
      this.setState({
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
    const filteredProperties = this.state.properties.filter(
      (property) => property.id !== id
    );
    this.setState({ properties: filteredProperties });
  };
  editHandler = (id) => {
    const filteredProperties = this.state.properties.filter(
      (property) => property.id !== id
    );
    const editedProperty = this.state.properties.find(
      (property) => property.id === id
    );
    editedProperty.edit = true;
    this.setState({
      properties: [...filteredProperties],
      property: editedProperty,
    });
  };
  layoutSelector = (e) => {
    this.setState({ displayInput: e.target.value });
  };
  //working on property part
  setDate = (e) => {
    const date =  moment(e).format("jYYYY/jM/jD") ;
    const newDayProperty = {...this.state.dayProperty,date};
    this.setState({dayProperty: newDayProperty});  
    
    }
  getDayInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newDayProperty = {
      ...this.state.dayProperty,
      [name]: value,
    };
    if(!newDayProperty.edit){
      this.setDate();
      newDayProperty.id = uuidv4();
    }else{
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
    const filteredDayProperties = this.state.dayProperties.filter(item => item.id !== id);
    this.setState({dayProperties:filteredDayProperties});
  };
  editDayProperty = (id) => {
    const selectedDayProperty = this.state.dayProperties.find(
      (item) => item.id === id
    );
    const filteredDayProperties = this.state.dayProperties.filter(
      (item) => item.id !== id
    );
    selectedDayProperty.edit = true;
    this.setState({dayProperties:filteredDayProperties,dayProperty:selectedDayProperty});
  };
  render() {
    return (
      <>
        <WholeProperty
          initValue={this.state.initialValue}
          difficulty={this.state.difficulty}
          change={this.grabInitProperty}
          submitWholeInput={this.submitWholeInput}
          clearWholeInput={this.clearWholeInput}
          selectHandler={this.checkboxSelectHandler}
        />
        <LayoutSelector
          changeLayout={this.layoutSelector}
          active={this.state.displayInput}
        />
        {this.state.displayInput === "stock" && (
          <>
            <PropertyTitle />
            <PropertyInput
              property={this.state.property}
              getInput={this.inputGetter}
              buySubmit={this.buySubmitHandler}
              clearInput={this.clearInputHandler}
            />

            <PropertyList
              properties={this.state.properties}
              handleEdit={this.editHandler}
              handleDelete={this.deleteHandler}
            />
            <PropertyResult propertyResult={this.state.propertyResult} />
          </>
        )}
        {this.state.displayInput === "dailyProperty" && (
          <>
            <DailyPropertyInput
              dayProperty={this.state.dayProperty}
              getInput={this.getDayInput}
              submitInput={this.submitDayInput}
              clearInput={this.clearDayInput}
              setDate={this.setDate}
            />
            <DayTable
              properties={this.state.dayProperties}
              delete={this.deleteDayProperty}
              edit={this.editDayProperty}
            />
          </>
        )}
      </>
    );
  }
}

export default Property;