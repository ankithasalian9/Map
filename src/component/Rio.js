import React, { Component } from "react";

export class Rio extends Component {
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
        <p> Rio</p>
      </div>
    );
  }
}

export default Rio;
