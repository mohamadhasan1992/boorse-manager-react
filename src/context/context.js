import React,{useState,useEffect} from 'react';
import axios from 'axios';
import dataUser from './data/user';
import dataProperty from "./data/properties";
import dataWholeProperty from './data/wholeProperty';
import dataDailyProperty from "./data/dailyProperty";

import moment from "moment-jalaali";


import { v4 as uuidv4 } from "uuid";



const rootURL = 'http://127.0.0.2:8000/api/v1';

const BoorseContext = React.createContext();

// axios.get('/user').then(response => {
//     const user = response;
//     console.log(response);
// })
const BoorseProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(dataUser);
  const [properties, setProperties] = useState(dataProperty);
  const [propertiesSum,setPropertiesSum] = useState(0);
  const [wholePropertyObject, setWholeProperty] = useState(dataWholeProperty);
  const [dailyProperty, setDailyProperty] = useState(dataDailyProperty);
  const [dayPropertyInput, setDayPropertyInput] = useState({
    value: "",
    date: "",
    day: "شنبه",
    edit: false,
  });

  const [display, setDisplay] = useState(true);

  //error
  const [error, setError] = useState({ show: false, msg: "" });

  // getting first page data /////////////////////////////////////////////////////////////
  const getFirstPageData = () => {
    setIsLoading(true);
    axios
      .get(`${rootURL}/home`)
      .then((response) => {
        setProperties(response.data.data.properties);
        setWholeProperty(response.data.data.wholeProperty[7]);
        setPropertiesSum(response.data.data.propertiesSum);
      })
      .catch((err) => {
        toggleError(true, `someThing wents wrong: ${err}`);
      });
    setIsLoading(false);
  };
  // update propertiesState
  const updateProperties = (updatedProperties) => {
    setProperties(updatedProperties);
  }
  //update PropertiesSum
  const updatePropertiesSum = (property, action) => {
    let updateSum = 0;
    if(action){
      updateSum = propertiesSum + calcBuyValue(property);
    }else{
      updateSum = propertiesSum - calcBuyValue(property);
    }
    setPropertiesSum(updateSum);
  }
// calculate sum of value
  const calcBuyValue = (obj) => {
    return obj.buyValue * obj.buyPrice;
  };

  //creating new property
  const postNewProperty = async (property) => {
    try{
      const res = await axios
        .post(`${rootURL}/property`, property);
      const newProperty = res.data.data.property;
      const updatedProperties = [...properties, newProperty];
      updateProperties(updatedProperties);
      if(!newProperty.complete){
        updatePropertiesSum(newProperty, true);
      }
      
    }catch(err){
      console.log(err);
    }
  };
  const deleteProperty = (id) => {
    axios.delete(`${rootURL}/property/${id}`).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  const patchProperty = (id,property) => {
    //change the properties state
    axios
      .patch(`${rootURL}/property/${id}`, property)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // get dailyProperty data///////////////////////////////////////////
  //if the layout changed to daily property it will be run
  const getDailyProperty = async () => {
    setIsLoading(true);
    const response = await axios(`${rootURL}/dailyProperty`).catch((err) => {
      console.log(err);
    });
    setDailyProperty(response.data.data.dailyProperties);
    setIsLoading(false);
  };
  

  
  ////getting day property input
  const setDate = (value) => {
    const date = moment(value).format("jYYYY-jM-jD");
    const newDayProperty = {...dayPropertyInput,date};
    setDayPropertyInput(newDayProperty);
  };
  const getDailyPropertyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newDayProperty = {
      ...dayPropertyInput,
      [name]: value,
    };
    
    setDayPropertyInput(newDayProperty);
  };

  const submitDailyPropertyInput = async (e) => {
    e.preventDefault();
    const newDayProperty = dayPropertyInput;
    let response;
    try{
      response = await axios.post(
        `${rootURL}/dailyproperty`,
        dayPropertyInput
      );
      
    }catch(err){
      console.log(err);
    }
    const updatedDayProperties = [...dailyProperty, response.data.data.dailyProperty];
    setDailyProperty(updatedDayProperties);
    setDayPropertyInput({
      value: "",
      date: "",
      day: "",
    });
  };

  const deleteDailyPropertyInput = (id) => {
    axios.delete(`${rootURL}/dailyproperty/${id}`).then((res) => {
      console.log(res);
    });
    const filteredDayProperties = dailyProperty.filter(
      (item) => item._id !== id
    );
    setDailyProperty(filteredDayProperties);
  };
  const updateDailyProperty = (id) => {
    const selectedDayProperty = dailyProperty.find((item) => item._id === id);
    axios.delete(`${rootURL}/dailyproperty/${id}`).then((res) => {
      console.log(res);
    });
    const filteredDayProperties = dailyProperty.filter(
      (item) => item.id !== id
    );
    selectedDayProperty.edit = true;
    setDailyProperty(filteredDayProperties);
    setDayPropertyInput(selectedDayProperty);
  };

  //toggle error function
  const toggleError = (show, msg) => {
    setError({ show, msg });
  };
  // loading data when first page loaded
  useEffect(getFirstPageData, []);
  
  //function for changing layout
  const layoutSelector = () => {
    setDisplay(!display);
    getDailyProperty();

  };
  return (
    <BoorseContext.Provider
      value={{
        user,
        properties,
        wholePropertyObject,
        dailyProperty,
        display,
        error,
        layoutSelector,
        getDailyPropertyInput,
        submitDailyPropertyInput,
        deleteDailyPropertyInput,
        updateDailyProperty,
        dayPropertyInput,
        isLoading,
        properties,
        propertiesSum,
        postNewProperty,
        patchProperty,
        deleteProperty,
        updateProperties,
        updatePropertiesSum,
        setDate
      }}
    >
      {children}
    </BoorseContext.Provider>
  );
}

export {BoorseProvider , BoorseContext};