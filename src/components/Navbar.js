import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark">
        <Link to="/">
          <img src={logo} alt="" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="navbar-item ml-5 nav-link">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="btn btn-block btn-warning">
            <span className="mr-2">
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </span>
            Cart
          </button>
        </Link>
      </nav>
    );
  }
}
