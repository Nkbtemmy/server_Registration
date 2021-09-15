import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Page from '../pages/Index';

export default class App extends Component {
  render() {
    return (
      <div>
           <Router >
                <Switch>
                  <Route path="/" exact component={Page} />  
                </Switch>
          </Router>    
      </div>
    )
  }
}

