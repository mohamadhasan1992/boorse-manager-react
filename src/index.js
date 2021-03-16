import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { AuthProvider } from "./context/AuthContext";
import { createStore, combineReducers, compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import UIReducer from './store-redux/reducers/UIReducer';
import propertyReducer from './store-redux/reducers/propertyReducer';
import dailyPropertyReducer from './store-redux/reducers/dailyPropertyReducer';
import wholePropertyReducer from "./store-redux/reducers/wholePropertyReducer";
import { Provider} from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//middleWare
const logger = (store) => {
  return next => {
    return (action) => {
      console.log('middleware',action);
      next(action);
    }
  }
};

//combining REDUCERS
const rootReducer = combineReducers({
  property: propertyReducer,
  dailyProperty: dailyPropertyReducer,
  wholeProperty: wholePropertyReducer,
  ui:UIReducer
});

//CREATE STORE
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));


////////////////////////////////////////////////////////////////////////////
axios.interceptors.request.use( request => {
  console.log(request);
  return request;
},error => {
  console.log(error);
  return Promise.reject(error);
});
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//creating redux store

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
