import React from "react";
import "../../styles/home.css";

export default function Footer() {
  return (
    <>
      <div className="row  mt-5 footer">
        <div className="col-4 para-1 ">
          <div className="">
            <img
              src="./assets/digital_store_removebg.png"
              className="img-fluid"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <div className=""> Who We Are</div>
          <div>Join Our Team</div>
          <div>Terms & Conditions</div>
          <div>We Respect Your Privacy</div>
          <div>Fees & Payments</div>
          <div>Returns & Refunds Policy</div>
          <div>Promotions Terms & Conditions</div>
        </div>

        <div className="col-4 mt-5 para-1">
          <div className="fw-bold">SHOP BY</div>
          <div className="mt-4">Men</div>
          <div>Women</div>
          <div>Kids</div>
          <div>IndieStores</div>
          <div>New Arrivals</div>
          <div>Brand Directory</div>
          <div>HomeCollections</div>
        </div>

        <div className="col-4 mt-5 para-1">
          <div className="fw-bold">FOLLOW US</div>
          <div className="mt-4">
            <img
              src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png"
              className="img-fluid"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/null/facebook-new.png"
              className="img-fluid mx-2"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/null/twitter.png"
              className="img-fluid"
            />
          </div>
          <div></div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-3 text-center">
            <div> @copyright </div>
          </div>

          <div className="col-9 text-end mb-3 pe-5 ">
            <a href="" className="text-decoration-none text-black">
              Privacy policy
            </a>
            <a href="" className="text-decoration-none text-black  ms-3">
              Terms of use
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
