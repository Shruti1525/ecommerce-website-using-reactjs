import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/HomePage/Footer';
import Cart from '../component/Addtocartpage/AddTo';

function AddToCart(){
    return(
        <div>
            <Navbar/>
            <Cart/>
            <Footer/>
        </div>
    )
}

export default AddToCart