import React,{useState} from 'react';
import axios from '../axios';
import dataUser from './data/user';
import dataProperty from "./data/properties";
import dataWholeProperty from './data/wholeProperty';
import dataDailyProperty from "./data/dailyProperty";


//const rootURL = 'http://127.0.0.2:8000/api/v1';

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

    return(
        <BoorseContext.Provider value={{user,properties, wholePropertyObject,dailyProperty}}>
            {children}
        </BoorseContext.Provider>
    )
}

export {BoorseProvider , BoorseContext};