import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import Checkout from './Components/Checkout/Checkout';
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={MainSection} />
      </Switch>
    </Router>
  );
}

export default App;




