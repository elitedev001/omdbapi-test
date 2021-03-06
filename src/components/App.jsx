import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <Link to="/" alt="The Movie List">
            <h1 className="title">The Movie List</h1>
          </Link>
        </header>

        {this.props.children}
      </div>
    );
  }
}
