import * as actionTypes from '../actions/propertyActions';
import {updateObject} from '../utility';
import moment from 'moment-jalaali';

const initialState = {
  //initial sotre
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
    complete: false,
  },
  properties: [],
  isLoading:false,
  error:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    ///get input of property ////////////////////////////////////
    case actionTypes.GET_INPUT_PROPERTY:
      const newProperty = { ...state.property, [action.name]: action.value };
      return updateObject(state, { property: newProperty });

    ///submit property ////////////////////////////////////
    case actionTypes.ADD_PROPERTY:
      return {
        ...state,
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
          complete: false,
        },
        properties: state.properties.concat(action.data),
      };

    ///get Date of property ////////////////////////////////////
    case actionTypes.GET_DATE_PROPERTY:
      const propertyDate = {
        ...state.property,
        [action.name]: moment(action.e).format("jYYYY-jM-jD"),
      };
      return updateObject(state, { property: propertyDate });
    ///get Date of property ////////////////////////////////////
    case actionTypes.CLEAR_INPUT_PROPERTY:
      return updateObject(state, {
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
          complete: false,
        },
      });
    ///update property ////////////////////////////////////
    case actionTypes.DELETE_FROM_DOM:
      const editedProperty = state.properties.find((property) => {
        return property._id === action.id;
      });
      const updatedProperties = state.properties.filter((property) => {
        return property._id !== action.id;
      });
      return {
        ...state,
        property: editedProperty,
        properties: updatedProperties,
      };
    ///delete a property ////////////////////////////////////
    case actionTypes.DELETE_PROPERTY:
      const updatedPropertyList = state.properties.filter(
        (property) => property._id !== action.id
      );
      return {
        ...state,
        properties: updatedPropertyList,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.SET_ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_PROPERTIES:
      return {
        ...state,
        properties: action.data,
      };

    default:
      return state;
  }
};

export default reducer;