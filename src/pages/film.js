import React, { Component } from 'react';
import api from '../api';

class Film extends Component {
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
      <div>
      <h1>Listar os Filmes</h1>
      {filmes.map((filme) => (
      <div className="card-body">
        <h2 className="card-title">Título: {filme.title}</h2>
        <h5 className="card-date">Lançamento: {filme.release_date}</h5>
        <p className="card-opening_crawl">Abertura: {filme.opening_crawl}</p>
      </div>
      ))}
    </div>
    );
  };
};

export default Film;