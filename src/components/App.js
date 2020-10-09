import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from './HogContainer'
import Buttons from './Buttons'

class App extends Component {

  state = {
    hogs: []
  }

  componentDidMount(){
    let hogsArray = hogs
    this.setState({hogs: hogsArray})
  }

  showOnlyGreasedHogs = () => {
    let greasedHogs = hogs.filter((hog) => {
    return hog.greased === true
  })

  this.setState({
    hogs: greasedHogs
  })

  }

  showAllHogs = () => {
    let hogsArray = hogs
    this.setState({hogs: hogsArray})
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Buttons showOnlyGreasedHogs={this.showOnlyGreasedHogs} showAllHogs={this.showAllHogs} />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
