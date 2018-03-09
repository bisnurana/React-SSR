import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UserLists from './components/Users';


export default () => (
  <div> <Route exact path="/" component={Home} />
    <Route path="/users" component={UserLists} />
  </div>);
