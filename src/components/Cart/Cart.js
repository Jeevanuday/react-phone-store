import React, { Component } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../../context";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <div className="px-4 px-lg-0">
          <div className="container text-dark py-5 text-center">
            <h1 className="display-4">Store cart</h1>
          </div>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <div>
                    <CartColumns value={value} />
                    <CartTotal value={value} />
                  </div>
                );
              } else {
                return <EmptyCart />;
              }
            }}
          </ProductConsumer>
        </div>
      </section>
    );
  }
}
