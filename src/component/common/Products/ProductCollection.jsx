import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
// import { Box, CircularProgress } from "@mui/material";
// import { useEffect } from "react";

function ProductCollection({ title, data = [] }) {
  const navigate = useNavigate();
  // const [loading, setLaoding] = useState(false);
  console.log("data", data);

  // useEffect(() => {
  //   setLaoding(true);
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  //   setLaoding(false);
  // }, []);

  if (data.length === 0) {
    return;
  }
  return (
    <div className="ProductWrapper">
      <div className="ProductHead">
        <div className="ProductHeader">{title}</div>
        <div className="ViewMore">View More</div>
      </div>
      {/* {loading ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </Box>
      ) : ( */}
      <div className="ItemAligment">
        <div className="ItemsWrapper ">
          {data.map((data, index) => {
            return (
              <button
                key={index}
                onClick={() => navigate(`/ProductPage/${data._id}`)}
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
                className={data.ads === "ads" ? " Ads" : "ProductCard"}
              >
                <img
                  src={data.image}
                  className={data.ads === "ads" ? "image" : "cardimages"}
                  alt={data.ads}
                />
                <div className="CardDescription">{data.title} </div>
                <div className="CardPrice">${data.price}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCollection;
