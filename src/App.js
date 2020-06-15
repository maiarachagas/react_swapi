import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import People from './pages/people';
import Starship from './pages/starships';
import Film from './pages/film';

import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight, faCommentAlt } from "@fortawesome/free-solid-svg-icons";

class App extends Component {

  render() {
    return (
      <div className="conteiner-fluid bg-dark">

        <div className="menu">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler" aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <header className="collapse navbar-collapse" id="navbarMainToggler">
              <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>  
              <Link to="/filmsStarWars" className="nav-item nav-link">Films</Link>
              <Link to="/peopleStarWars" className="nav-item nav-link">People</Link>
              <Link to="/starshipStarWars" className="nav-item nav-link">Starship</Link>
              </div>
            </header>
          </nav>
        </div>
        
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route path="/filmsStarWars" component={Film}/>
            <Route path="/peopleStarWars" component={People}/>
            <Route path="/starshipStarWars" component={Starship}/>
          </Switch>
        </div>

        
        <Container fluid>
          <Row className="row bg-dark text-light ">
            
            <Col className="col-1 text-center ">
              <FontAwesomeIcon icon={faInstagram} size="2x" /><br></br>
              <FontAwesomeIcon icon={faTwitter} size="2x"/><br></br>
              <FontAwesomeIcon icon={faFacebookF} size="2x"/>
            </Col>

            <Col xs={8}className="col-2 text-right">
              <img src="/images/Stormtrooper_StarWars.png" className="img Stormtropper" alt="Stormtropper"/>
            </Col>  

            <Col className="col-3">
              <FontAwesomeIcon icon ={faCommentAlt} size="2x"/><h4>Info</h4>
              <h5>A New Hope</h5>
               Episodio 4<br></br>
               Lançamento: 1977-05-25<br></br>
               Diretor: George Lucas<br></br>
               <FontAwesomeIcon icon={faLongArrowAltRight} style={{ color: 'red' }}  /><br></br>
               <h5>Subheading</h5>

            </Col>
          </Row>
        
        </Container>
      </div>
    );
  };
};

export default App;