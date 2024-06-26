import React, { useState, useEffect } from "react";
import "./Cart.css";
import { CartData } from "./cartData";

import Topbar from "../../common/top-bar/top-bar";
import CartItem from "./CartItem";
import { useUser } from "../../../context";

function Cart() {
  const [Price, SetPrice] = useState(0);

  const [itemsPriceList, setItemPriceList] = useState({});

  const [TotalPrice, SetTotalPrice] = useState(0);

  const [cartItem, SetcartItem] = useState(null);

  const { state } = useUser();

  useEffect(() => {
    if (state?.userId) {
      fetch("https://fakestoreapi.com/carts/" + state?.userId)
        .then((res) => res.json())
        .then((json) => SetcartItem(json));
    }
  }, [state]);

  console.log("Cart Item", cartItem);

  useEffect(() => {
    let newPrice = 0;
    let NewTotalPrice = 0;

    console.log(itemsPriceList);

    newPrice = Object.values(itemsPriceList).reduce((a, s) => {
      return a + s;
    }, 0);

    let NewDeliveryCharge = CartData?.delevery || 0;
    let NewDiscount = CartData?.discount || 0;
    NewTotalPrice = newPrice - NewDeliveryCharge - NewDiscount;

    SetPrice(newPrice);
    SetTotalPrice(NewTotalPrice);
  }, [itemsPriceList]);

  // function Increase(id) {
  //   SetQuanlity({ ...Quanlity, [id]: Quanlity[id] + 1 });
  // }

  // function Decrease(id) {
  //   if (Quanlity !== 1) {
  //     SetQuanlity({ ...Quanlity, [id]: Quanlity[id] - 1 });
  //   }
  // }

  // function Delete() {}

  if (!cartItem || cartItem?.products?.length === 0) {
    return (
      <div className="CartWrapper">
        <Topbar />
        <h3 className="CartHeader">Your Bag</h3>
        <div className="EmptyCartWrapper">
          <img
            src="/images/cart/cartIcon.png"
            className="CaerIcon"
            alt="carticon"
          ></img>
          <div className="FillRequest">Please Fill Me</div>
          <div className="NotYet">
            It looks like your have not shop anything yet
          </div>
          <a href="/" className="ContinueLink">
            Continue Shoping
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="FillCartWrapper">
        <Topbar />
        <h3 className="CartHeader">Your Bag</h3>
        <div className="CartItemWrapper">
          {cartItem?.products?.map((CartData, index) => {
            return (
              <CartItem
                data={CartData}
                key={index}
                updateQuantity={(p) => {
                  setItemPriceList({
                    ...itemsPriceList,
                    [CartData.productId]: p.price,
                  });
                }}
              />
            );
          })}
        </div>
        <div className="TotalCalWrapper">
          <h4 className="CartItemHeader">Price Detail</h4>
          <div className="CartItemDetailsWrapper">
            <div>
              <div className="CartItemPriceDetails">
                <div className="TotalCalDetails">
                  <div className="CartItemPriceWording">Price</div>
                  <div className="CartItemTotalPrice">₹ {Price}</div>
                </div>
                <div className="TotalCalDetails">
                  <div className="CartItemDiscountWording">Discount</div>
                  <div className="CartItemTotalDiscount">
                    ₹{CartData?.discount || 0}
                  </div>
                </div>
                <div className="TotalCalDetails">
                  <div className="CartItemDeliveryChargeWording">Delivery</div>
                  <div className="CartItemDeliveryChargeTotalPrice">
                    ₹{CartData?.delevery || 0}
                  </div>
                </div>
                <div className="TotalCalDetails TotalPrice">
                  <div className="CartItemDeliveryChargeWording">
                    Total Price
                  </div>
                  <div className="CartItemDeliveryChargeTotalPrice">
                    ₹{TotalPrice}
                  </div>
                </div>
              </div>
            </div>
            <div className="OrderSaveContinueWrapper">
              <a href="/BasicDetails">
                <div className="OrderNow ">Order Now</div>
              </a>
              <div
                className="SaveforLater "
                onClick={() => window.history.go(-1)}
              >
                Save For Later
              </div>
              <a href="/" className="CartContShopingLink">
                <div className="ContinueShoping">
                  <img src="/images/cart/Arrow 1.png" alt="arrow" />{" "}
                  ContinueShoping
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
