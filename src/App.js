import React from 'react';
import Property from './containers/Property';
import Login from './containers/Login';
import Error from './containers/Error';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const app = () => {
    return (
      <Router>
        <Switch>
            <Route path="/" exact={true}>
              <Property></Property>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
        </Switch>
      </Router>
    );
}

export default app;
