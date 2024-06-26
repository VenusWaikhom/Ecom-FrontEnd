import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { DeliveryAddressData } from "./DeliveryAddressData";
import { VscHome } from "react-icons/vsc";
import { BsPencil } from "react-icons/bs";
import "./Address.css";
import Topbar from "../../common/top-bar/top-bar";

function Address() {
  if (DeliveryAddressData !== 0) {
    return (
      <div className="AddressWrapper">
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>Manage Address</h4>
        </div>
        <div className="AddressItem">
          {DeliveryAddressData.map((DeliveryAddressData) => {
            return (
              <div className="AddressDetailsWrapper">
                <div className="AddressDetails">
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
                <div className="EditRemoveAddress">
                  <a href="/" className="EditAddress">
                    <BsPencil className="AddressEditIcon" />
                    <div>Edit</div>
                  </a>
                  <a href="/" className="RemoveAddress">
                    Remove
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <a href="/ManageAddress/AddAddress" className="AddAddressLink">
          <div className="OderPhase1Next AddAddressBtn">+ Add New Address</div>
        </a>
      </div>
    );
  } else {
    return (
      <div className="AddressWrapper">
        <Topbar />
        <div className="Header">
          <h4>My Account</h4>
          <h4>
            <BsChevronRight />
          </h4>
          <h4>Manage Address</h4>
        </div>
        <a href="/ManageAddress/AddAddress" className="AddAddressLink">
          <div className="OderPhase1Next AddAddressBtn">+ Add New Address</div>
        </a>
      </div>
    );
  }
}

export default Address;
