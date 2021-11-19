import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateTech from './components/CreateTech';
import ShowTechList from './components/ShowTechList';
import ShowTechDetails from './components/ShowTechDetails';
import UpdateTechInfo from './components/UpdateTechInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowTechList} />
          <Route path='/create-tech' component={CreateTech} />
          <Route path='/edit-tech/:id' component={UpdateTechInfo} />
          <Route path='/show-tech/:id' component={ShowTechDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
