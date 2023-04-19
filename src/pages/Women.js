import React from 'react';
import Navbar from '../component/Navbar';
import WomenSection from '../component/WomenPage/WomenSection';
import Footer from '../component/HomePage/Footer';


function Women({ handleAddToCart }){
    return(
        <div>
            <Navbar/>
            <WomenSection handleAddToCart={handleAddToCart}/>
            <Footer/>
         
        </div>
    )
}

export default Women