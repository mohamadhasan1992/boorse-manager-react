import * as actionTypes from "../store-redux/actions";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROPERTY:
    const properties = [...state];
      return {
        
      };
    case actionTypes.DELETE_PROPERTY:
      return {
        property: "",
      };
    case actionTypes.UPDATE_PROPERTY:
      return {
        property: "",
      };

    default:
      return state;
  }
};

export default reducer;
