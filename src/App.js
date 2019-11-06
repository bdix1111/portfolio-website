import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;

// <Route path='/about' component={About} />
// <Route path='/portfolio' component={Portfolio} />
// <Route path='/resume' component={Resume} />
