import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import { BsChevronRight } from "react-icons/bs";
import "./submitted.css";

function Submitted() {
  return (
    <div className="SumittedWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Order</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>Submitted</h4>
      </div>
      <div className="SubmittedMain">
        <img
          src="/images/submitted/Submitted.png"
          alt="Sumitted"
          className="submitLogo"
        />
        <div className="WatingMessage">
          Our Team Will Be Contact You Shortly
        </div>
        <div className="CheckMail">
          Please Check Your Mail You May Have Recived A Ticket For Your Quries{" "}
        </div>
        <button onClick={() => window.history.go(-1)} className="SupReSubbtn">
          Back
        </button>
      </div>
    </div>
  );
}

export default Submitted;
