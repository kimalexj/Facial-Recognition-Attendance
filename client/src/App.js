import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Sidebar from './components/sidenav';
import Home from './components/home';
import Today from './components/Today/today';
import Submission from './Submission/submission';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="row">
            <div className="col s2">
              <Sidebar />
            </div>
            <div className="col s10">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/today' component={Today}/>
                <Route path='/week' component={Submission}/>
                
                
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
