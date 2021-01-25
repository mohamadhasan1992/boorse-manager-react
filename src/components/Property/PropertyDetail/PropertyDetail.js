import React,{useState} from 'react';
import uuid from 'uuid';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from "../PropertyDetail/propertyDetail.module.css";
import PropertyTitle from '../PropertyTitle/PropertyTitle';
import PropertyForBuy from "./PropertyForBuy/PropertyForBuy";
import PropertyForSell from "./PropertyForSell/PropertyForSell";
import PropertyCompleted from "./PropertyCompleted/PropertyCompleted";



const PropertyDetail = () => {
  const [property, setProperty] = useState({
    name: "",
    buyDate: "",
    buyValue: "",
    buyPrice: "",
    buyPurpose: "",
    sellDate: "",
    sellValue: "",
    sellPrice: "",
    sellPurpose: "",
    bought:false,
    completed:false
  }); 
  const [properties, setProperties] = useState([]);
  
  const buyChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProperty({...property,[name]:value,bought:true});
    
  };

  const buySubmitHandler = (e)=> {
    e.preventDefault();
    if(property.name && property.buyDate && property.buyValue && property.buyPrice && property.buyPurpose){
      const newProperty = {...property, id: new Date().getTime().toString()};
      setProperties([...properties,newProperty]);
      setProperty({
        id:"",
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
        completed: false,
      });
    }else{
      alert("error");
    }

    
  };
  
  const sellCompletedHandler = (e) =>{
    e.preventDefault();
    if(property.sellDate && property.sellPrice && property.sellValue && property.sellPurpose){
      const newProperty = {...property};
      setProperties([...properties,newProperty]);
      setProperty({
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
        completed: false,
      });
    }
  };
  const sellChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.key;
    console.log(e.target);
    const property = properties.find(property => property.id = id);
    console.log(property);
    setProperty({...property , [name]:value,completed:true});
  };
  
  return (
    <Auxiliary>
      <PropertyTitle />
      <PropertyForBuy
        property={property}
        handleBuyChange={buyChangeHandler}
        buySubmit={buySubmitHandler}
      />
      {properties.map((property) => {
        if (property.bought) {
          return (
            <PropertyForSell
              property={property}
              key={property.id}
              completedClicked={sellCompletedHandler}
              handleSellChange={sellChangeHandler}
            />
          );
        }
        else {
          return <PropertyCompleted property={property}/>;
        }
      })}
    </Auxiliary>
  );
}

export default PropertyDetail;