import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import { BsChevronRight, BsImage } from "react-icons/bs";
import "./support.css";

function Support() {
  return (
    <div className="SupportPageWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Order</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>Support</h4>
      </div>
      <div className="HelpService">
        <div className="HelpServiceHeader">We are here to help you</div>
        <div className="HelpServicePara">
          Please enter the below details correctly so our team can resolve the
          issue
        </div>
        <div className="BlankSpace"></div>
        <div className="UploadProof">
          <div className="UploadProofHeader">Upload Proof</div>
          <div className="UploadProofType">
            <div className="Types">
              <div className="UploadIcon">
                <BsImage />
              </div>
              <div className="UploadWording">Upload Image</div>
            </div>
            <div className="Types">
              <div className="UploadIcon">
                <BsImage />
              </div>
              <div className="UploadWording">Upload Image</div>
            </div>
            <div className="Types">
              <div className="UploadIcon">
                <BsImage />
              </div>
              <div className="UploadWording">Upload Image</div>
            </div>
            <div className="Types">
              <div className="UploadIcon">
                <BsImage />
              </div>
              <div className="UploadWording">Upload Image</div>
            </div>
          </div>
        </div>
        <a href="/Profile/Order/Support/Submitted" className="SupReSubbtn">
          Submit
        </a>
      </div>
    </div>
  );
}

export default Support;
