import React, { Component } from 'react';
import api from '../api';

class People extends Component {

  state = {
    personagens: [],
  }

  async componentDidMount() {
    const response = await api.get('/people/');

    this.setState({ personagens: response.data.results });

    console.log(this.state.personagens);
  }

  render() {
    const { personagens } = this.state;
    return (
      <div>
      <h1>Listar os Personagens</h1>
      {personagens.map((personagem) => (
      <div className="card-body">
        <h2 className="card-name">Nome: {personagem.name}</h2>
        <h3 className="card-birth">Data de Nascimento: {personagem.birth_year}</h3>
        <h4 className="card-gender">Sexo: {personagem.gender}</h4><br/>
      </div>
      ))}
    </div>
    );
  };
};

export default People;