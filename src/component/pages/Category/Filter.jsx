import React from "react";
import { BsFilter } from "react-icons/bs";
import "./filter.css";
import { AiOutlinePlus } from "react-icons/ai";

function Filter() {
  return (
    <div className="filterWrapper">
      <div className="filterHeader">
        <div className="filterHead">Filter</div>
        <div className="filterIcon">
          <BsFilter />
        </div>
      </div>
      <div className="filterLine"></div>
      <ul className="filterList">
        <li className="filterListItem">
          <div className="filterListItemText">Price</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Latest</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Rating</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Brand</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Color</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Size</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
        <li className="filterListItem">
          <div className="filterListItemText">Other</div>
          <div className="filterPlus">
            <AiOutlinePlus />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
