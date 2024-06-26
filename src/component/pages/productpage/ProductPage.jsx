import React, { useEffect, useState } from "react";
import Topbar from "../../common/top-bar/top-bar";
import ProductCollection from "../../common/Products/ProductCollection";
//import { ProductPageData } from "./ProductPageData";
import { BsHeart, BsStar } from "react-icons/bs";
import { useParams, useNavigate } from "react-router";
import "./ProductPage.css";
import { CircularProgress, Dialog, DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import { useUser } from "../../../context";
// import HomeTopProductData from "../../common/Products/hometopproductData";

function ProductPage() {
  const [Ellipse, SetEllipse] = useState(1);
  // console.log(item);
  function changeEllipse(x) {
    SetEllipse(x);
  }
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(useParams(), "check");
  const [AllProductData, setAllProductData] = useState([]);
  const [loading, setLaoding] = useState(false);

  const [ProductData, setProductData] = useState([]);

  const [quant, Setquant] = useState();
  const [openPop, setOpenPop] = useState(false);

  useEffect(() => {
    setLaoding(true);
    fetch("http://localhost:3000/items/" + id)
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        setLaoding(false);
      });
    window.scrollTo(0, 0);
  }, [id]);

  console.log(ProductData, " Specific product data");

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((json) => setAllProductData(json));
  }, []);

  // console.log(AllProductData);

  const { state } = useUser();

  function Add() {
    // fetch("https://fakestoreapi.com/products/7", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     title: ProductData?.title,
    //     price: ProductData?.price,
    //     description: ProductData?.description,
    //     image: ProductData?.image,
    //     category: ProductData?.category,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    console.log("USER", state);
    if (!state?.userId) {
      return navigate("/Profile?return=/ProductPage/4");
    }
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: state?.userId,
        products: [{ productId: id, quantity: quant }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    setOpenPop(true);
    console.log(state?.userId);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ProductPageWrapper">
      <Dialog
        open={openPop}
        onClose={() => setOpenPop(false)}
        sx={{ justifyContent: "center" }}
      >
        <DialogTitle>HELLO</DialogTitle>
      </Dialog>
      <Topbar />
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
          <CircularProgress size={100} />
        </Box>
      ) : (
        <div>
          <div className="ProductInfo">
            <div className="ProductPageImageWrapper">
              <div className="ProductMainImage">
                <img
                  src={ProductData.image}
                  className="ProductImage"
                  alt="ProductImage"
                />
              </div>
              <div className="ProductMoreImages">
                <img
                  src={ProductData.image}
                  className="ProductMoreImage"
                  alt="ProductImage"
                />
                <img
                  src={ProductData.image}
                  className="ProductMoreImage"
                  alt="ProductImage"
                />
                <img
                  src={ProductData.image}
                  className="ProductMoreImage"
                  alt="ProductImage"
                />
                <img
                  src={ProductData.image}
                  className="ProductMoreImage"
                  alt="ProductImage"
                />
                <img
                  src={ProductData.image}
                  className="ProductMoreImage"
                  alt="ProductImage"
                />
              </div>
            </div>
            <div className="ProductDescription">
              <div className="ProductPageHead">
                <h3 className="ProductPageHeader">{ProductData.producename}</h3>
                <BsHeart className="ProductHeartIcon" />
              </div>
              <p className="ProductPageInfo">info</p>
              <p className="ProductPageInfo">{ProductData.description}</p>
              <p className="ProductPageInfo ProductPageFlex">
                <div>Seller</div>
                <a href="./" className="ProductPageInfoLink">
                  Alliance Departures
                </a>
                <div className="ProductPageInfoRating">
                  <BsStar />
                  {ProductData?.rating?.rate}
                </div>
              </p>

              <div className="ProductPageQtyPriceWrapper">
                <div className="ProductPageQty ProductPageInfo">
                  <div>Qty</div>
                  <div className="QtyEllipseWrapper">
                    <div
                      className={
                        Ellipse === 1
                          ? "QtyEllipse ProductPageInfo QtyEllipseactive"
                          : "QtyEllipse ProductPageInfo"
                      }
                      onClick={() => {
                        changeEllipse(1);
                        Setquant(1);
                      }}
                    >
                      01
                    </div>
                    <div
                      className={
                        Ellipse === 2
                          ? "QtyEllipse ProductPageInfo QtyEllipseactive"
                          : "QtyEllipse ProductPageInfo"
                      }
                      onClick={() => {
                        changeEllipse(2);
                        Setquant(2);
                      }}
                    >
                      02
                    </div>
                    <div
                      className={
                        Ellipse === 3
                          ? "QtyEllipse ProductPageInfo QtyEllipseactive"
                          : "QtyEllipse ProductPageInfo"
                      }
                      onClick={() => {
                        changeEllipse(3);
                        Setquant(3);
                      }}
                    >
                      03
                    </div>
                    <div
                      className={
                        Ellipse === 4
                          ? "QtyEllipse ProductPageInfo QtyEllipseactive"
                          : "QtyEllipse ProductPageInfo"
                      }
                      onClick={() => {
                        changeEllipse(4);
                        Setquant(4);
                      }}
                    >
                      04
                    </div>
                  </div>
                </div>
                <div className="ProductPagePriceWrapper ProductPageInfo">
                  <div> Price</div>
                  <div className="ProductPagePrice">${ProductData.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="OrderReturnSupportBtn ProductPageBtn">
            <div className="blank"></div>
            <div className="AddToCart" onClick={Add}>
              Add To Cart
            </div>
            <div
              className="ProductBuyNow"
              onClick={() => {
                console.log("User=", state);
                console.log("ProductData=", ProductData);
                fetch("http://localhost:3000/BuyNow", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + state?.token,
                  },

                  body: JSON.stringify({
                    user_id: state.userId,
                    productname: ProductData.producename,
                    product_id: ProductData._id,
                    Owner: ProductData.owner,
                    product_price: ProductData.price,
                    Status: "Pending",
                  }),
                })
                  .then((res) => res.json())
                  .then((json) => console.log(json));
              }}
            >
              {/* <a href="/BasicDetails" className="ProductBuyNow"> */}
              Buy Now
              {/* </a> */}
            </div>
          </div>
        </div>
      )}
      <ProductCollection title="People Also Like" data={AllProductData} />
    </div>
  );
}

export default ProductPage;
