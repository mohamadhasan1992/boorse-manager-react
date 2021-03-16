import axios from "../../axios";
import { set_error } from "./UIActions";

// DAILY PROPERTY
export const GET_INPUT_DAILY_PROPERTY = "GET_INPUT_DAILY_PROPERTY";
export const ADD_DAILY_PROPERTY = "ADD_DAILY_PROPERTY";
export const CLEAR_INPUT_DAILY_PROPERTY = "CLEAR_INPUT_DAILY_PROPERTY";
export const DELETE_DAILY_PROPERTY = "DELETE_DAILY_PROPERTY";
export const UPDATE_DAILY_PROPERTY = "UPDATE_DAILY_PROPERTY";
export const GET_DATE_DAILY_PROPERTY = "GET_DATE_DAILY_PROPERTY";
export const GET_INIT_DAILY_PROPERTY = "GET_INIT_DAILY_PROPERTY";

// action creators for DAILY PROPERTY
export const get_input_daily_property = (event) => {
    return {
      type: GET_INPUT_DAILY_PROPERTY,
      event
    };
}
export const get_date_daily_property = (value) => {
  return {
    type: GET_DATE_DAILY_PROPERTY,
    value,
  };
};
export const add_daily_property = (event) => {
  return {
    type: ADD_DAILY_PROPERTY,
    event,
  };
};
export const clear_input_daily_property = () => {
  return {
    type: CLEAR_INPUT_DAILY_PROPERTY,
  };
};
export const delete_daily_property = (id) => {
  return {
    type: DELETE_DAILY_PROPERTY,
    id
  };
};
export const update_daily_property = (id) => {
  return {
    type: UPDATE_DAILY_PROPERTY,
    id,
  };
};
export const get_init_daily_property = () => {
  return (dispatch) => {
    axios
      .get("/dailyproperty")
      .then((response) => {
        dispatch(getDailyProperties(response.data.data.dailyProperties));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};
export const getDailyProperties = (data) => {
  return {
    type: GET_INIT_DAILY_PROPERTY,
    data,
  };
};
