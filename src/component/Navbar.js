import React from 'react'; 
import "../styles/Navbar.css";



export default function Navbar() {

   
  return (
    <>
    <nav className='navbar navbar-expand-lg ' style= {{zIndex:5, top:"0px", position:"sticky"}}>
      
      <div className='container-fluid nav-main  fixed-top container-fluid px-4 px-md-5'>
        <a href='/'>
        <img
        src='./assets/digital_store.png' alt='main-logo'
        height="130px"
        width="160px"
        className='img-fluid align-top'
        />     
       </a> 

       <div className='navbar-collapse '>
            <ul className=' navbar-nav main-navbar   align-items-center d-flex'>
                <li className='nav-items ms-5 px-4'> 
                  <a href='./womens' className='nav-link '>
                  Women 
                  </a>
                </li>
                <li className='nav-items'>
                  <a href='./mens' className='nav-link'>
                  Men 
                  </a>
                </li> 
                <li className='nav-items px-4'>
                  <a href='./kids' className='nav-link'>
                  Kids
                  </a> 
                </li>
                <li className='nav-items'>
                  <a href='./'className='nav-link'>
                  Beauty
                  </a>
                </li>
            </ul>  
       </div>
       
   
       <input className="nav-search me-4 ps-2 " type="search" placeholder="Search" aria-label="Search" />
      {/* <button className=" ms-2  px-3 nav-button text-center me-5 " type="submit">Search</button> */}
     <a href='/profile'><img src="https://img.icons8.com/ios-glyphs/30/null/gender-neutral-user.png" alt="profile"/> </a>
       <a href='/wishlist'><img className='mx-2' src="https://img.icons8.com/ios-glyphs/30/null/like--v1.png" alt="wishlist" /></a>
       <a href='/addtocart'>
       <button className='cart-button'>
      <img src="https://img.icons8.com/glyph-neue/64/null/shopping-cart.png" style={{height:"30px", width:"30px"}} /></button>


       </a>

       </div>

    </nav>
    </>
  )
}
