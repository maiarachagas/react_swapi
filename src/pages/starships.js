import React, { Component } from 'react';
import api from '../api';

import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";


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
        <Container fluid>
          <Row className="row bg-dark text-light">
          <Col className="col-1 text-center ">
            <FontAwesomeIcon icon={faInstagram} size="2x"/> <br/>
            <FontAwesomeIcon icon={faTwitter} size="2x"/> <br/>
            <FontAwesomeIcon icon={faFacebookF} size="2x"/>
            </Col>

          <Col xs={8}className="col-2 text-center">
          <div className="title-left"><h1>Naves</h1></div><br/>
            <img src="/images/millennium_falcon.png" className="millenniumfalcon" alt="millennium_falcon"/>
          </Col> 

          <Col id="divScroll" className="col-3">
          <FontAwesomeIcon icon ={faCommentAlt} size="2x"/>
          <h4>Info</h4>
           {naves.map((nave) => (
            <div className="card-body">
             <h4 className="card-name">{nave.name}</h4>
             <div className="card-model">Modelo: {nave.model}</div>
             <div className="card-passengers">Passageiros: {nave.passengers}</div>
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

export default Starship;