import React, { Component } from "react";

export class Tokyo extends Component {
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
        <p> Tokyo</p>
      </div>
    );
  }
}

export default Tokyo;
