import React from 'react';
import Property from './containers/Property';
import AuthContainer from './containers/AuthContainer';
import SignIn from './containers/SignIn';
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
            <AuthContainer></AuthContainer>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    );
}

export default app;
