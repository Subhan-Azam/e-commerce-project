"use client";
import { useState } from "react";

export default function Page() {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Limit the length of the input value to 4 digits
    if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, 4); // Trim input to maximum 4 digits
    }

    setCode(inputValue);
  };
  return (
    <div className="h-screen flex gap-5 justify-center items-center flex-col">
      <h1 className="text-3xl md:text-5xl mb-0 md:mb-4 font-bold">
        Login Code
      </h1>
      <div>
        <input
          type="number"
          value={code}
          onChange={handleChange}
          className="border-2 border-black rounded-lg py-1 px-3"
        />
        <button className="h-11 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none mt-4 lg:mt-1 ml-0 lg:ml-3">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
}
