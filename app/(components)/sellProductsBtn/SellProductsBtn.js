import Link from "next/link";
import React from "react";
import "./SellProductsBtn.css";

export default function SellProductsBtn() {
  return (
    <div>
      <Link
        href={"/bookUpload"}
        title="Sell Products"
        // className="relative inline-flex items-center justify-center px-4 py-3 text-md font-medium text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        // role="button"
      >
        <button className="Sell_Products">Sell Products</button>
      </Link>
      {/* [#FF44EC][#FF675E] */}
      {/* <div className="relative inline-flex group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#44BCFF] to-[#44BCFF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href={"/bookUpload"}
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-4 py-3 text-md font-medium text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Sell Products
        </Link>
      </div> */}
    </div>
  );
}
