import './App.css';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import Checkout from './Components/Checkout/Checkout';
import { createBrowserHistory } from "history";
import FoodPage from './Components/FoodPage/FoodPage';
import FoodList from './Components/FoodPage/FoodList';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/home" component={MainSection} />
        <Route path="/food" component={FoodPage} />
        <Route path="/" render={() => (<Redirect to="/home"/>)} />
      </Switch>
    </Router>
  );
}

export default App;




