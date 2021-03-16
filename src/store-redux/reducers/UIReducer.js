import * as actionTypes from '../actions/UIActions';
import {updateObject} from '../utility';

const initialState = {
    isLoading:false,
    error:false,
    display:false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_IS_LOADING:
        return updateObject(state, { isLoading: !state.isLoading });
      case actionTypes.SET_ERROR:
        return updateObject(state, { error: !state.error });
      case actionTypes.CHANGE_DISPLAY:
        return updateObject(state,{display:!state.display});
      
      default: {
        return state;
      }
    }
}

export default reducer;