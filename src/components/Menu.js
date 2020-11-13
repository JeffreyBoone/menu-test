import React, { Component } from 'react'
import { Button ,ListGroup } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import {list} from "../props";

export default class ToggleApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.toggleClass = this.toggleClass.bind(this);
    }

    // de functie triggered correct in de f12 van chrome, met 2 active en 4 nonactive zoals in de database 
    // dus hij krijgt "index" wel goed mee maar niet als ik op de knop klik dan gebeurt er niks in het console   
    // gebaseerd op https://stackoverflow.com/a/44696148
    // de fout zit waarschijnlijk in de onclick hoe ik de l.class meegeef of de return
    toggleClass(index) {
        console.log(index)
        if (index === "active") {
            return index === ""
        } else if (index === "") { 
          return index === "active" };
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {list.map((l) =>
                        <Button key={l.id} color="primary" className={l.class} onClick={this.toggleClass(l.class)}>test</Button>
                    )}      </ListGroup>
                <br />
                <ListGroup>
                    {list.map((l) =>
                        <Button key={l.id} color="primary" className={l.class}>{l.title}</Button>
                    )}
                </ListGroup>
            </div>
        )
    }
}
