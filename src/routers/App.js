import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Page from '../pages/Index';
import Home from '../pages/Home';
import Dropzone from '../components/dropzone/Dropzone';
import Preview from '../components/preview/Preview';

export default class App extends Component {
  render() {
    return (
      <div>
           <Router >
                <Switch>
                  <Route path="/" exact component={Page} /> 
                  <Route path="/preview" exact component={Preview} />
                  <Route path="/home" exact component={Home} /> 
                  <Route path="*" component={Dropzone} />  
                </Switch>
          </Router>    
      </div>
    )
  }
}

