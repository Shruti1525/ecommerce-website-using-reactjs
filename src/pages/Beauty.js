import React from 'react';
import Navbar from '../component/Navbar';
import BeautySection from '../component/BeautyPage/BeautySection';
import Footer from '../component/HomePage/Footer';


function Beauty({ handleAddToCart }){
    return(
        <div>
            <Navbar/>
            <BeautySection handleAddToCart={handleAddToCart}  /> 
            <Footer/>
         
        </div>
    )
} 

export default Beauty