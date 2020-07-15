import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
    </Switch>

  );
}

export default App;
