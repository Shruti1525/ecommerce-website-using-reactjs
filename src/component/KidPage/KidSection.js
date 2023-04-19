import React from 'react'
import "../../styles/Women.css"
import { useState } from 'react'    
import KidData from './KidData'
import KidCard from './KidCard';
import KidButtons from './KidButtons';


export default function KidSection({handleAddToCart}) {

    const [item, setItem] = useState(KidData);
    const menuItems = [...new Set(KidData.map((val)=>val.Category))];

    const filterItem = (curcat) => {
        const newItem = KidData.filter((newval)=>{
            return newval.Category === curcat;
        });
        setItem(newItem); 
    }
       

  return (
    <>
    <div className='section py-4 text-center'>
    Buy your favorite products at jaw-dropping discounts!
    </div>
 <div className=' row container-fluid px-4 px-md-5'>
   
    <div class=" col-3 left-side ">
        <h2 className='text-center overflow-hidden mt-4 pb-2'>Categories</h2>

        <KidButtons className='w-100  mb-3' 
        filterItem={filterItem}
        setItem={setItem} 
        menuItems={menuItems} />                 
       
    </div>

       <div className='col-9 right-side'>
       <KidCard item={item} handleAddToCart={handleAddToCart}/>
       </div>
    </div> 
    </>
  )
}
