import Link from "next/link";
import React from "react";
import "./SellProductsBtn.css";

export default function SellProductsBtn() {
  return (
    <div>
      <Link href={"/bookUpload"} title="Sell Products">
        <button className="Sell_Products">Sell Products</button>
      </Link>
    </div>
  );
}
