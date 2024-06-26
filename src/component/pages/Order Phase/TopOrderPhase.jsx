import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const path = window.location.pathname;

function TopOrderPhase() {
  return (
    <div className="TopOrderWrapper">
      <div className="TopOrderPhase">
        <div className="TopOrderIconWrapper">
          <AiOutlineCheck
            className={
              path === "/BasicDetails"
                ? "ActiveTopOrderIcon TopOrderIcon"
                : "TopOrderIcon"
            }
          />
        </div>
        <div
          className={
            path === "/BasicDetails"
              ? "ActiveTopOrderWording TopOrderWording"
              : "TopOrderWording"
          }
        >
          Basic Details
        </div>
      </div>
      <div
        className={
          path === ("/Address" || "/Payment" || "/Phase4" || "/Phase5")
            ? "ActiveMiddleLine MiddleLine"
            : "MiddleLine"
        }
      ></div>
      <div className="TopOrderPhase">
        <div className="TopOrderIconWrapper">
          <AiOutlineCheck
            className={
              path === "/Address"
                ? "ActiveTopOrderIcon TopOrderIcon"
                : "TopOrderIcon"
            }
          />
        </div>
        <div
          className={
            path === "/Address"
              ? "ActiveTopOrderWording TopOrderWording"
              : "TopOrderWording"
          }
        >
          Address
        </div>
      </div>
      <div
        className={
          path === ("/Payment" || "/Phase4" || "/Phase5")
            ? "ActiveMiddleLine MiddleLine"
            : "MiddleLine"
        }
      ></div>
      <div className="TopOrderPhase">
        <div className="TopOrderIconWrapper">
          <AiOutlineCheck
            className={
              path === "/Payment"
                ? "ActiveTopOrderIcon TopOrderIcon"
                : "TopOrderIcon"
            }
          />
        </div>
        <div
          className={
            path === "/Payment"
              ? "ActiveTopOrderWording TopOrderWording"
              : "TopOrderWording"
          }
        >
          Payment
        </div>
      </div>
      <div
        className={
          path === ("/Phase4" || "/Phase5")
            ? "ActiveMiddleLine MiddleLine"
            : "MiddleLine"
        }
      ></div>
      <div className="TopOrderPhase">
        <div className="TopOrderIconWrapper">
          <AiOutlineCheck
            className={
              path === "/Phase4"
                ? "ActiveTopOrderIcon TopOrderIcon"
                : "TopOrderIcon"
            }
          />
        </div>
        <div
          className={
            path === "/Phase4"
              ? "ActiveTopOrderWording TopOrderWording"
              : "TopOrderWording"
          }
        >
          Confirm
        </div>
      </div>
      <div
        className={
          path === "/Phase5" ? "ActiveMiddleLine MiddleLine" : "MiddleLine"
        }
      ></div>
      <div className="TopOrderPhase">
        <div className="TopOrderIconWrapper">
          <AiOutlineCheck
            className={
              path === "/Phase5"
                ? "ActiveTopOrderIcon TopOrderIcon"
                : "TopOrderIcon"
            }
          />
        </div>
        <div
          className={
            path === "/Phase5"
              ? "ActiveTopOrderWording TopOrderWording"
              : "TopOrderWording"
          }
        >
          Done
        </div>
      </div>
    </div>
  );
}

export default TopOrderPhase;
