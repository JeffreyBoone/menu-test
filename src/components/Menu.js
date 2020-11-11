import React from 'react';
import { Button, Col, Container, Row, Card } from 'reactstrap';
import './menu.css';
import {list} from "../props";

const Menu = () => {
  return (  
    <Container fluid={true}>
      <Row>
        {list.map((l) => <Col id={l.color}><Button id="textblack" color='link'><img id='img' src={l.image} alt="logo"/><br/>{l.title}<br/>{l.desc}</Button></Col>)}
      </Row>
    </Container>
  );
}

export default Menu;