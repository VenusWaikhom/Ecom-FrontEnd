import React, { useEffect, useState } from "react";
// import { OrderData } from "./OrderData";
import { BsChevronRight } from "react-icons/bs";
import Topbar from "../../common/top-bar/top-bar";
import "./Order.css";
import RatingStar from "../../common/Rating Star/RatingStar";
import { useUser } from "../../../context";

function Order() {
  const { state } = useUser();
  console.log(state);
  const [OrderData, setOrderData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/User_order/" + state.userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + state.token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("orderItem ", json);
        setOrderData(json);
      });
  }, []);

  console.log(OrderData, "  OrderData");

  if (OrderData && OrderData.length === 0) {
    return (
      <div className="OrderWrapper">
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>My Order</h4>
        </div>
        <div className="EmptyOrderMain">
          <img src="/images/order/EmptyOrder.png" alt="EmptyOrderIcon" />
          <div className="NothingToShow">Nothing To Be Shown</div>
          <div className="GetSomeOrder">
            Let’s get some order for you so you can check me later
          </div>
          <a href="/" className="ShopMore">
            Shop More
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="OrderWrapper">
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>My Order</h4>
        </div>
        <div className="OrderDetails">
          {OrderData &&
            OrderData.map((item, i) => {
              return (
                <div className="OrderDetail" key={i}>
                  <img
                    src={item.Image}
                    alt="OrderImage"
                    className="OrderImage"
                  />
                  <div className="OrderInfo">
                    <div className="OrderName">{item.Product}</div>
                    <div className="OrderQuantity">Qty {item.Quantity}</div>
                    <div className="OrderDeliverDate">
                      Delever On {item.Date}
                    </div>

                    <div className="OrderRating">
                      <RatingStar value={item.Rating} />
                      <div className="RateNow">Rate Now</div>
                    </div>
                  </div>
                  <div className="OrderReturnSupportBtn">
                    <a href="/Profile/Order/Return" className="OrderReturn">
                      Return
                    </a>
                    <a href="/Profile/Order/Support" className="OrderSupport">
                      Support
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="OrderMore">
          <h2 className="AddMore">Add more to your order</h2>
          <a href="/" className="ShopMore">
            Shop More
          </a>
        </div>
      </div>
    );
  }
}

export default Order;
