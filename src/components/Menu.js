import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './menu.css';
import image1 from '../1.png';
import image2 from '../2.png';
import image3 from '../3.png';
import image4 from '../4.png';
import image5 from '../5.png';
import {title, desc, list} from "../props";

const Menu = () => {
  return (  
    <Container fluid={true}>
      <Row>
        <Col id='white'><Button id="textblack" color='link'><img id='img' src={image1} alt="logo"/><br/>{title.handboek}<br/>{desc.handboek}</Button></Col>
        <Col id='gray'><Button id="textblack" color='link'><img id='img' src={image2} alt="logo"/><br/>{title.pve}<br/>{desc.pve}</Button></Col>
        <Col id='gray'><Button id="textblack" color='link'><img  id='img'src={image3} alt="logo"/><br/>{title.bijlagen}<br/>{desc.bijlagen}</Button></Col>
        <Col id='white'><Button id="textblack" color='link'><img id='img' src={image4} alt="logo"/><br/>{title.BV}<br/>{desc.BV}</Button></Col>
        <Col id='white'><Button id="textblack" color='link'><img id='img' src={image5} alt="logo"/><br/>{title.handboek}<br/>{desc.handboek}</Button></Col>
        <Col id='gray'><Button id="textblack" color='link'><img id='img' src={image5} alt="logo"/><br/>{title.handboek}<br/>{desc.handboek}</Button></Col>
      </Row>
    </Container>
  );
}

export default Menu; 