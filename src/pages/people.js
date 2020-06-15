import React, { Component } from 'react';
import api from '../api';

import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

class People extends Component {

  state = {
    personagens: [],
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('/people/');
    this.setState({ personagens: response.data.results });
  }

  render() {
    const { personagens } = this.state;
    return (
        <div>
        <Container fluid>
          <Row className="row bg-dark text-light">
          <Col className="col-1 text-center ">
            <FontAwesomeIcon icon={faInstagram} size="2x"/> <br/>
            <FontAwesomeIcon icon={faTwitter} size="2x"/> <br/>
            <FontAwesomeIcon icon={faFacebookF} size="2x"/>
            </Col>

              <Col xs={8}className="col-2 text-center">
              <div className="title-left"><h1>Personagens</h1></div><br/>
                <img src="/images/stormtrooper_starwars.png" className="stormtrooper " alt="stormtrooper"/>
              </Col> 

              <Col id="divScroll" className="col-3">
              <FontAwesomeIcon icon ={faCommentAlt} size="2x"/>
              <h4>Info</h4>
               {personagens.map((personagem) => (
                <div className="card-body">
                 <h4 className="card-name">{personagem.name}</h4>
                 <div className="card-idade">Idade: {personagem.birth_year}</div>
                 <div className="card-gender">Sexo: {personagem.gender}</div>
                 <FontAwesomeIcon icon={faLongArrowAltRight} style={{color: 'red'}}/>
                </div>
                
              ))}
            </Col>
          </Row>
        </Container>
          </div>
    );
  };
};

export default People;
