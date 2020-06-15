import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import api from './api';

import People from './pages/people';
import Starship from './pages/starships';
import Films from './pages/films';



class App extends Component {
  state = {
    filmes: [],
  }
  async componentDidMount() {
    const response = await api.get('/films/');
    this.setState({ filmes: response.data.results });
  }

  render() {
    const { filmes } = this.state;


    return (
      <div className="conteiner-fluid bg-dark">
        <div className="menu">

          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <header className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link">Filmes</Link>
              <Link to="/peopleStarWars" className="nav-item nav-link">Personagens</Link>
              <Link to="/starshipStarWars" className="nav-item nav-link">Espaçonaves</Link>
              </div>
            </header>            
          </nav>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Films}/>
            <Route path="/peopleStarWars" component={People}/>
            <Route path="/starshipStarWars" component={Starship}/>
          </Switch>
        </div>
      </div>
    );
  };
};

export default App;