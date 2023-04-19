import React from "react";
import Navbar from "../component/Navbar"
import Footer from "../component/HomePage/Footer";
import Cart from "../component/Addtocartpage/AddTo";

function AddToCart({ cart1, handleRemoveFromCart, getTotalPrice }) {
  return (
    <div>
      <Navbar />
      <Cart
        cart1={cart1}
        handleRemoveFromCart={handleRemoveFromCart}
        getTotalPrice={getTotalPrice} 
      />
      <Footer />
    </div>
  );
} 

export default AddToCart;
