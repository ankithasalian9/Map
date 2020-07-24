import React, { Component } from "react";

export class Denver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  myClick = () => {
    this.setState({
      clicked: true,
    });
  };
  render() {
    const inputStyle = {
      borderStyle: "dotted",
    };

    return (
      <div
        class="box"
        onClick={this.myClick}
        style={this.state.clicked ? inputStyle : null}
      >
        <p> Denver</p>
      </div>
    );
  }
}

export default Denver;
