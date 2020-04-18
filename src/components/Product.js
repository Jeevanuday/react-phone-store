import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product_item col-md-4">
        <ProductConsumer>
          {value => (
            <div className="card mb-5 text-white bg-dark">
              <div className="options-cart-round">
                <button
                  className="btn btn-warning btn-sm"
                  title="Add to cart"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id, 1);
                    value.openModal(id);
                    value.addTotal();
                  }}
                >
                  {inCart ? (
                    <h5 className="text-capitalize mb-0" disabled>
                      In Cart
                    </h5>
                  ) : (
                    <span className="fa fa-shopping-cart"></span>
                  )}
                </button>
              </div>

              <div
                className="image_container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img className="card-img-top" src={img} alt="Card cap" />
                </Link>
              </div>

              <div className="card-body product_details">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title mb-0">{title}</h5>
                  <p className="align-self-center  mb-0">
                    <span className="mr-1">$</span>
                    {price}
                  </p>
                </div>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
