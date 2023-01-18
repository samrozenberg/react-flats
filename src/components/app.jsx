import React, { Component } from "react";
import FlatList from './flat_list'
import Map from './map'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marker_latitude: null,
      marker_longitude: null
    };
  };

  update_coordinates = (latitude, longitude) => {
    this.setState({
      marker_latitude: latitude,
      marker_longitude: longitude,
    });
  }

  render() {
    return (
      <div>
        <FlatList updateFunction={this.update_coordinates} />
        <Map marker_latitude={this.state.marker_latitude} marker_longitude={this.state.marker_longitude} />
      </div>
    );
  }
}

export default App;
