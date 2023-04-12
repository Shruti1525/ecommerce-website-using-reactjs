import React from 'react';
import Navbar from '../component/Navbar';
import HomePage from "../component/HomePage/HomeHero";
import HomeSection from '../component/HomePage/HomeSection';
import Footer from '../component/HomePage/Footer';

function Home(){
    return(
        <div>
            <Navbar/>
            <HomePage/>
            <HomeSection/>
            <Footer/>
        </div>
    )
}

export default Home