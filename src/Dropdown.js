import React, { Component } from "react";

export class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  //https://taginfo.openstreetmap.org/api/4/key/values?key=place&page=1&rp=10&sortname=count_ways&sortorder=desc
  componentDidMount() {
    fetch(
      "https://taginfo.openstreetmap.org/api/4/key/values?key=place&page=1&rp=10&sortname=count_ways&sortorder=desc"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>..</div>;
    } else {
      return (
        <div className="drop">
          <p>Value</p>
          {["value"].map((key) => (
            <select key={key}>
              {this.state.items.data.map(({ [key]: value }) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ))}
          <p>Key</p>
          {["count"].map((key) => (
            <select key={key}>
              {this.state.items.data.map(({ [key]: value }) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ))}

          {/* <select>
            {this.state.items.data.map((user) => (
              <option value="items.value">{items.value}</option>
            ))}
          </select> */}
        </div>
      );
    }
  }
}
export default Dropdown;
