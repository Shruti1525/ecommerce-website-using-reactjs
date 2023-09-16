import React from "react";
import "../../styles/Women.css";
import { useState } from "react";
import MenData from "./MenData";
import MenCard from "./MenCard";
import MenButtons from "./MenButtons";

export default function MenSection({ handleAddToCart }) {
  const [item, setItem] = useState(MenData);
  const menuItems = [...new Set(MenData.map((val) => val.Category))];

  const filterItem = (curcat) => {
    const newItem = MenData.filter((newval) => {
      return newval.Category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="section py-4 text-center">
        Buy your favorite products at jaw-dropping discounts!
      </div>
      <div className=" row container-fluid px-4 px-md-5">
        <div class=" col-3 left-side ">
          <h2 className="text-center overflow-hidden mt-4 pb-2">Categories</h2>

          <MenButtons
            className="w-100  mb-3"
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        </div>

        <div className="col-9 right-side">
          <MenCard item={item} handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </>
  );
}
