import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count, company } = item;
  const { decrement, increment, removeItem } = value;
  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img
            src={img}
            alt=""
            width="70"
            className="img-fluid rounded shadow-sm"
          />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">{title}</h5>
            <span className="text-muted font-weight-normal font-italic d-block">
              Company: {company}
            </span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle">
        <strong>${price}</strong>
      </td>
      <td className="border-0 align-middle">
        <div className="product-count">
          <form action="#" className="display-flex">
            <div className="qtyminus" onClick={() => decrement(id)}>
              -
            </div>
            <input
              type="text"
              name="quantity"
              value={count}
              className="qty"
              onChange={() => {}}
            />
            <div className="qtyplus" onClick={() => increment(id)}>
              +
            </div>
          </form>
        </div>
      </td>
      <td className="border-0 align-middle">
        <div className="text-dark" onClick={() => removeItem(id)}>
          <i className="fa fa-trash"></i>
        </div>
      </td>
      <td className="border-0 align-middle">
        <strong>${total}</strong>
      </td>
    </tr>
  );
}
