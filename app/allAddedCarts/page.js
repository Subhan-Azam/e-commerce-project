// "use client";
// import React, { useState } from "react";
// import Navbar from "../(components)/navbar/Navbar";

// export default function Page() {
//   const [allAddedCart, setAllAddedCart] = useState(
//     JSON.parse(localStorage.getItem("cart"))
//   );
//   console.log("allAddedCart", allAddedCart);
//   return (
//     <div>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
//         <p className="text-muted-foreground mb-4">
//           No items selected.
//           <a href="#" className="text-primary">
//             Select all items
//           </a>
//         </p>
//         <div className="border-t border-muted py-4">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//             {Array.isArray(allAddedCart) &&
//               allAddedCart.map((item) => (
//                 <>
//                   <div className="flex flex-col sm:flex-row items-start sm:items-center">
//                     <input type="checkbox" className="mr-2 mb-2 sm:mb-0" />
//                     <img
//                       src="https://placehold.co/100x100"
//                       alt="Alpine Corporation ZEN128S Statue, 12', Multi-Colored"
//                       className="w-24 h-24 object-cover mr-4 mb-2 sm:mb-0"
//                     />
//                     <div>
//                       <h2 className="text-lg font-semibold">
//                         Alpine Corporation ZEN128S Statue, 12", Multi-Colored
//                       </h2>
//                       <p className="text-green-600">In Stock</p>

//                       <div className="flex flex-wrap items-center mt-2">
//                         <label htmlFor="quantity" className="mr-2">
//                           Qty:
//                         </label>
//                         <select
//                           id="quantity"
//                           className="border border-muted p-1 rounded mr-4"
//                         >
//                           <option>1</option>
//                           <option>2</option>
//                           <option>3</option>
//                         </select>
//                         <a href="#" className="text-primary mr-4">
//                           Delete
//                         </a>
//                         <a href="#" className="text-primary mr-4">
//                           Save for later
//                         </a>
//                         <a href="#" className="text-primary mr-4">
//                           Compare with similar items
//                         </a>
//                         <a href="#" className="text-primary">
//                           Share
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-lg mr-0 lg:mr-16 font-semibold mt-4 sm:mt-0">
//                     $23.90
//                   </div>
//                 </>
//               ))}
//           </div>
//         </div>
//         {/* <div className="border-t border-muted py-4 text-center">
//           <p className="text-muted-foreground">No items selected</p>
//         </div> */}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../(components)/navbar/Navbar";

export default function Page() {
  const [allAddedCart, setAllAddedCart] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      setAllAddedCart(cartData);
    }
  }, []);

  console.log("allAddedCart", allAddedCart);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground mb-4">
          No items selected.
          <a href="#" className="text-primary">
            Select all items
          </a>
        </p>
        <div className="border-t border-muted py-4">
          <div className="flex flex-col">
            {Array.isArray(allAddedCart) &&
              allAddedCart.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-gray-200 transition duration-500 ease-out  py-10 px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                    <input type="checkbox" className="mr-2 mb-2 sm:mb-0" />
                    
                    <img
                      src={item.imgs_url[0].img_url}
                      alt="Product Image"
                      className="w-24 h-24 object-cover mr-4 mb-2 sm:mb-0"
                    />
                    <div className="flex flex-col w-full">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-green-600">In Stock</p>
                      <div className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2" />
                        <span>
                          This is a gift{" "}
                          <a href="#" className="text-primary">
                            Learn more
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center mt-2">
                        <label htmlFor="quantity" className="mr-2">
                          Qty:
                        </label>
                        <select
                          id="quantity"
                          className="border border-muted p-1 rounded mr-4"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        {/* <a href="#" className="text-primary mr-4">
                          Delete
                        </a>
                        <a href="#" className="text-primary mr-4">
                          Save for later
                        </a>
                        <a href="#" className="text-primary mr-4">
                          Compare with similar items
                        </a>
                        <a href="#" className="text-primary">
                          Share
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold mt-4 sm:mt-0">
                    ${item.price}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
