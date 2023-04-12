import React from 'react'

export default function Footer() {
  return (

    <>

        {/* <h2 className='my-5 overflow-hidden text-center'>Street Store</h2>
        <div> 
       <h3> safe site for online shopping  </h3>
       <h3> safe site for online shopping </h3>
        </div> */}

        {/* <div className='row mt-4 footer-image '>
            <div className='col-4 text-center my-3'>
             <div><img src="https://img.icons8.com/ios-glyphs/100/null/replace.png" alt='footer-pic' className='img-fluid'/></div>
             <div className='mt-2'>EASY EXCHANGE</div>
            </div>

            <div className='col-4 text-center my-3'>
            <div><img src="https://img.icons8.com/ios-filled/100/null/trust--v1.png" alt='footer-pic'  className='img-fluid'/></div>
             <div className='mt-2'>HANDPICKED</div>
            </div>

            <div className='col-4 text-center my-3'>
            <div><img src="https://img.icons8.com/glyph-neue/100/null/verified-account.png" alt='footer-pic'  className='img-fluid'/></div>
             <div className='mt-2'>ASSURED QUALITY</div>
            </div>
        </div> */}
  
        <div className='row  mt-5'>
            <div className='col-4 para-1 '>
                <div className=''><img src='./assets/logo1.png' className='img-fluid' style={{height:'100px', width:"100px"}} /> </div>
                <div className='mt-3'>  Who We Are</div>
                <div>Join Our Team</div>
                <div>Terms & Conditions</div>
                <div>We Respect Your Privacy</div>
                <div>Fees & Payments</div>
                <div>Returns & Refunds Policy</div>
                <div>Promotions Terms & Conditions</div>
             </div>

             


            {/* <div className='col-3 para-1'>
                <div> HELP </div>
                <div className='mt-3'>Track Your Order</div>
                <div>Frequently Asked Questions</div>
                <div>Returns</div>
                <div>Cancellations</div>
                <div>Payments</div>
                <div>Customer Care</div>
                <div>How Do I Redeem My Coupon</div>
            </div> */}

            <div className='col-4 mt-5 para-1'>
                <div className='fw-bold'>SHOP BY</div>
                <div className='mt-4'>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>IndieStores</div>
                <div>New Arrivals</div>
                <div>Brand Directory</div>
                <div>HomeCollections</div>
             </div>

            <div className='col-4 mt-5 para-1'>
                <div className='fw-bold'>FOLLOW US</div>
                <div className='mt-4'>
                <img src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png" className='img-fluid'/>
                <img src="https://img.icons8.com/ios-filled/50/null/facebook-new.png" className='img-fluid mx-2'/>
                <img src="https://img.icons8.com/ios-filled/50/null/twitter.png" className='img-fluid'/>
                </div>
                <div></div>
             </div>

             <hr className='my-4'/>
             
             <div className='row'>
             <div className='col-3 text-center'>
                <div> @copyright </div>
             </div>

             <div className='col-9 text-end mb-3 pe-5 '>
                <a href='' className='text-decoration-none text-black'>Privacy policy </a>
                <a href='' className='text-decoration-none text-black  ms-3'>Terms of use </a>
             </div>
             </div>


            
            
        </div>
   
</>
    

  )
}
