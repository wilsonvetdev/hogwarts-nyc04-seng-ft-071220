import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from './HogContainer'
import GreasedButton from './GreasedButton'

class App extends Component {

  render() {

    let hogsArray = hogs

    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <GreasedButton hogs={hogsArray} />
        <HogContainer hogs={hogsArray} />
      </div>
    );
  }
}

export default App;
