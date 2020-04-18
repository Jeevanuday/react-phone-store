import React, { Component } from "react";

export default class EmptyCart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="bg-light text-center rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            <h1>Your Cart is Currently Empty</h1>
          </div>
        </div>
      </div>
    );
  }
}
