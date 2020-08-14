import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome to trips manager</h1>
        <p>Manage the trips by:</p>
        <ul>
          <li>Add new trip</li>
          <li>Update trip</li>
          <li>Delete trip</li>
          <li>Show all trips</li>
        </ul>
      </div>
    );
  }
}
