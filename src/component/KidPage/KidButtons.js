import React from "react";
import KidData from "./KidData";

export default function KidButtons({ filterItem, setItem, menuItems }) {
  return (
    <>
      <div className="">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="w-100 my-2 py-1"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button className="w-100 my-2 py-1" onClick={() => setItem(KidData)}>
          All
        </button>
      </div>
    </>
  );
}
