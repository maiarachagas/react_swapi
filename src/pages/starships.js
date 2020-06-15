import React, { Component } from 'react';
import api from '../api';

class Starship extends Component {

  state = {
    naves: [],
  }

  async componentDidMount() {
    const response = await api.get('/starships/');

    this.setState({ naves: response.data.results });

    console.log(this.state.naves);
  }

  render() {
    const { naves } = this.state;
    return (
      <div>
      <h1>Listar as Naves</h1>
      {naves.map((nave) => (
      <div className="card-body">
        <h2 className="card-name">Nome: {nave.name}</h2>
        <h3 className="card-model">Modelo: {nave.model}</h3>
        <h4 className="card-passengers">Passageiros: {nave.passengers}</h4><br/>
      </div>
      ))}
    </div>
    );
  };
};

export default Starship;