import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {BoorseProvider} from "./context/context";
import { AuthProvider } from "./context/AuthContext";





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
        <BoorseProvider>
          <App />
        </BoorseProvider>
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
