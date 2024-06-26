import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import "./top-bar.css";

export default function Topbar() {
  const [ShowSearch, SetShowSearch] = useState(0);

  return (
    <div className="top-bar">
      <div className="top">
        <div className="top-left">
          <div className="ellipse">
            <div className="ellipse1 ellipses"></div>
            <div className="ellipse2 ellipses"></div>
            <div className="ellipse3 ellipses"></div>
            <div className="ellipse4 ellipses"></div>
          </div>
          <a href="/" className="logoContainer">
            <img src="/images/New logo.png" className="logo" alt="logo" />
          </a>
          <div className="top-LeftText">
            <div className="top-LeftText1">eMAGZ</div>
            <div className="top-LeftText2">Connecting Univers</div>
          </div>
        </div>
        <div className="top-right">
          <input
            className={ShowSearch === 1 ? "Search-Bar" : "PassiveSearchBar"}
            onMouseLeave={() => {
              SetShowSearch(0);
            }}
            placeholder="Search"
          ></input>
          <div
            className="SearchIconWrapper"
            onClick={() => {
              SetShowSearch(1);
            }}
          >
            <IoSearchSharp className="Topicon" />
          </div>
          <a href="/Cart">
            <IoCartOutline className="Topicon" />
          </a>
          <a href="/Profile">
            <AiOutlineUser className="Topicon" />
          </a>
          <div className="divider"></div>
          <div className="top-RightText">
            Explore the powerfull eBussiness Solution.
            <a href="pasidh" className="DownloadAppLink">
              (Download App)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
