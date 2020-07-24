import React from "react";

import "./App.css";
import Dropdown from "./Dropdown";
import Tokyo from "./component/Tokyo";
import Denver from "./component/Denver";
import Rio from "./component/Rio";
import Moscow from "./component/Moscow";
import Helsinki from "./component/Helsinki";
import Berlin from "./component/Berlin";

function App() {
  return (
    <div className="App">
      <Dropdown />

      <Tokyo />
      <Denver />
      <Rio />
      <Moscow />
      <Helsinki />
      <Berlin />
    </div>
  );
}

export default App;
