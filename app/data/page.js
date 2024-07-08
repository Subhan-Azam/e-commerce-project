import React from "react";
import axios from "axios";

const fetchBestCategory = async () => {
  try {
    let res = await axios.get("http://localhost:3000/api/catagory");
    let data = res.data.body;
    console.log("data", data);
    return data;

  } catch (error) {
    console.log("error in Category", error);
  }
};

export default async function categoriesSlider() {
    
  let resultOfCategory = await fetchBestCategory();
  console.log("result Of Category", resultOfCategory);

  return (
    <div class="card">
      {resultOfCategory?.map((item, index) => {
        return (
          <div key={index}>
            <p class="card__title">{item.title}</p>
            <p class="card__title">{item.price}</p>
          </div>
        );
      })}
    </div>
  );
} 