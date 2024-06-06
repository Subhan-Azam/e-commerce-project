// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Page({emailCode}) {

//   const [code, setCode] = useState("");
  
//   const [coder,setcoder] = useState(emailCode);
//   const router = useRouter()
//   // const coder = router.query
//   console.log('coder==>', coder)

//   console.log('emailCode==>', emailCode)

//   const handleChange = (e) => {
//     let inputValue = e.target.value;

//     // Limit the length of the input value to 4 digits
//     if (inputValue.length > 4) {
//       inputValue = inputValue.slice(0, 4); // Trim input to maximum 4 digits
//     }

//     setCode(inputValue);
//     console.log("Current input value:", inputValue); 
//   };

  

//   const submitCodeHandler = (e) => {
//     e.preventDefault();
//   // if (inputValue== emailCode) {
    
//   // }
//   };

//   return (
//     <div className="h-screen flex gap-5 justify-center items-center flex-col">
//       <h1 className="text-3xl md:text-5xl mb-0 md:mb-4 font-bold">
//         Login Code
//       </h1>
//       <form onSubmit={submitCodeHandler}>
//         <input
//           type="number"
//           value={code}
//           onChange={handleChange}
//           className="border-2 border-black rounded-lg py-1 px-3"
//         />
//         <button className="h-11 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none mt-4 lg:mt-1 ml-0 lg:ml-3">
//           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             Submit
//           </span>
//         </button>
//       </form>
//     </div>
//   );
// }




"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function VerificationPage({ emailCode, userEmail }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Limit the length of the input value to 4 digits
    if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, 4); // Trim input to maximum 4 digits
    }

    setCode(inputValue);
    setError(""); // Clear error when user starts typing
  };

  const submitCodeHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/verifyCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, code, emailCode }),
      });

      const data = await response.json();

      if (response.ok) {
        // Code is correct
        router.push("/success"); // Redirect to a success page or dashboard
      } else {
        // Code is incorrect
        setError(data.message);
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setError("An error occurred while verifying the code.");
    }
  };

  return (
    <div className="h-screen flex gap-5 justify-center items-center flex-col">
      <h1 className="text-3xl md:text-5xl mb-0 md:mb-4 font-bold">
        Enter Verification Code
      </h1>
      <form onSubmit={submitCodeHandler} className="flex flex-col items-center">
        <input
          type="number"
          value={code}
          onChange={handleChange}
          className="border-2 border-black rounded-lg py-1 px-3 mb-4"
          placeholder="Enter 4-digit code"
        />
        {error && (
          <div className="text-red-600 text-sm mb-4">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="h-11 relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
}
