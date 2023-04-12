import React from "react";
import Data from "./Data";

export default function Buttons({ filterItem, setItem, menuItems }) {
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
        <button
          className="w-100 my-2 py-1"
          onClick={() => setItem(Data)}
        > 
          All
        </button>
      </div>
      </>
    );
}
