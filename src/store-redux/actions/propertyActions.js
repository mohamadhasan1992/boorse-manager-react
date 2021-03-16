import axios from '../../axios';
//PROPERTY
export const GET_INPUT_PROPERTY = "GET_INPUT_PROPERTY";
export const ADD_PROPERTY = "ADD_PROPERTY";
export const CLEAR_INPUT_PROPERTY = "CLEAR_INPUT_PROPERTY";
export const DELETE_PROPERTY = "DELETE_PROPERTY";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const GET_DATE_PROPERTY = "GET_DATE_PROPERTY";
export const GET_PROPERTIES = "SET_PROPERTIES";
export const SET_ERROR = "SET_ERROR";
export const SET_ISLOADING = "SET_ISLOADING";
export const DELETE_FROM_DOM = "DELETE_FROM_DOM";


// action creators for property
export const get_input_property = (name, value) => {
  return {
    type: GET_INPUT_PROPERTY,
    name,
    value,
  };
};

export const add_property_async = (data) => {
  return {
    type: ADD_PROPERTY,
    data
  };
};
export const add_property = (data) => {
  return dispatch => {
    axios.post('/property',data) 
      .then((response) => {
        dispatch(add_property_async(response.data.data.property));
      })
      .catch((error) => {
        dispatch(setError(error));
      })
  }
  
};
export const get_date_property = (event, name) => {
  return {
    type: GET_DATE_PROPERTY,
    event,
    name,
  };
};
export const clear_input_property = () => {
  return {
    type: CLEAR_INPUT_PROPERTY,
  };
};
//test
export const complete_buy_property = (data) => {
  return (dispatch) => {
    axios
      .patch(`/property/${data._id}`, data)
      .then((response) => {
        dispatch(add_property_async(response.data.property));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};
export const update_property = (id) => {
  return {
    type:DELETE_FROM_DOM,
    id
  }
}
export const delete_property_async = (id) => {
  return {
    type: DELETE_PROPERTY,
    id,
  };
};
export const delete_property = (id) => {
  return dispatch => {
    axios.delete(`/property/${id}`)
      .then(response => {
        dispatch(delete_property_async(id));
      }).catch(error => {
        dispatch(setError(error))
      })
  }
};
///////////////////////////
export const setError = (error) => {
  return{
    type:SET_ERROR,
    error
  }
}
export const getProperties = (data) => {
  return {
    type:GET_PROPERTIES,
    data
  }
};
export const get_init_property = () => {
  return (dispatch) => {
    axios
      .get("/property")
      .then((response) => {
        dispatch(getProperties(response.data.data.properties));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};

