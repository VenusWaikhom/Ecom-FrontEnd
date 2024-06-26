import React, { useState } from "react";
import TopOrderPhase from "./TopOrderPhase";
import { DeliveryAddressData } from "../Address details/DeliveryAddressData";
import { VscHome } from "react-icons/vsc";

function OrderPhase2() {
  const [RadioDetails, SetRadioDetails] = useState(0);

  function Myfunction(index) {
    SetRadioDetails(index);
  }
  return (
    <div className="DetailsWrapper">
      <TopOrderPhase />
      <h4 className="DetailsHeader">Choose Your Delivery Address</h4>
      <div className="DetailsAddressAndNextBtn">
        <ul className="DetailsAddressWrapper">
          {DeliveryAddressData.map((DeliveryAddressData) => {
            return (
              <li
                className="DetalisDeliveryAddress"
                onClick={() => Myfunction(DeliveryAddressData.Index)}
              >
                <div>
                  <div className="DiliveryAddressRadioWrapper">
                    <div
                      className={
                        RadioDetails === DeliveryAddressData.Index
                          ? "ActiveDiliveryAddressRadio DiliveryAddressRadio"
                          : "DiliveryAddressRadio"
                      }
                    ></div>
                  </div>
                </div>
                <div>
                  <h3 className="DeliveryAddressPlace">
                    <div className="DeliveryAddressIcon">
                      <VscHome />
                    </div>
                    {DeliveryAddressData.Address}
                  </h3>
                  <div className="DeliveryAddressLocation">
                    {DeliveryAddressData.Paragrap}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="ButtonFlex">
          <a href="/Payment">
            <div className="OderPhase1Next">Next</div>
          </a>
          <a href="/ManageAddress">
            <div className="ManageAddress">Manage Address</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderPhase2;
