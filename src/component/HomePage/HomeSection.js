import React from 'react';
import "../../styles/home.css";


export default function HomeSection() {

  const Data=[ 
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },

    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
    {
      picture:"./assets/homeimages/section1/mainpic1.png",

    },
  ] 

  
  return (
    <>
    <div className='row ms-2 mt-5 mb-5'> 
        <div className='col-12 mt-5 '>
         <h2 className='overflow-hidden title text-center'> Categories </h2>
        </div>
     </div> 
     
      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section2/girl-back-img.png' className='img-fluid mb-4 image' style={{height:"800px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'><h3 className='overflow-hidden'>Women's Fashion</h3><br/> <br/>
                <a href='./womens' className='text-white'>View Products </a>
                </div>
          </div>  
      </div>

      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section3/back-img.png' className='img-fluid mb-4 image' style={{height:"800px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'> <h3 className='overflow-hidden'>Men's Fashion</h3> <br/> <br/>
                <a href='./' className='text-white'> View Products </a>
                </div>
          </div>  
      </div>

      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section2/kid-back-img.png' className='img-fluid mb-4 image' style={{height:"800px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'> <h3 className='overflow-hidden'>Kid's Fashion</h3><br/> <br/>
                <a href='./' className='text-white'>View Products </a>
                </div>
          </div>  
      </div>
           


        <div className='row ms-2 mt-5'>
          <div className='col-12'>
           <h2 className='overflow-hidden text-center mt-3'> Brands</h2>
          </div>    
        </div>

        <div className='row  pb-5 '>
          <div className='col-12 mt-4 d-flex container-fluid px-4 px-md-5 '>
          <div className='scroll-bar'>
          {Data.map((item, index)=>(
          <div className='d-inline'>
            <img src={item.picture} alt='pic' className='img-fluid brand-pic mx-4' />
            </div>
          ))}  
          </div>
           </div>
        
        </div>
    </>
  );
}