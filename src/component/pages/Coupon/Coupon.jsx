import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import { BsChevronRight } from "react-icons/bs";
import { CouponData } from "./CouponData";
import "./Coupon.css";

function Coupon() {
  return (
    <div className="OrderWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Account</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>My Coupon</h4>
      </div>
      <div className="Coupons">
        {CouponData.map((Item) => {
          return (
            <div className="Card">
              <div className="middleBox">
                <div className="CardLeft">
                  <div className="CardLeftWrapper">
                    <div className="CouponHeader">Coupon Code</div>
                    <div className="CouponDescription">{Item.Description}</div>
                    <div className="expDate">
                      <div className="expDateHeader">Expire Date</div>
                      <div className="expDateData">{Item.ExpireDate}</div>
                    </div>
                    <a href="/" className="ApplyNowbtnWrapper">
                      <div className="ApplyNowbtn">Apply Now</div>
                    </a>
                  </div>
                </div>
                <div className="CardRight">
                  <div className="CouponCuttOffData">
                    {Item.CutOffPercentage}
                  </div>
                  <div className="CouponCutOffWording">Off</div>
                </div>
                <div className="CouponCircle CouponLeft"></div>
                <div className="CouponCircle CouponRight"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Coupon;
