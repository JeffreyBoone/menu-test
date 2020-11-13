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

    toggleClass(index) {
        console.log(index)
        if (index.class === "active") {
            return index.class === ""
        } else if (index.class === "") { return index.class === "active" };
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {list.map((l) =>
                        <Button key={l.id} color="primary" className={l.class} onClick={this.toggleClass(l)}>test</Button>
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
