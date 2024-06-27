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
  let result = await fetchProducts();
  console.log("result===>", result);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl md:text-5xl font-serif font-bold title-font text-gray-900">
            Our Products
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover our range of products and find the best deals!
          </p>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {result?.map((item) => {
              return (
                <Link href={`/productDetail/${item._id}`} key={item._id}>
                  <div className="bg-white py-3 border rounded-lg hover:drop-shadow-lg hover:border-zinc-300 transition-all duration-200">
                    <img
                      src={item.imgs_url[0].img_url}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <span className="text-sm"> {item.catogery}</span>
                      <h3 className="text-sm font-semibold text-zinc-800">
                        {item.description}
                      </h3>
                      <div className="mt-2">
                        <span className="text-red-600 text-lg font-bold">
                          RS. {item.price - (item.price / 100) * 30}
                        </span>
                        <br />
                        <span className="text-zinc-500 line-through">
                          RS. {item.price}
                        </span>
                        <span className="text-green-600 ml-2">-30%</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-zinc-600 ml-2">(1268)</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
