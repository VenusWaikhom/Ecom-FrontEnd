import React, { useState } from "react";
import TopOrderPhase from "./TopOrderPhase";

function OrderPhase3() {
  const [PaymentOption, SetPaymentOption] = useState();

  function Payment1() {
    SetPaymentOption(1);
  }

  function Payment2() {
    SetPaymentOption(2);
  }
  function Payment3() {
    SetPaymentOption(3);
  }
  function Payment4() {
    SetPaymentOption(4);
  }

  return (
    <div className="DetailsWrapper">
      <TopOrderPhase />
      <h4 className="DetailsHeader">Payment Method</h4>
      <div className="PaymentWrapper">
        <div className="PaymentMethodWrapper">
          <div className="InCoupan">
            <div className="Invoice">Invoice ( Free )</div>
            <a href="/Profile/MyCoupon" className="Coupan">
              Add Coupan
            </a>
          </div>
          <div className="CardDetails">
            <div className="CardDetailsHeader">Debit / Credit Card</div>
            <div className="CardDetailsInfo">
              <div className="CardNumberDetailsWrapper">
                <input
                  className="CardNumber"
                  placeholder="Card Number"
                  type={Number}
                ></input>
              </div>
              <div className="MCL">
                <div className="CardNumberDetailsWrapper">
                  <input
                    className="CardExpDate"
                    placeholder="MM/YY"
                    type={Date}
                  ></input>
                </div>
                <div className="CardNumberDetailsWrapper">
                  <input
                    className="CardCVV"
                    placeholder="CVV"
                    type={Number}
                  ></input>
                </div>
                <img src="images/Payment/MasterCardLogo.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="OtherOption">
            <div className="OtherOptionHeader">Other Payment Option</div>
            <div className="OtherPaymentOption">
              <div className="OtherPaymentWrapper" onClick={Payment1}>
                <div className="OtherPaymentOptionRadioWrapper">
                  <div
                    className={
                      PaymentOption === 1
                        ? "OtherPaymentOptionRadio AvtiveOtherPaymentOptionRadio"
                        : "OtherPaymentOptionRadio"
                    }
                  ></div>
                </div>
                <div className="OtherPayment">Phone Pay</div>
              </div>
              <div className="OtherPaymentWrapper" onClick={Payment2}>
                <div className="OtherPaymentOptionRadioWrapper">
                  <div
                    className={
                      PaymentOption === 2
                        ? "OtherPaymentOptionRadio AvtiveOtherPaymentOptionRadio"
                        : "OtherPaymentOptionRadio"
                    }
                  ></div>
                </div>
                <div className="OtherPayment">UPI</div>
              </div>
              <div className="OtherPaymentWrapper" onClick={Payment3}>
                <div className="OtherPaymentOptionRadioWrapper">
                  <div
                    className={
                      PaymentOption === 3
                        ? "OtherPaymentOptionRadio AvtiveOtherPaymentOptionRadio"
                        : "OtherPaymentOptionRadio"
                    }
                  ></div>
                </div>
                <div className="OtherPayment">Google Pay</div>
              </div>
              <div className="OtherPaymentWrapper" onClick={Payment4}>
                <div className="OtherPaymentOptionRadioWrapper">
                  <div
                    className={
                      PaymentOption === 4
                        ? "OtherPaymentOptionRadio AvtiveOtherPaymentOptionRadio"
                        : "OtherPaymentOptionRadio"
                    }
                  ></div>
                </div>
                <div className="OtherPayment">Bank Transfer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="PaymentNextWrapper">
          <div className="PaymentDeliveryWrapper">
            <div className="PaymentDelivery">Delivery</div>
            <div className="PayMentDeliveryPrice"></div>
          </div>
          <div className="PaymentTotalWrapper">
            <div className="PaymentTotal">Total</div>
            <div className="PaymentTotalPrice"></div>
          </div>
          <div className="PaymentNextBtn">Next</div>
        </div>
      </div>
    </div>
  );
}

export default OrderPhase3;
