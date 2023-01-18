import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {

  render() {
    const defaultProps = {
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 12
    };
    return (
      <div className="map-container" style={{ height: '100vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={this.props.marker_latitude}
            lng={this.props.marker_longitude}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
