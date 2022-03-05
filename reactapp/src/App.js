import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import { provider, Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import setting from './reducers/setting'

import ScreenHome from '../src/Component/ScreenHome';
import Tools from '../src/Component/Tools'

const store = createStore(combineReducers({ setting }))

function App() {
  return (

    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={ScreenHome} path="/" exact />
          <Route component={Tools} path="/tools" exact />
        </Switch>
      </Router>
    </Provider>


  );
}

export default App;
