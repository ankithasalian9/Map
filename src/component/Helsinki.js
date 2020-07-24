import React, { Component } from "react";

export class Helsinki extends Component {
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
        class="box1"
        onClick={this.myClick}
        style={this.state.clicked ? inputStyle : null}
      >
        <p> Helsinki</p>
      </div>
    );
  }
}

export default Helsinki;
