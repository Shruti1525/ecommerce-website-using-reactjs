import React from 'react';
import "../../styles/home.css";


export default function HomeSection() {

  const Data=[ 
    {
      picture:"./assets/homeimages/section2/biba.png",
      link:"",

    },

    {
      picture:"./assets/homeimages/section2/zara.png",

    },
    {
      picture:"./assets/homeimages/section2/westside.png",

    },
    { 
      picture:"./assets/homeimages/section2/north.png",

    },
    {
      picture:"./assets/homeimages/section2/hm.png",

    },
    {
      picture:"./assets/homeimages/section2/gucci.png",

    },
    {
      picture:"./assets/homeimages/section2/levis.png",

    },
    {
      picture:"./assets/homeimages/section2/glorgio.png",

    },
  ] 
 
  
  return (
    <>
    <div className='row ms-2 mb-4 mt-5 pt-3'> 
        <div className='col-12 '>
         <h2 className='overflow-hidden title text-center'> Categories </h2>
        </div>
     </div> 
     
      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section1/girl-back-img.png' className='img-fluid mb-4 image' style={{height:"600px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'><h3 className='overflow-hidden'>Women's Fashion</h3><br/> <br/>
                <a href='./womens' className='text-white'>View Products </a>
                </div>
          </div>  
      </div>

      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section1/men_back_img.png' className='img-fluid mb-4 image' style={{height:"600px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'> <h3 className='overflow-hidden'>Men's Fashion</h3> <br/> <br/>
                <a href='./mens' className='text-white'> View Products </a>
                </div>
          </div>  
      </div>

      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section1/kid-back-img.png' className='img-fluid mb-4 image' style={{height:"600px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'> <h3 className='overflow-hidden'>Kid's Fashion</h3><br/> <br/>
                <a href='./kids' className='text-white'>View Products </a>
                </div>
          </div>  
      </div>

      <div className='row container-fluid px-4 px-md-5 grid'>
          <div className='col-12'>
            <img src='./assets/homeimages/section1/beauty_back_img.png' className='img-fluid mb-4 image' style={{height:"600px", width:"1500px"}} alt='pic'/>
              <div className='image-overlay-one'> <h3 className='overflow-hidden'>Beauty</h3><br/> <br/>
                <a href='./' className='text-white'>View Products </a>
                </div>
          </div>  
      </div>
           


        <div className='row ms-2 my-4'>
          <div className='col-12'>
           <h2 className='overflow-hidden text-center mt-3'> Brands</h2>
          </div>    
        </div>

        <div className='row  pb-5 '>
          <div className='col-12 mt-4 d-flex container-fluid px-4 px-md-5 '>
          <div className='scroll-bar'>
          {Data.map((item, index)=>(
          <div className='d-inline'>
          <a href={item.link}> <img src={item.picture} alt='pic' className='img-fluid brand-pic mx-4' /></a>
            </div>
          ))}  
          </div>
           </div>
        
        </div>
    </>
  );
}