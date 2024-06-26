import React from "react";
import RandomData from "./RandomData";
import "../../common/Products/Product.css";

function RandomItem() {
  return (
    <div className="ItemAligment">
      <div className="ItemsWrapper">
        {RandomData.map((RandomData, index) => {
          return (
            <a href="/ProductPage">
              <div
                className={
                  RandomData.ads === "ads" ? " Randomads" : "ProductCard"
                }
              >
                <div
                  className={RandomData.ads === "ads" ? "image" : "cardimages"}
                  key={RandomData.ads}
                  style={{ backgroundImage: `url(${RandomData.image})` }}
                ></div>
                <div className="CardDescription">{RandomData.description}</div>
                <div className="CardPrice">{RandomData.price}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default RandomItem;
