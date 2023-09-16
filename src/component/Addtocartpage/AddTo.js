import React from "react";
import "../../styles/AddTo.css";


export default function AddTo({ cart1, handleRemoveFromCart, getTotalPrice }) {
  return (
    <>
      <div className="add"></div>
      <div>
        <h2 className="text-center overflow-hidden mb-5">Cart</h2>
        <div className="row">
        {cart1.map((product, index) => (

          <div key={product.id}  className="col-2 ms-4">
            <div><img src={product.womenpic}className="img-fluid" style={{height:"250px", width:"300pxc"}}/></div>
            <div>{product.picdetail}</div>
            <div>Price: &#8377;{product.price}</div>
            <button className="women-button w-75" onClick={() => handleRemoveFromCart(index)}>
              Remove from cart
            </button>
          </div>
        ))}
        </div>
        <p className="fw-bold text-center mt-4">Total price: &#8377;{getTotalPrice()}</p>
      </div>
    </>
  );
}
