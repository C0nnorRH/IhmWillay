import React from 'react';
import  Home  from '../pages/Home';
import Login from '../pages/Login';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Routes extends React.Component {
  render(){
    return (
        <div>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
    );
  }
};