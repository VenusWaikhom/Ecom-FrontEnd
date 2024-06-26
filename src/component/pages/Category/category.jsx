import Topbar from "../../common/top-bar/top-bar";
import ImageSlider from "./imageSlider";
import Categories from "../../common/categories/categories";
import Filter from "./Filter";
// import CategoryTopProductData from "../../common/Products/CategoryData/categoryTopProductData";
import "./category.css";
// import AllProduct from "../../common/Products/ProductCollection";
// import RandomItem from "./random.jsx";
// import { CategoryHome } from "../../common/categories/category-maping/categoriesMapping-Home";
import ProductCollection from "../../common/Products/ProductCollection";
import { useEffect } from "react";
import { useState } from "react";

function Category() {
  const query = new URLSearchParams(window.location.search);
  const c = query.get("c");
  const [allProducts, setAllProducts] = useState([]);
  let data = c?.replace("%20", " ").replace("%27", "'");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + data)
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, [data]);

  return (
    <div>
      <Topbar />
      <ImageSlider />
      <Categories data={data?.sub_categories} />
      <div className="filter-topProduct">
        <Filter />
        <div className="categoryTopProduct">
          <ProductCollection title="Top Product" data={allProducts} />
        </div>
      </div>
      {/* <RandomItem /> */}
      {/* <AllProduct /> */}
    </div>
  );
}

export default Category;
