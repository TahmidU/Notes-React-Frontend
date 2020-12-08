import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Security from './pages/Security';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/security' component={Security}/>
        <Route path='/legal' component={Legal}/>
        <Route path='/privacy' component={Privacy}/>
      </Switch>
    </Router>
  );
}

export default App;
