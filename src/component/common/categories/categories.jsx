import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./categories.css";
// import { CategoryHome } from "./category-maping/categoriesMapping-Home";

const Categories = ({ data }) => {
  const [radioChech, setradioCheck] = useState(1);
  const [cData, setcData] = useState([]);
  const [loading, setLaoding] = useState(false);

  useEffect(() => {
    setLaoding(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setcData(json));
    setLaoding(false);
  }, []);

  function setto1(x) {
    setradioCheck(1);
    setIndex(x);
  }

  const setto0 = () => {
    setradioCheck(0);
    setIndex(null);
  };

  const [Index, setIndex] = useState(null);

  let listData = cData;

  return (
    <div className="categoryHeader-Wraper">
      <div className="category-heading">Categories</div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <div className="category-items">
          {listData.map((CategoryHome, index) => {
            return (
              <a
                href={`/category?c=${CategoryHome}`}
                onMouseOver={() => setto1(index)}
                onMouseLeave={() => setto0(index)}
                key={index}
              >
                <div className="category-item">
                  <div className="category-text">{CategoryHome}</div>
                  <div
                    key={Index}
                    className={index === Index ? "Active" : "Passive"}
                  >
                    <div
                      className={
                        radioChech === 1 ? "ActiveRadio" : "PassiveRadio"
                      }
                      id="category_Radio"
                    ></div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
