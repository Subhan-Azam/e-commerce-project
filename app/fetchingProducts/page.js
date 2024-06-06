import axios from "axios";

const fetchProducts = async () => {
  try {
    let res = await axios.get("http://localhost:3000/api/fetchProducts");
    let data = res.data.fetchData;
    console.log("data==>", data);
    return data;
  } catch (error) {
    console.log("error in fetching products==>", error);
  }
};

export default async function Page() {
  const data = await fetchProducts();
//   console.log("data2===>", data);
  return (
    <div>
      <h1>fetchProducts</h1>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.imgs_url[0].img_url} alt="" className="w-[500px]" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
