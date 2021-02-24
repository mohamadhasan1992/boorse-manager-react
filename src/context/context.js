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

    const [user, setUser] = useState(dataUser);
    const[properties,setProperties] = useState(dataProperty);
    const [wholePropertyObject, setWholeProperty] = useState(dataWholeProperty);
    const [dailyProperty, setDailyProperty] = useState(dataDailyProperty);
    const [dayPropertyInput, setDayPropertyInput] = useState({
      id: "",
      value: "",
      date: "",
      day: "شنبه",
      edit: false,
    });

    const [display, setDisplay] = useState(true);

    //error
    const [error,setError] = useState({show:false,msg:''});



// getting first page data /////////////////////////////////////////////////////////////
    const getFirstPageData = () => {
        axios.get(`${rootURL}/home`)
            .then((response) => {
                setProperties(response.data.data.properties);
                setWholeProperty(response.data.data.wholeProperty[7])
            }).catch(err => {
                toggleError(true,`someThing wents wrong: ${err}`)
            })
    };

// get dailyProperty data///////////////////////////////////////////
const getDailyProperty = async () => {
    const response = await axios(`${rootURL}/dailyProperty`).catch(err => {
        console.log(err);
    });
    setDailyProperty(response.data.data.dailyProperties);
};
useEffect(()=>{
    getDailyProperty();
},[display]);
//setting Date
const setDate = (item) => {
  const date = moment().format("jYYYY/jM/jD");
 
  item.date = date;
  return item;
};
////getting day property input
const getDailyPropertyInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     const newDayProperty = {
       ...dayPropertyInput,
       [name]: value,
     };
     if (!newDayProperty.edit) {
       setDate(newDayProperty);
       newDayProperty.id = uuidv4();
     } else {
       newDayProperty.edit = false;
     }
     console.log(newDayProperty.value);
     setDayPropertyInput(newDayProperty);
};


const submitDailyPropertyInput = (e) => {
  e.preventDefault();
  const newDayProperty = dayPropertyInput;
  axios
    .post(`${rootURL}/dailyproperty`, dayPropertyInput)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  const updatedDayProperties = [...dailyProperty, newDayProperty];
  setDailyProperty(updatedDayProperties);
  setDayPropertyInput({
    id: "",
    value: "",
    date: "",
    day: "",
  });
};


const deleteDailyPropertyInput = (id) => {
    axios.delete(`${rootURL}/dailyproperty/${id}`).then(res => {
        console.log(res);
    })
  const filteredDayProperties = dailyProperty.filter(
    (item) => item.id !== id
  );
  setDailyProperty(filteredDayProperties);
};
const updateDailyProperty = (id) => {
    
    const selectedDayProperty = dailyProperty.find(
    (item) => item.id === id
  );
  axios.delete(`${rootURL}/dailyproperty/${id}`).then(res => {
      console.log(res);
  });
  const filteredDayProperties = dailyProperty.filter((item) => item.id !== id);
  selectedDayProperty.edit = true;
  setDailyProperty(filteredDayProperties);
  setDayPropertyInput(selectedDayProperty);
}

 

//toggle error function
    const toggleError = (show,msg)=>{
        setError({show,msg});
    }
    useEffect(getFirstPageData,[]);
    const layoutSelector = () => {
        setDisplay(!display);
    }
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
        }}
      >
        {children}
      </BoorseContext.Provider>
    );
}

export {BoorseProvider , BoorseContext};