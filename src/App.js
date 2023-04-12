import { BrowserRouter, Routes,Route  } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import AddToCart from "./pages/AddToCart";
import WishList from "./pages/WishList";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='womens' element={<Women/>} />
    <Route path='addtocart' element={<AddToCart/>}/>
    <Route path='wishlist' element={<WishList/>} />


    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
