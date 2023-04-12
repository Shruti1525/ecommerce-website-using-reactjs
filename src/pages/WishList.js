import React from 'react';
import Navbar from '../component/Navbar';
import WishList from '../component/WishListpage/Wish';
import Footer from '../component/HomePage/Footer';

function WishLists(){
    return(
        <div>
            <Navbar/>
            <WishList/>
            <Footer/>
        </div>
    )
}

export default WishLists