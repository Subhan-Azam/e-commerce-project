// // import axios from "axios";

// // const fetchProducts = async () => {
// //   try {
// //     let res = await axios.get("http://localhost:3000/api/fetchProducts");
// //     console.log("res===>", res);
// //     let data = res.data.fetchData;
// //     console.log("data==>", data);
// //     return data;
// //   } catch (error) {
// //     console.log("error in fetching products==>", error);
// //   }
// // };

// // export default async function Page() {
// // const data = await fetchProducts();
// // console.log("data2===>", data);
// //   return (
// //     <div className="container mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-4">Fetch Products</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {data?.map((item, index) => {
// //           return (
// //             <div key={index} className="border rounded-lg p-4 shadow-md">
// //               <img src={item.imgs_url[0].img_url} alt="" className="w-full h-48 object-cover mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
// //               <p className="text-gray-700">{item.description}</p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// import axios from "axios";
// import Link from "next/link";

// const fetchProducts = async () => {
//   try {
//     let res = await axios.get("http://localhost:3000/api/fetchProducts");
//     console.log("res===>", res);
//     let data = res.data.fetchData;
//     console.log("data==>", data);
//     return data;
//   } catch (error) {
//     console.log("error in fetching products==>", error);
//   }
// };

// export default async function FetchProducts() {
//   const data = await fetchProducts();
//   console.log("data2===>", data);
//   return (
//     <section class="text-gray-600 body-font">
//       <div class="container px-5 py-24 mx-auto">
//         <div class="flex flex-wrap -m-4">
//           {data?.map((item, index) => {
//             return (
//               <div key={index} class="p-4 md:w-1/3">
//                 <Link Link href="#" key={index} class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                   <img
//                     class="lg:h-48 md:h-36 w-full object-cover object-center"
//                     src={item.imgs_url[0].img_url}
//                     alt="blog"
//                   />
//                   <div class="p-6">
//                     <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                       CATEGORY
//                     </h2>
//                     <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
//                       {item.title}
//                     </h1>
//                     <p class="leading-relaxed mb-3">{item.description}</p>
//                     <div class="flex items-center flex-wrap ">
//                       <button class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//                         Learn More
//                         <svg
//                           class="w-4 h-4 ml-2"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           stroke-width="2"
//                           fill="none"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         >
//                           <path d="M5 12h14"></path>
//                           <path d="M12 5l7 7-7 7"></path>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import axios from "axios";
import Link from "next/link";

const fetchProducts = async () => {
  try {
    let res = await axios.get("http://localhost:3000/api/fetchProducts");
    console.log("res===>", res);
    let data = res.data.fetchData;
    console.log("data==>", data);
    return data;
  } catch (error) {
    console.log("error in fetching products==>", error);
  }
};

export default async function FetchProducts() {
  const data = await fetchProducts();
  console.log("data2===>", data);
  return (
    <section className="text-gray-600 body-font bg-gray-100 dark:bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-white mb-4">
            Our Products
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 dark:text-gray-400">
            Discover our range of products and find the best deals!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.map((item) => {
            return (
              <div className="mx-auto sm:mx-0 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="w-[300px] sm:w-[290px] reverse h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-600">
                  <Link href={`/productDetail/${item.id}`} key={item.id}>
                    <img
                      className="py-2 lg:h-48 md:h-36 w-full object-cover object-center"
                      src={item.imgs_url[0].img_url}
                      alt={item.title}
                    />
                    <hr className="text-gray-600 opacity-15" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}