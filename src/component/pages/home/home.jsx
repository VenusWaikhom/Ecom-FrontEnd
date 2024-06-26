import React, { useState } from "react";
import Topbar from "../../common/top-bar/top-bar";
import Categories from "../../common/categories/categories";
import ImageSlider from "./ImageSlider";
import NewArrival from "../../common/new arrival/newarrival";
import ProductCollection from "../../common/Products/ProductCollection";
import "./home.css";
import ProductCarousel from "../../common/Product Carosel/ProductCarousel";
// import FashionData from "../../common/Products/HomeData/Fashiondata";
// import HomeTopProductData from "../../common/Products/hometopproductData";
import { HomeNewArrivalData } from "../../common/new arrival/homenewarrivaldata";
import { useEffect } from "react";

function Home() {
  const [AllProductData, setAllProductData] = useState([]);
  const [TopProduct, setTopProduct] = useState([]);

  // useEffect(() => {
  //   console.log("YES");
  //   fetch("http://localhost:3000/users/login", {
  //     method: "POST",
  //     body: JSON.stringify({ email: "new@gmail.com", password: "1234567" }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log("LOGIN SUCCESS", json));
  // }, []);
  console.log(AllProductData);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((json) => setTopProduct(json));
  }, []);
  console.log(TopProduct);

  return (
    <div>
      <Topbar />
      <ImageSlider />
      <Categories />
      <NewArrival title="New Arrival" data={HomeNewArrivalData} />
      <ProductCollection title="All Product" data={AllProductData} />
      <ProductCarousel />
      <div className="HomeTopProduct">
        <ProductCollection title="Top Products" data={TopProduct} />
      </div>
    </div>
  );
}

export default Home;
