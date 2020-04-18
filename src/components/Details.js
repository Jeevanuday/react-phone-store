import React, { Component } from "react";
import { ProductConsumer } from "../context.js";
import "./Details.css";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="pd-wrap">
              <div className="container">
                <div className="heading-section">
                  <h2>Product Details</h2>
                </div>
                <div className="row mr-2">
                  <div className="col-md-6">
                    <div className="item">
                      <img
                        className="detailed_image"
                        alt="detail_img"
                        src={img}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-dtl">
                      <div className="product-info">
                        <div className="product-name">{title}</div>
                        <div className="reviews-counter">
                          <div className="rate">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              defaultValue="5"
                            />
                            <label title="text">5 stars</label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              defaultValue="4"
                            />
                            <label title="text">4 stars</label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              defaultValue="3"
                            />
                            <label title="text">3 stars</label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              defaultValue="2"
                            />
                            <label title="text">2 stars</label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              defaultValue="1"
                            />
                            <label title="text">1 star</label>
                          </div>
                          <span>3 Reviews</span>
                        </div>
                        <div className="product-price-discount">
                          <span>${price}</span>
                          <span className="line-through">$29.00</span>
                        </div>
                      </div>
                      <p>{info}</p>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="size">Quantity</label>
                          <select
                            id="size"
                            name="size"
                            className="form-control"
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label>Color</label>
                          <select
                            id="color"
                            name="color"
                            className="form-control"
                          >
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Red</option>
                          </select>
                        </div>
                      </div>
                      <div className="product-count">
                        <div>
                          <Link to="/">
                            <button className="round-black-btn mr-4">
                              Back To Products
                            </button>
                          </Link>
                          <button
                            className={
                              inCart
                                ? "round-black-btn-disabled"
                                : "round-black-btn"
                            }
                            disabled={inCart ? true : false}
                            onClick={() => {
                              value.addToCart(id, 1);
                              value.openModal(id);
                              value.addTotal();
                            }}
                          >
                            {inCart ? "In Cart" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-info-tabs">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="review-heading">REVIEWS</div>
                      <p className="mb-20">There are no reviews yet.</p>
                      <form className="review-form">
                        <div className="form-group">
                          <label>Your rating</label>
                          <div className="reviews-counter">
                            <div className="rate">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                defaultValue="5"
                              />
                              <label title="text">5 stars</label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                defaultValue="4"
                              />
                              <label title="text">4 stars</label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                defaultValue="3"
                              />
                              <label title="text">3 stars</label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                defaultValue="2"
                              />
                              <label title="text">2 stars</label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                defaultValue="1"
                              />
                              <label title="text">1 star</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Your message</label>
                          <textarea
                            className="form-control"
                            rows="10"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Name*"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Email Id*"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="round-black-btn">
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
