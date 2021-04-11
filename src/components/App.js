import React from 'react';
import { hot } from "react-hot-loader";
import fourofour from '../commonComponents/404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "antd/dist/antd.css";
import Homepage from './Homepage';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route component={fourofour} />
        </Switch>
      </Router>
    </div>
  )
}

export default hot(module)(App);