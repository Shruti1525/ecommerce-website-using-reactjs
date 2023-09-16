import React from "react";

export default function Card({ item, handleAddToCart }) {
  return (
    <>
      <h2 className="text-center overflow-hidden my-4">
        Up To 30 Percent Off;;
      </h2>
      <div className="row image-upper-line py-3 mx-1 ">
        <div className=" col-5 fw-bold"> 21,2001 Items Found</div>
        <div className=" col-5 text-end"> Sort By</div>
      </div>

      <div className="row mt-3 d-flex">
        {item.map((product) => (
          <div className="col-2 mx-3 mb-4" key={product.id}>
            <img src={product.womenpic} alt="pic" className="img-fluid" />
            <div className="fw-bold text-center d-inline">
              {product.brandname}
              <a href="/wishlist">
                <button className="wishlist ms-3 ">
                  <img
                    className=""
                    src="https://img.icons8.com/ios-glyphs/30/null/like--v1.png"
                    alt="wishlist"
                  />
                </button>
              </a>
            </div>
            <div className="d-inline ps-4"></div>
            <div>{product.picdetail}</div>
            <div>
              <span className="fw-bold">{product.price}</span>(5% OFF)
            </div>
            <button
              className="women-button w-100 mt-2"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
