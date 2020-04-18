import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import "./Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { title, img, price } = value.modalProduct;
          const { modalOpen, closeModal } = value;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal" tabIndex="-1" role="dialog">
                <div
                  className="modal-dialog modal-md modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body text-center col-8 mx-auto">
                      <h3>
                        <b>Item Added To Cart</b>
                      </h3>
                      <img src={img} alt="cart_image" className="img-fluid" />
                      <div className="mr-2 p-2">
                        <h3>
                          <b>{title}</b>
                        </h3>
                        <h4 className="text-muted">Price : ${price}</h4>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Link to="/">
                          <button
                            className="modal_btn align-self-center mr-0"
                            onClick={() => closeModal()}
                          >
                            Go To Store
                          </button>
                        </Link>
                        <Link to="/cart">
                          <button
                            className="modal_btn align-self-center mr-0"
                            onClick={() => closeModal()}
                          >
                            Go To Cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
