import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <div className="main">
                    <h3>
                        Welcome To
                        <br />
                        <strong class="theme_color">Trips App</strong>
                    </h3>
                    <p>Manage the trips by:</p>
                    <ul>
                        <li>Add new trip</li>
                        <li>Update trip</li>
                        <li>Delete trip</li>
                        <li>Show all trips</li>
                    </ul>
                </div>
            </>
        );
    }
}
