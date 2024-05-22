"use client";
import React, { useState } from "react";
import UserLogOut from "../userLogout/UserLogOut";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image'

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const userImage = session?.user?.image;

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {userImage ? (
          <Image
          src={userImage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        ) : (
          <FontAwesomeIcon icon={faUser} />
        )}
      </button>

      {isOpen && (
        <div className="absolute -right-4 lg:absolute lg:right-0  bg-white mt-3 w-screen md:w-80 lg:w-80 rounded-md shadow-xl ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className=" px-7 py-8 space-y-4">
              <h1 className="text-2xl font-bold">User LogOut</h1>
              <div>
                <b>Name: </b> <span>{session?.user?.name}</span>
              </div>
              <div>
                <b> Email:</b> <span>{session?.user?.email}</span>
              </div>
            </div>
            <UserLogOut />
          </div>
        </div>
      )}
    </div>
  );
}
