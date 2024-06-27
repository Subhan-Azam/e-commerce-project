"use client";
import "./Navbar.css";
import { useState } from "react";
import ProfileModal from "../profileModal/ProfileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import LoginBtn from "../loginBtn/LoginBtn";
import SignupBtn from "../signupBtn/SignupBtn";
import SellProductsBtn from "../sellProductsBtn/SellProductsBtn";
import Link from "next/link";
import AddToCartModal from "../addToCartModal/AddToCartModal";

export default function Navbar({ cartData, removeCartData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-orange-500 py-2 shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-700 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={handleMobileMenuToggle}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
                <FontAwesomeIcon
                  className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  icon={faBars}
                />
                <FontAwesomeIcon
                  className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  icon={faCircleXmark}
                />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto hidden sm:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <div className="block sm:hidden">
                  <ProfileModal />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-7">
                  <ul>
                    <li>
                      <Link
                        href={"/"}
                        className="text-white text-md rounded-md py-2 font-medium"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        href={"/"}
                        className="text-white rounded-md py-2 text-md font-medium"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {/* <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-white text-xl mr-3"
                /> */}
              </button>

              <div className="hidden sm:block">
                {session ? (
                  <div className="flex flex-row-reverse gap-8 items-center">
                    <ProfileModal />
                    <AddToCartModal
                      cartData={cartData}
                      removeCartData={removeCartData}
                    />
                    <SellProductsBtn />
                  </div>
                ) : (
                  <div>
                    <SignupBtn /> <LoginBtn />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <ul>
              <li>
                <Link
                  href={"/"}
                  className="text-white rounded-md py-2 text-md font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
           
          </div>
          <div className="ml-4">
            {session ? (
              <div className="flex gap-8 items-center">
                <SellProductsBtn />
              </div>
            ) : (
              <div>
                <SignupBtn /> <LoginBtn />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
