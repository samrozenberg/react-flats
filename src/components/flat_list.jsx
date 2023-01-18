import React, { Component } from "react";
import Flat from "./flat"
import flats from '../../data/flat.js';

class FlatList extends Component {

  render() {
    const all_flats = flats
    return (
      <div className="flat-list">
        {all_flats.map(flat => {
          return <Flat name={flat.name} url={flat.imageUrl} price={flat.price} price_currency={flat.priceCurrency} key={flat.imageUrl} latitude={flat.lat} longitude={flat.lng} updateFunction={this.props.updateFunction} />
          }
        )};
      </div>
    );
  }
}

export default FlatList;
