// "use client";
// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Page({ params }) {
//   const [product, setProduct] = useState(null);

//   const fetchProduct = async () => {
//     try {
//       const productId = params.productDetail;
//       const result = await axios.get(
//         "http://localhost:3000/api/bookUploadApi/" + productId
//       );
//       console.log("res :>>", result.data);
//     //   setProduct(result.data);
//     //   console.log("Data :>> ", result.data.result);
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
// //   console.log("product :>> ", product);

//   useEffect(() => {
//     fetchProduct();
//   }, [params.productDetail]);

//   return (
//     <>
//       <h1>Product Detail</h1>
//       {/* {product.map((item, index) => (
//         <div key={index}>
//           <p>{item.title}</p>
//           <p>{item.price}</p>
//         </div>
//       ))} */}
//     </>
//   );
// }




"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchProduct = async () => {
    try {
      const productId = params.productDetail;
      const result = await axios.get(`http://localhost:3000/api/bookUploadApi/${productId}`);
      console.log("res :>>", result.data);
      setProduct(result.data.product); // Ensure this matches the response structure
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.log(err.message);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [params.productDetail]);

  return (
    <>
      <h1>Product Detail</h1>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
}
