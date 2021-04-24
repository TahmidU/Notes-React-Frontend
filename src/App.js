import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Security from './pages/Security';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Noteboard from './pages/Noteboard';
import AddNote from './pages/AddNote';
import ScrollToTop from './util/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/security' component={Security}/>
          <Route path='/legal' component={Legal}/>
          <Route path='/privacy' component={Privacy}/>
          <Route path='/noteboard' component={Noteboard}/>
          <Route path='/add-note' component={AddNote}/>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
