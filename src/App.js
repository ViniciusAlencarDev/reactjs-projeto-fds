import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importando as paginas
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={() => <center><h2>Pagina nao encontrada</h2></center>} />
      </Switch>
    </Router>
  );
}

export default App;
