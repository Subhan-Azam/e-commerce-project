// "use client";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Page({ params }) {
//   const [product, setProduct] = useState(null);

//   const fetchProduct = async () => {
//     try {
//       const productId = params.productDetail;
//       const res = await axios.get(
//         "http://localhost:3000/api/bookUploadApi/" + productId
//       );
//       setProduct(res.data.productApi);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
//   console.log("product :>> ", product);

//   useEffect(() => {
//     fetchProduct();
//   }, [params.productDetail]);

//   if (!product) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <>
//       <h1>Product Detail</h1>
//       {product?.map((item) => (
//         <div key={item._id}>
//           <p>{item.catogery}</p>
//           <div>
//             <img src={item.imgs_url[0].img_url} alt="" />
//             <img src={item.imgs_url[1].img_url} alt="" />
//             <img src={item.imgs_url[2].img_url} alt="" />
//           </div>
//           <p>{item.title}</p>
//           <p>{item.price}</p>
//         </div>
//       ))}
//     </>
//   );
// }

"use client";
import "./style.css";
import Loader from "@/app/(components)/loader/Loader";
import Navbar from "@/app/(components)/navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [product, setProduct] = useState(null);
  const [cartData, setCartData] = useState();
  // const [show, setShow] = useState(false);

  // Add To Cart Functionality
  const addToCart = (item) => {
    setCartData(item);
  };

  // fetching Dynamic product
  const fetchProduct = async () => {
    try {
      const productId = params.productDetail;
      const res = await axios.get(
        "http://localhost:3000/api/bookUploadApi/" + productId
      );
      setProduct(res.data.productApi);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log("product :>> ", product);

  useEffect(() => {
    fetchProduct();
  }, [params.productDetail]);

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <Navbar cartData={cartData} />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {product?.map((item) => (
            <div className="flex-1">
              {/* <a href="#" className="text-zinc-500">
                &lt; Back
              </a> */}
              <h1 className="text-4xl font-bold mt-4">{item.catogery}</h1>
              <hr className="my-4" />
              <div className="flex space-x-4">
                <img
                  src={item.imgs_url[0].img_url}
                  alt="Product Image 1"
                  className="w-1/3"
                />
                <img
                  src={item.imgs_url[1].img_url}
                  alt="Product Image 2"
                  className="w-1/3"
                />
                <img
                  src={item.imgs_url[2].img_url}
                  alt="Product Image 3"
                  className="w-1/3"
                />
              </div>

              <p className="mt-4 text-zinc-500">RF293</p>
              <h2 className="text-2xl font-semibold mt-2">{item.title}</h2>
              <p className="mt-2">Height: 10 inches</p>
              <p className="mt-1">Color: Black</p>
              <p className="mt-1">Composition: 100% calf leather</p>
              {/* add To Cart */}
              <button onClick={() => addToCart(item)} className="CartBtn">
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="text">Add to Cart</p>
              </button>
              {/*  */}
              {/* <div className="mt-4">
                <a href="#" className="text-blue-500">
                  Add to favorites
                </a>
                <a href="#" className="text-red-500 ml-4">
                  Remove
                </a>
              </div> */}
              <div className="flex items-center mt-4">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <select id="quantity" className="border rounded p-2">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
              <p className="text-2xl font-bold mt-4">$ {item.price}</p>
            </div>
          ))}

          <div className="w-full lg:w-1/3 lg:ml-8 mt-8 lg:mt-0 bg-zinc-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold">Summary</h2>
            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>$9,000</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>$30</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Tax</span>
              <span>$35</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$10,240</span>
            </div>
            <button className="w-full bg-black text-white py-2 mt-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
