import React, { Component } from 'react';
import api from '../api';


import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";

class Films extends Component {
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
        <Container fluid>
          <Row className="row bg-dark text-light">
          <Col className="col-1 text-center ">
            <FontAwesomeIcon icon={faInstagram} size="2x"/> <br/>
            <FontAwesomeIcon icon={faTwitter} size="2x"/> <br/>
            <FontAwesomeIcon icon={faFacebookF} size="2x"/>
            </Col>
            
            <Col xs="8" className="col-2">
              <div className="title-left"><h1>Filmes</h1></div><br/>
              <img src="/images/starwars_logo.png" className="starwars text-center" alt="logo starwars"/>
            </Col> 

            <Col id="divScroll" className="col-3">
              <FontAwesomeIcon icon ={faCommentAlt} size="2x"/>
              <h3>Info</h3>
              {filmes.map((filme) => (
              <div className="card-body">
                <h4 className="card-title">{filme.title}</h4>
                <div className="card-release_date"> Lançamento: {filme.release_date}</div>
                <a className="card-opening_crawl" type="button" data-toggle="collapse" data-target="#collapseOpeningCrawl" aria-expanded="false" aria-controls="collapseOpeningCrawl">
                 <div>Abertura ++ </div>
                </a>
                <div className="collapse" id="collapseOpeningCrawl">{filme.opening_crawl}</div><br/>   
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

export default Films;
