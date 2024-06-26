import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import { BsChevronRight } from "react-icons/bs";
import "./return.css";

function Return() {
  return (
    <div className="ReturnWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Order</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>Return</h4>
      </div>
      <div className="HelpService">
        <div className="HelpServiceHeader">We are here to help you</div>
        <div className="HelpServicePara">
          Please enter the below details correctly so our team can resolve the
          issue
        </div>
        <div className="BlankSpace"></div>
        <a href="#" className="OtherIssue">
          Other Issue
        </a>
        <div className="ReturnMessageWrapper">
          <div className="ReturnMessageHeader">Massage*</div>
          <input
            placeholder="Reason you want to return"
            className="ReturnMessageInput"
          ></input>
        </div>
        <a href="/Profile/Order/Return/Submitted" className="SupReSubbtn">
          Submit
        </a>
      </div>
    </div>
  );
}

export default Return;
