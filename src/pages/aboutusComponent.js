import React, { Component } from "react";
import { Helmet } from "react-helmet";
export class aboutusComponent extends Component {
  example() {
    console.log("jss is running");
  }
  head() {
    return (
      <Helmet>
        <title>About us Title</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <h1>About us component</h1>
        <p>some content</p>
        <button onClick={() => this.example()}>console log some text</button>
      </div>
    );
  }
}

export default aboutusComponent;
