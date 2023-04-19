import React from 'react'
import "../../styles/Women.css"
import { useState } from 'react'    
import Data from './Data'
import Card from './Card';
import Buttons from './Buttons';
 
export default function WomenSection({ handleAddToCart }) {
  const [item, setItem] = useState(Data); 
  const menuItems = [...new Set(Data.map((val)=>val.Category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newval)=>{
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

        <Buttons className='w-100  mb-3' 
        filterItem={filterItem}
        setItem={setItem} 
        menuItems={menuItems} />                 
       
    </div>

       <div className='col-9 right-side'>
       <Card item={item} handleAddToCart={handleAddToCart}/>
       </div>
    </div> 
    </>
  )
}
