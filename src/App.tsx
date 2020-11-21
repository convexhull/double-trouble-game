import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home/Home';
import DoubleTroubleGame from './pages/DoubleTrouble/DoubleTrouble';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route  path = "/double-trouble" component = {DoubleTroubleGame} />
      </Switch>
    </div>
  );
}

export default App;
