import axios from "axios";

const fetchProducts = async () => {
  try {
    let res = await axios.get("http://localhost:3000/api/fetchProducts");
    let data = res.data.books;
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error in fetching products==>", error);
  }
};

export default async function FetchProducts() {
  const data = await fetchProducts();
  console.log("data", data);
  return (
    <div>
      {data?.map((item) => {
        return (
          <div>
            <img src={item.imgs_url[0].img_url} alt="" className="w-[500px]" />
          </div>
        );
      })}
    </div>
  );
}
