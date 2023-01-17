import React, { Component } from "react";
import flats from '../../data/flat.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    console.log(flats);
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default App;
