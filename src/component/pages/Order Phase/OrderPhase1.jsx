import React from "react";
import TopOrderPhase from "./TopOrderPhase";
import "./OrderPhase.css";

function OrderPhase1() {
  return (
    <div className="DetailsWrapper">
      <TopOrderPhase />
      <h4 className="DetailsHeader">Basic Details</h4>
      <div className="BasicDetailInput">
        <div className="BasicDetailsWrapper">
          <div className="BasicDetailsHeader">Name</div>
          <input type={CharacterData} className="BasicDetailsInput"></input>
        </div>
        <div className="BasicDetailsWrapper">
          <div className="BasicDetailsHeader">Phone Number</div>
          <input type={Number} className="BasicDetailsInput"></input>
        </div>
        <div className="BasicDetailsWrapper">
          <div className="BasicDetailsHeader">E-Mail</div>
          <input type={String} className="BasicDetailsInput"></input>
        </div>
      </div>
      <div className="OderPhase1NextWrapper">
        <a href="./Address">
          <div className="OderPhase1Next">Next</div>
        </a>
      </div>
    </div>
  );
}

export default OrderPhase1;
