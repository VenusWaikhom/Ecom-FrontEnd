import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useUser } from "../../../context";

const CartItem = ({ data, updateQuantity }) => {
  const [CartData, setCartData] = useState(null);
  const [Quanlity, SetQuanlity] = useState(0);
  const { state } = useUser();

  useEffect(() => {
    SetQuanlity(data?.quantity || 0);
  }, [data?.quantity]);

  useEffect(() => {
    if (CartData) {
      updateQuantity({ price: Quanlity * CartData?.price });
    }
  }, [Quanlity, CartData]);

  function Increase() {
    SetQuanlity(Quanlity + 1);
  }

  function Decrease() {
    if (Quanlity !== 1) {
      SetQuanlity(Quanlity - 1);
    }
  }

  useEffect(() => {
    if (!data.productId) {
      return;
    }
    fetch("https://fakestoreapi.com/products/" + data?.productId)
      .then((res) => res.json())
      .then((json) => setCartData(json));
  }, [data?.productId]);

  function Delete() {
    fetch("https://fakestoreapi.com/carts/" + CartData?.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log("Deleted Id", CartData?.id);
  }

  return (
    <div className="CartItem">
      <div className="cartImgProduct">
        <img src={CartData?.image} alt="Your Cart Item" className="CartImage" />

        <div>
          <div className="CartProductName">{CartData?.ProductName}</div>
          <div className="CartDeiveryDate">{CartData?.DeliverData}</div>
        </div>
      </div>
      <div className="qtyWrapper">
        <div className="Qty">
          <div className="IncDec" onClick={() => Decrease(CartData.id)}>
            <AiOutlineMinus />
          </div>
          <div className="Quanlity">{Quanlity}</div>
          <div className="IncDec" onClick={() => Increase(CartData.id)}>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <div className="CartPriceMore">
        <div className="CartItemPrice" SetTotalPrice>
          ₹ {CartData?.price * Quanlity}
        </div>
        <div
          className="Delete"
          onClick={() => {
            fetch("https://fakestoreapi.com/carts/" + state?.userId, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((json) => console.log(json));
          }}
        >
          <AiOutlineClose onClick={Delete} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
