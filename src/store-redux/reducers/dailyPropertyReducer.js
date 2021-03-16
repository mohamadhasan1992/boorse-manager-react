import * as actionTypes from '../actions/dailyPropertyActions';
import moment from 'moment-jalaali';

const initialState = {
  dailyProperty: {
    value: "",
    date: "",
    day: "",
  },
  dailyProperties: [
    {
       _id:"123",
      value: "125",
      date: "98/11/21",
      day: "شنبه",
    },
    {
      value: "125",
      date: "98/11/21",
      day: "یکشنبه",
    },
  ],
};

const reducer = (state=initialState,action) => {
    switch (action.type) {
      case actionTypes.GET_INPUT_DAILY_PROPERTY:
        const newDailyProperty = {
          ...state.dailyProperty,
          [action.event.target.name]: action.event.target.value,
        };
        return {
          ...state,
          dailyProperty: newDailyProperty,
        };
      case actionTypes.ADD_DAILY_PROPERTY:
        const newDailyPropertiesList = {
          ...state,
          dailyProperty: {
            value: "",
            date: "",
            day: "",
          },
          dailyProperties: state.dailyProperties.concat(state.dailyProperty),
        };
        return {
          ...state,
          ...newDailyPropertiesList,
        };
      case actionTypes.CLEAR_INPUT_DAILY_PROPERTY:
        return {
          ...state,
          dailyProperty: {
            value: "",
            date: "",
            day: "",
          },
        };
      case actionTypes.DELETE_DAILY_PROPERTY:
        const deleteDailyProperties = state.dailyProperties.filter(
          (item) => item._id !== action.id
        );
        return {
          ...state,
          dailyProperties: deleteDailyProperties,
        };
      case actionTypes.UPDATE_DAILY_PROPERTY:
        const deletedProperty = state.dailyProperties.find(
          (item) => item._id === action.id
        );
        const deletedList = state.dailyProperties.filter(
          (item) => item._id !== action.id
        );
        return {
          ...state,
          dailyProperty: deletedProperty,
          dailyProperties: deletedList,
        };
      case actionTypes.GET_DATE_DAILY_PROPERTY:
        const newDailyPropertyDate = {
          ...state.dailyProperty,
          date: moment(action.value).format("jYYYY-jM-jD"),
        };
        return {
          ...state,
          dailyProperty: newDailyPropertyDate,
        };
      case actionTypes.GET_INIT_DAILY_PROPERTY:
        return {
          ...state,
          dailyProperties: action.data,
        };

      default:
        return state;
    }
}

export default reducer;