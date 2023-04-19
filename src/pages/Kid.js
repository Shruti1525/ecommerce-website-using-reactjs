import React from 'react';
import Navbar from '../component/Navbar';
import KidSection from '../component/KidPage/KidSection';
import Footer from '../component/HomePage/Footer';


function Kid({handleAddToCart}){
    return(
        <div>
            <Navbar/>
            <KidSection  handleAddToCart={handleAddToCart}/>
            <Footer/>
         
        </div>
    )
}

export default Kid