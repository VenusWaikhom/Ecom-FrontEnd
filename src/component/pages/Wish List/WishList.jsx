import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { WishListData } from "./WishlistData";
import "./WishList.css";
import Topbar from "../../common/top-bar/top-bar";

function WishList() {
  if (WishListData.length === 0) {
    return (
      <div
        className="WishListWrapper"
        style={{ backgroundImage: `url(" /images/New Logo.png")` }}
      >
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>Wish List</h4>
        </div>
        <div className="EmptyWislListItem">
          <img
            src="/images/Wishlist/EmptyWishList.png"
            alt="Logo"
            className="emptyWishlistLogo"
          />
          <div className="SaveYourWishList">
            <h2 className="SaveYourWishListHeader">Save Your Favorite Here</h2>
            <div className="SaveYourWishListPara">
              When You Something You Should Buy It
            </div>
          </div>
          <a href="/" className="WishListAdd">
            <div className="WishListBtn">Let's Save Some</div>
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="WishListWrapper"
        style={{ backgroundImage: `url(" /images/New Logo.png")` }}
      >
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>Wish List</h4>
        </div>
        <div className="WishListItemsWrapper ">
          {WishListData.map((WishListData) => {
            return (
              <div className="WishListItems">
                <img
                  src={WishListData.Image}
                  className="cardimages"
                  alt={WishListData.Product}
                />
                <div className="CardDescription">{WishListData.Product}</div>
                <div className="CardPrice">{WishListData.Price}</div>
              </div>
            );
          })}
        </div>
        <div className="WishListBtnWrapper">
          <a
            href="/Profile/Order"
            className="WishListManageOrderBtn WishListBtn"
          >
            Manage Order
          </a>
          <a href="/BasicDetails" className="WishListOrderNowBtn WishListBtn">
            Order Now
          </a>
        </div>
      </div>
    );
  }
}

export default WishList;
