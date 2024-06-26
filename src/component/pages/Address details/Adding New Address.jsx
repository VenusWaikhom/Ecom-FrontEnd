import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Topbar from "../../common/top-bar/top-bar";

function AddNewAddress() {
  const [useas, Setuseas] = useState(0);

  function SetToDefault() {
    if (useas === 0) {
      Setuseas(1);
    } else {
      Setuseas(0);
    }
  }

  return (
    <div className="AddAddressWrapper">
      <Topbar />
      <div className="Header">
        <h4>My Account</h4>
        <h4>
          <BsChevronRight />
        </h4>
        <h4>Manage Address</h4>
      </div>
      <h1 className="AddNewAdressHeader">New Address</h1>
      <div className="AddAddressDetailsWrapper">
        <div className="AddAddress">
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">Name</div>
            <input className="AddNewAddressInput"></input>
          </div>
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">Phone Number</div>
            <input className="AddNewAddressInput"></input>
          </div>
          <div className="AddNewAddressInputItem AddNewAddressInputAddress">
            <div className="AddNewAddressWording">Address</div>
            <input className=" AddNewAddressNewAddress"></input>
          </div>
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">City</div>
            <input className="AddNewAddressInput"></input>
          </div>
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">Locality</div>
            <input className="AddNewAddressInput"></input>
          </div>
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">State</div>
            <input className="AddNewAddressInput"></input>
          </div>
          <div className="AddNewAddressInputItem">
            <div className="AddNewAddressWording">PinCode</div>
            <input className="AddNewAddressInput"></input>
          </div>
        </div>
      </div>
      <div
        className="AddAddressSetDefault"
        onClick={() => {
          SetToDefault();
        }}
      >
        <div className="AddAddresstTickWrapper">
          <AiOutlineCheck className={useas === 1 ? "Active" : "Passive"} />
        </div>
        <div className="AddNewAddressWording">Set as current address</div>
      </div>
      <div className="AddAdressLinkWrapper">
        <a
          href="/ManageAddress"
          onClick={() => {
            alert("The Address has added");
          }}
          className="AddAddressLink"
        >
          <div className="OderPhase1Next AddAddressBtn">Add Address</div>
        </a>
      </div>
    </div>
  );
}

export default AddNewAddress;
