import { BrowserRouter, Routes,Route  } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kid from './pages/Kid';
import AddToCart from "./pages/AddToCart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import React, { useState, useEffect } from "react";


function App() {

  const [cart, setCart] = useState([]);
  const [cart1, setCart1] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart1(JSON.parse(savedCart));
    }
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart1];
    updatedCart.splice(index, 1);
    setCart1(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart1.reduce((total, product) => total + product.price, 0);
  };

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='womens' 
     element={<Women handleAddToCart={handleAddToCart} />} />
    <Route path='mens'
     element={<Men handleAddToCart={handleAddToCart}/>} />
    <Route path='kids'
     element={<Kid handleAddToCart={handleAddToCart}/>} />
    <Route
          path="addtocart"
          element={
            <AddToCart
              cart1={cart1}
              handleRemoveFromCart={handleRemoveFromCart}
              getTotalPrice={getTotalPrice}
            />
          }
        />
    <Route path='wishlist' element={<WishList/>} />
    <Route path='profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
