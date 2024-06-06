// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import axios from "axios";
// import { useSession } from "next-auth/react";

// const page = () => {
//   const { data: sessionData } = useSession();
//   console.log("sessionData", sessionData);

//   let obj = {
//     title: "",
//     author: "",
//     price: null,
//     catogery: "",
//     description: "",
//   };

//   const [bookinfo, setBookinfo] = useState(obj);
//   const [img, setImg] = useState([]);
//   function changehandler(e) {
//     setBookinfo({ ...bookinfo, [e.target.name]: e.target.value });
//   }

//   async function imagehandler(e) {
//     const files = e.target.files;

//     console.log(files);
//     if (files.length >= 5 || img.length >= 5) {
//       return;
//     }
//     try {
//       const promises = [];
//       for (let i = 0; i < files.length; i++) {
//         let file = files[i];
//         if (file.size > 4 * 1024 * 1024) {
//           continue;
//         }
//         const reader = new FileReader();

//         const promise = new Promise((resolve) => {
//           reader.onload = (e) => {
//             setImg((prevselectedimg) => [
//               ...prevselectedimg,
//               { url: e.target.result, file: file.name },
//             ]);
//             resolve();
//           };
//         });
//         reader.readAsDataURL(file);
//         promises.push(promise);
//       }
//       await Promise.all(promises);
//     } catch (error) {
//       console.error("Error reading images:", error);
//     }
//   }

//   async function uploaddata(e) {
//     e.preventDefault();
//     if (sessionData != null) {
//       var userid = sessionData?.user?.id;
//     }
//     if (!userid) {
//       return;
//     }
//     let obj = {
//       bookinfo,
//       img,
//       userid,
//     };
//     const response = await axios
//       .post("http://localhost:3000/api/bookUploadApi", obj)
//       .then((result) => {
//         console.log(result);
//         setBookinfo(obj);
//         setImg([]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log("response", response);
//   }

//   function del(index) {
//     let images_for_delete = [...img];
//     images_for_delete.splice(index, 1);
//     setImg(images_for_delete);
//   }
//   return (
//     <>
//       <div className="main-page-layout">
//         <h1>Upload your Book</h1>
//         <form onSubmit={uploaddata}>
//           <div>
//             <label htmlFor="">Title</label>
//             <br />
//             <input type="text" onChange={changehandler} name="title" />
//             <br />
//             <label htmlFor="">Author Name</label>
//             <br />
//             <input type="text" onChange={changehandler} name="author" />
//             <br />
//             <label htmlFor="">Price(Rs)</label>
//             <br />
//             <input type="number" onChange={changehandler} name="price" />
//             <br />
//             <label htmlFor="">Description</label>
//             <br />
//             <input
//               type="text-area"
//               onChange={changehandler}
//               name="description"
//             />
//             <br />
//             <label htmlFor="">Select Catogery</label>
//             <select onChange={changehandler} name="catogery" id="">
//               <option value="">Select</option>
//               <option value="Fiction">Fiction</option>
//               <option value="Literature">Literature</option>
//               <option value="Classics">Classics</option>
//               <option value="Comics">Comics</option>
//               <option value="Non Fiction">Non Fiction</option>
//               <option value="Biographies">Biographies</option>
//             </select>
//             <label htmlFor="">Select Images</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={imagehandler}
//               multiple
//             />
//           </div>
//           <button type="submit">Post</button>
//         </form>
//         <div className="image-main-show">
//           {img?.map((v, index) => {
//             return (
//               <>
//                 <div className="image-show-box">
//                   <Image src={v.url} alt="Loading" width={150} height={100} />
//                   <button className="image-del-btn" onClick={() => del(index)}>
//                     delete
//                   </button>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Loader from "../loader/Loader";

const page = () => {
  const [loader, setLoader] = useState(false);
  const { data: sessionData } = useSession();
  console.log("sessionData", sessionData);

  let obj = {
    title: "",
    author: "",
    price: null,
    catogery: "",
    description: "",
  };

  const [bookinfo, setBookinfo] = useState(obj);
  const [img, setImg] = useState([]);
  function changehandler(e) {
    setBookinfo({ ...bookinfo, [e.target.name]: e.target.value });
  }

  async function imagehandler(e) {
    const files = e.target.files;

    console.log(files);
    if (files.length >= 5 || img.length >= 5) {
      return;
    }
    try {
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (file.size > 4 * 1024 * 1024) {
          continue;
        }
        const reader = new FileReader();

        const promise = new Promise((resolve) => {
          reader.onload = (e) => {
            setImg((prevselectedimg) => [
              ...prevselectedimg,
              { url: e.target.result, file: file.name },
            ]);
            resolve();
          };
        });
        reader.readAsDataURL(file);
        promises.push(promise);
      }
      await Promise.all(promises);
    } catch (error) {
      console.error("Error reading images:", error);
    }
  }

  async function uploaddata(e) {
    e.preventDefault();
    setLoader(true);
    if (sessionData != null) {
      var userid = sessionData?.user?.id;
    }
    if (!userid) {
      return;
    }
    let obj = {
      bookinfo,
      img,
      userid,
    };
    const response = await axios
      .post("http://localhost:3000/api/bookUploadApi", obj)
      .then((result) => {
        console.log(result);
        setBookinfo(obj);
        setImg([]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("response", response);
    setLoader(false);
  }

  function del(index) {
    let images_for_delete = [...img];
    images_for_delete.splice(index, 1);
    setImg(images_for_delete);
  }
  return (
    <>
      <div className="main-page-layout flex flex-col justify-center items-center mx-auto mt-4 md:mt-10 md:gap-y-10 lg:gap-y-6">
        <div className="">
          {loader && <Loader />}
          <div className="text-2xl font-bold md:text-4xl">
            <h1>Upload Your Products</h1>
          </div>
          <div className="mx-14 mt-4 ">
            <form onSubmit={uploaddata}>
              <div className="">
                <label htmlFor="" className="text-lg font-semibold">
                  Title
                </label>
                <br />
                <input type="text" onChange={changehandler} name="title" />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Author Name
                </label>
                <br />
                <input type="text" onChange={changehandler} name="author" />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Price(Rs)
                </label>
                <br />
                <input type="number" onChange={changehandler} name="price" />
                <br />
                <label htmlFor="" className="text-lg font-semibold">
                  Description
                </label>
                <br />
                <input
                  type="text-area"
                  onChange={changehandler}
                  name="description"
                />
                <br />
                <div className="border-2 border-gray-500 py-2 px-1 rounded-md">
                  <label htmlFor="">Select Catogery</label>
                  <select onChange={changehandler} name="catogery" id="">
                    <option value="">Select</option>
                    <option value="Trending Products">Trending Products</option>
                    <option value="Best collections">Best collections</option>
                    <option value="Discounts Products">
                      Discounts Products
                    </option>
                  </select>
                </div>
                <label htmlFor="">Select Images</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={imagehandler}
                  multiple
                />
              </div>
              <button
                type="button"
                onClick={uploaddata}
                class="mt-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="image-main-show flex justify-between items-center">
            {img?.map((image, index) => {
              return (
                <>
                  <div className="image-show-box ">
                    <Image
                      src={image.url}
                      alt="Loading"
                      width={150}
                      height={100}
                    />
                    <button
                      className="image-del-btn"
                      onClick={() => del(index)}
                    >
                      delete
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
