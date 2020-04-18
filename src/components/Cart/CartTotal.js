import React from "react";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="pb-5">
      <div className="container">
        <div className="row py-5 p-4 bg-white rounded shadow-sm">
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Coupon code
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have a coupon code, please enter it in the box below
              </p>
              <div className="input-group mb-4 border rounded-pill p-2">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="button-addon3"
                  className="form-control border-0"
                />
                <div className="input-group-append border-0">
                  <button
                    id="button-addon3"
                    type="button"
                    className="btn btn-dark px-4 rounded-pill"
                  >
                    <i className="fa fa-gift mr-2" />
                    Apply coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Instructions for seller
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea
                name=""
                cols="30"
                rows="2"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary{" "}
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                Shipping and additional costs are calculated based on values you
                have entered.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>${cartSubTotal}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Tax</strong>
                  <strong>${cartTax}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">${cartTotal}</h5>
                </li>
              </ul>
              <div
                className="col-lg-6 btn btn-default btn-danger btn-lg rounded-pill py-2"
                onClick={() => clearCart()}
              >
                Clear Cart
              </div>
              <div className="col-lg-6 btn btn-dark btn-lg rounded-pill py-2">
                Procceed to checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
