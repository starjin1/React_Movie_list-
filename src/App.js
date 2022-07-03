import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Home />
        </Route>
        <Route path='/about/:id'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
