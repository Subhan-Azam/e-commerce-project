"use client";

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const page = () => {
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
      .post("/api/bookUploadApi", obj)
      .then((result) => {
        console.log(result);
        setBookinfo(obj);
        setImg([]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("response", response);
  }

  function del(index) {
    let images_for_delete = [...img];
    images_for_delete.splice(index, 1);
    setImg(images_for_delete);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto mt-4 md:mt-10 md:gap-y-10 lg:gap-y-6">
        <div className="container max-w-2xl px-4 py-8">
          {/* {loader && <Loader />} */}
          <div className="text-2xl font-bold md:text-4xl mb-6">
            <h1>Upload Your Products</h1>
          </div>
          <div className="flex items-center justify-center flex-col">
            <form onSubmit={uploaddata} className="w-full space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={changehandler}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="author"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  onChange={changehandler}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Price (Rs)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={changehandler}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={changehandler}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                ></textarea>
              </div>

              <div 
              // className="border-2 border-gray-300 dark:border-gray-600 py-2 px-4 rounded-md"
              >
                <label
                  htmlFor="category"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Select Category
                </label>
                <select
                  id="category"
                  name="catogery"
                  onChange={changehandler}
                  className="cursor-pointer mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                >
                  <option value="">Select</option>
                  <option value="Trending Products">Trending Products</option>
                  <option value="Best collections">Best collections</option>
                  <option value="Discounts Products">Discounts Products</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="images"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Select Images
                </label>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  onChange={imagehandler}
                  multiple
                  className="cursor-pointer mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>

              <button
                type="submit"
                className="mt-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="image-main-show flex flex-wrap gap-4 mt-6">
            {img?.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image.url}
                  alt="Loading"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  onClick={() => del(index)}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
