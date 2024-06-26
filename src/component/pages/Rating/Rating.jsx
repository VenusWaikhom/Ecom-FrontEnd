import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import { OrderData } from "../order/OrderData";
import { BsChevronRight } from "react-icons/bs";
import RatingStar from "../../common/Rating Star/RatingStar";
import "./RatingStyle.css";

function Rating() {
  return (
    <div className="RatingWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Account</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>My rating & reviews</h4>
      </div>
      <div className="WishListItemWrapper">
        {OrderData.map((OrderData, index) => {
          return (
            <div className="WishListItem" key={index}>
              <div className="ImgIngfoStar">
                <img
                  src={OrderData.Image}
                  alt="WishListImage"
                  className="WishListImg"
                />
                <div className="WishlistStar">
                  <div className="WishListInfo">
                    <div className="WishListProductName">
                      {OrderData.Product}
                    </div>
                    <div className="WishListQuantity">
                      Qty {OrderData.Quantity}
                    </div>
                    <div className="WishListDeliverDate">
                      Delever On {OrderData.Date}
                    </div>
                  </div>
                  <div className="WishListRating">
                    <div className="RateNow">Rate Now</div>
                    <RatingStar value={OrderData.Rating} />
                  </div>
                </div>
              </div>
              <div className="WriteReview">
                <div className="WriteReviewHeading">Write Your Review</div>
                <input className="WriteReviewInput"></input>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
