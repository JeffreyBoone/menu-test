import React from 'react';
import {
  Container, Row, Col, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {list} from "../props";
import './menu.css';

function goto() {

}

const Tile = () => {
    return (  
        <Container fluid={true}>
          <Row>
            {list.map((l) => 
            <Col id={l.color} onClick={goto()}>
             <CardBody id={l.color}>
              <CardTitle tag="h5">{l.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{l.desc}</CardSubtitle>
            </CardBody><img id='img' src={l.image} alt="logo"/>
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
           </Col>)}
          </Row>
        </Container>
      );
}


export default Tile;