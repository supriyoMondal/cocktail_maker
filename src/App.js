import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import CocktailDetails from './pages/CocktailDetails';
import Header from './components/Header';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={CocktailDetails} path="/details/:id" exact />
      </Switch>
    </Router>
  );
}

export default App;
