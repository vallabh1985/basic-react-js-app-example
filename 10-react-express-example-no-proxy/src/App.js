import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import List from './List';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/users' component={List}/>
    </Switch>
  );
}

export default App;
