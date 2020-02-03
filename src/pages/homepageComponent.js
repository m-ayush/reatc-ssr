import React, { Component } from "react";
import { Helmet } from "react-helmet";
export class homepageComponent extends Component {
  example() {
    console.log("js is running");
    this.props.history.push("/aboutus");
  }
  head() {
    return (
      <Helmet>
        <title>My page Title</title>
      </Helmet>
    );
  }
  render() {
    return (
      <div>
        {this.head()}
        <h1>home component</h1>
        <p>some content</p>
        <button onClick={() => this.example()}>console log some text</button>
      </div>
    );
  }
}

export default homepageComponent;
