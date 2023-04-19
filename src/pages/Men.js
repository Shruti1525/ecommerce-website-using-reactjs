import React from 'react';
import Navbar from '../component/Navbar';
import MenSection from "../component/MenPage/MenSection";
import Footer from '../component/HomePage/Footer';


function Men({handleAddToCart}){
    return(
        <div>
            <Navbar/>
            <MenSection  handleAddToCart={handleAddToCart}/>
            <Footer/>
         
        </div>
    )
}

export default Men