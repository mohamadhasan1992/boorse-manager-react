// WHOLE PROPERTY
export const GET_INITIAL_VALUE = "GET_INITIAL_VALUE";
export const GET_DIFFICULTY_VALUE = "GET_DIFFICULTY_VALUE";
export const ADD_WHOLE_PROPERTY = "ADD_WHOLE_PROPERTY";
export const UPDATE_WHOLE_PROPERTY = "UPDATE_WHOLE_PROPERTY";

// action creator for wholeProperty
export const get_initial_value = (event) => {
  return {
    type: GET_INITIAL_VALUE,
    event,
  };
};
export const get_difficulty_value = (event) => {
  return {
    type: GET_DIFFICULTY_VALUE,
    event,
  };
};
export const add_whole_property = () => {
  return {
    type: ADD_WHOLE_PROPERTY,
  };
};
