import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Importando as paginas
import Home from './pages/Home';
import Solicitacao from './pages/Solicitacao';
import Historico from './pages/Historico';
import Vagas from './pages/Vagas';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/solicitacao" component={Solicitacao} />
        <Route path="/historico" component={Historico} />
        <Route path="/vagas" component={Vagas} />
        <Route path="*" component={() => (
          <center>
            <br></br>
            <h1>Ops! Pagina não encontrada.</h1>
            <span>Voltar para o <Link to="/">Início</Link></span>
          </center>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
