import React, { Component } from "react";

class Flat extends Component {

  handleClick = () => {
    console.log(this.props);
    this.props.updateFunction(this.props.latitude, this.props.longitude)
  }
  render() {
    const url = this.props.url
    return (
      <div className="card" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${url})` }} onClick={this.handleClick}>
        <div className="card-category">{this.props.price} {this.props.price_currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
