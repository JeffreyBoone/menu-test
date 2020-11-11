import React, { Component } from 'react'
import { Button , ListGroupItem ,ListGroup } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

export const list = [
  { id:"0", class: "active", color: "c1", title: 'Handboek - LIOR', desc: 'Handboek Openbare Ruimte' },
  { id:"1", class: "active", color: "c2", title: "PvE Projecten", desc: "Programma van Eisen" },
  { id:"2", class: "", color: "c2", title: 'Bijlagen', desc: 'Raadplegen van Bijlagen' },
  { id:"3", class: "", color: "c1", title: 'Bronverwijzingen', desc: 'Raadplegen van Bronverwijzingen' },
  { id:"4", class: "disabled", color: "c1", title: 'Accounts en Rechten', desc: 'Gebruikersadministratie' },
  { id:"5", class: "hidden", color: "c2", title: 'Extra', desc: 'Gebruikersadministratie' },
]

const Menu = () => {

  function toggleClass(index) {
    // if (list[index.id].class === "active") {
    //   return list[index.id].class === ""
    // } else if(list[index.id].class === "") { return list[index.id].class === "active"};
  };

  return (
    <div>
      <ListGroup>
        {list.map((l) =>
          <ListGroupItem color="primary" className={l.class} onClick={toggleClass({l})}>{l.title}</ListGroupItem>
        )}      </ListGroup>
        <br/>
      <ListGroup>
        {list.map((l) =>
          <ListGroupItem color="primary" className={l.class}>{l.title}</ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
}

export default Menu;