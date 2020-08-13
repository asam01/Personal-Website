import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Route exact path='/personal-website' render = {() => <Home/>} />
      <Route exact path='/personal-website/contact' render = {() => <Contact/>} />
    </Router>
  );
}

export default App;
