"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

export default function AddToCartModal(props) {
  const cartStorage = JSON.parse(localStorage.getItem("cart"));

  const [openModal, setOpenModal] = useState(false);
  const [cartNumber, setCartNumber] = useState(cartStorage?.length);
  const [cartItems, setCartItems] = useState(cartStorage);
  const cartData = props.cartData;

  useEffect(() => {
    if (cartData) {
      if (cartNumber) {
        let localCartItems = cartItems;
        localCartItems.push(JSON.parse(JSON.stringify(cartData)));
        setCartNumber(cartNumber + 1);
        setCartItems(localCartItems);
        localStorage.setItem("cart", JSON.stringify(localCartItems));
      } else {
        setCartNumber(1);
        setCartItems([cartData]);
        localStorage.setItem("cart", JSON.stringify([cartData]));
      }
    }
  }, [cartData]);

  useEffect(() => {
    if (props.removeCartData) {
      let localCartItem = cartItems.filter((item) => {
        return item._id != props.removeCartData;
      });

      setCartItems(localCartItem);
      setCartNumber(cartNumber - 1);
      localStorage.setItem("cart", JSON.stringify(localCartItem));
      if (localCartItem.length == 0) {
        localStorage.removeItem("cart");
      }
    }
  }, [props.removeCartData]);

  console.log("cartItems :>>", cartItems);

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <div className="relative">
        <Link href={cartNumber?"/allAddedCarts": "#"}>
          <button onClick={modalHandler} className="">
            <BsCart4 className="text-white text-[30px]" />
          </button>
          <div className="absolute -top-3 -right-3 bg-orange-800 text-white rounded-full w-5 text-center text-sm">
            {cartNumber ? cartNumber : 0}
          </div>
        </Link>
      </div>

      {/* {openModal && (
        <div className="absolute -right-4 lg:absolute lg:right-0  bg-white mt-3 w-screen md:w-64 rounded-md shadow-xl ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className=" px-7 py-8 space-y-4">
              <h1 className="text-2xl text-center font-bold">Add Data</h1>
              <div>
                <b>Name: </b> <span>DATA</span>
              </div>
              <div>
                <b> Email:</b> <span>DATA</span>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
