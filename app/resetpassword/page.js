"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function Page() {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const updateHandler = async (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please provide a password");
      return;
    }

    try {
      const result = await axios.put("/api/forgetpassword", {
        password,
        token,
      });
      console.log(result.data);
      router.push("login");
    } catch (error) {
      console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={updateHandler}>
      <div className="h-screen flex gap-5 justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl mb-0 md:mb-4 font-bold">
          Update Password
        </h1>
        <div className="flex justify-center flex-wrap">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-80 md:w-[600px]  h-[50px] flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg">
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value) setError("");
                }}
                className="outline-none w-full"
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              >
                {showPass ? (
                  <FontAwesomeIcon className="mr-2" icon={faEye} />
                ) : (
                  <FontAwesomeIcon className="mr-2" icon={faEyeSlash} />
                )}
              </div>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          <button className="h-11 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none mt-4 lg:mt-1 ml-0 lg:ml-3">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
