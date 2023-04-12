import React from "react";

export default function Card({item}){


return (
   <> 
<h2 className='text-center overflow-hidden my-4'>Up To 50 Percent Off </h2> 
<div className='row image-upper-line py-3 mx-1 '>
 <div className=' col-5 fw-bold'> 21,2001 Items Found</div>
 <div className=' col-5 text-end'> Sort By</div>
 </div>
 
 <div className='row mt-3 d-flex'>
    { item.map((item)=>(
    <div className='col-2 mb-4' key={item.id}><img src={item.womenpic} alt="pic" className='img-fluid' />
  <div className='fw-bold text-center d-inline'> {item.brandname} </div> 
  <div className="d-inline ps-4">

  {/* <div className="d-inline">  
          <button>Add to cart</button>
          <AddTo addItem={addItem}/>
          
 </div> */}

 {/* <button><a href='/'><img className='img-fluid' src="https://img.icons8.com/ios-glyphs/30/null/like--v1.png" alt="wishlist" style={{height:"25px", width:"25px"}} /></a> </button> */}

 {/* <button><a href='/'><img className="img-fluid" src="https://img.icons8.com/ios-glyphs/30/null/shopping-cart--v1.png" alt="cart"style={{height:"25px", width:"25px"}}/></a></button> */}
  </div>
   <div>{item.picdetail}</div>
  <div> <span className="fw-bold">{item.price}</span>(5% OFF)</div>
 <button >Add To Cart</button>
</div>

    ))}
 </div>
</>
);
}