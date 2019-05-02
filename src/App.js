import React, { Component } from 'react';
import './App.css';
import Header from './componets/header';
import { BrowserRouter as Router, Switch,Route,Link,exact} from  'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Header />          
    </div>
    </Router>
      
    );
  }
}

export default App;
