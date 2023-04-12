import React from 'react';
import "../../styles/home.css";
import { useState, useEffect } from 'react';


const sliderData=[
  {
      images:"./assets/homeimages/pic1.jpg", 

  },
  {
    images:"./assets/homeimages/pic2.jpg", 
  },
  
  {
    images:"./assets/homeimages/pic3.jpg", 
  },
  
  {
    images:"./assets/homeimages/pic4.jpg", 

  },
]


export default function Slider() {
   
  const [currentSlide , setCurrentSlide ] = useState(0)
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;

  const nextSlide=()=>{
    setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1);
  }
  
  const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? currentSlide - 1: currentSlide - 1);
  }

  function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(()=>{
    setCurrentSlide(0)
  },[])

  
  useEffect(()=>{
    if(autoScroll){
      auto();
    }

    return() => clearInterval(slideInterval);
  },[currentSlide])

   
  return ( 
    <> 
    <div className='slider'>

    <i className="fa fa-angle-left  arrow prev" style={{fontSize:"34px"}} onClick={prevSlide}></i>
    <i className="fa fa-angle-right  arrow next   " style={{fontSize:"34px"}} onClick={nextSlide}></i>

    {sliderData.map((slide, index)=>{
         return(
           <div className={index===currentSlide ? "slide current " : "slide"} key={index}>
            {index===currentSlide && (
              <>
              <img src={slide.images} className="img-fluid" alt="slider" />
              </>
            )}

           </div>
         )
    })}     
       
   </div> 
 
    </>
  )
}





{/* 
      <AiOutlineArrowLeft className="arrow-prev" /> 
      <AiOutlineArrowRight className="arrow-next" /> */}

   {/* <div className=' mx-5 px-5'>
       <img src='./assets/homeimages/pic5.jpg' className='img-fluid first-pic' alt='main-pic' /> 
      </div> */}
    