import React from "react";
import BeautyData from "./BeautyData";

export default function BeautyButtons({ filterItem, setItem, menuItems }) {
  return (
    <>
      <div className="">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="w-100 my-2 py-1 cat-butn"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button className="w-100 my-2 py-1" onClick={() => setItem(BeautyData)}>
          All
        </button>
      </div>
    </>
  );
}
