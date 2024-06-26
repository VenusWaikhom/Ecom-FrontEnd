import React from "react";
import Topbar from "../../common/top-bar/top-bar";
import {
  BsPencil,
  BsBoxSeam,
  BsCreditCard2Front,
  BsHeart,
  BsStar,
} from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiCoupon2Line } from "react-icons/ri";
// import { ProfileData } from "./profileData";
import "./profile.css";
import { useUser } from "../../../context";
import { Box, CircularProgress, Typography } from "@mui/material";
import LoginLogout from "../../LoginLogout/LoginLogoout";

function Profile() {
  const { state, dispatch } = useUser();

  if (state.error) {
    return (
      <Box>
        <Typography variant="h4">{state.error}</Typography>
      </Box>
    );
  }
  if (state.userId && !state.userData) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if (state.userId && state.userData) {
    return (
      <div className="ProfileWrapper">
        <Topbar />
        <div className="FlexWrapper">
          <div className="ProfileDetails">
            <div className="ProfileRight">
              <div className="ProfileInfoHeader">My Account</div>
              <img src={""} className="ProfilePicture" alt="profilepicture" />
              <div className="EditOption">
                <BsPencil className="EditIcon" />
                <div className="Edit">Edit</div>
              </div>
            </div>
            <div className="ProfileItems">
              <div className="ProfileList">
                <div className="ProfileIndex">Name</div>
                <div className="ProfileInfo">
                  {state?.userData?.name?.firstname}
                </div>
              </div>
              <div className="ProfileList">
                <div className="ProfileIndex">Gender</div>
                <div className="GnederOption">
                  <div className="Gender">
                    <div className="Radio">
                      <div
                        className={1 === `Male` ? "ActiveGenderRadio " : ""}
                      ></div>
                    </div>
                    <div className="GenderType">Male</div>
                  </div>
                  <div className="Gender">
                    <div className="Radio">
                      <div
                        className={1 === `Female` ? "ActiveGenderRadio " : ""}
                      ></div>
                    </div>
                    <div className="GenderType">Female</div>
                  </div>
                  <div className="Gender">
                    <div className="Radio">
                      <div
                        className={
                          1 === `NotPreferToSay` ? "ActiveGenderRadio " : ""
                        }
                      ></div>
                    </div>
                    <div className="GenderType">Not Prefer To Say</div>
                  </div>
                </div>
              </div>
              <div className="ProfileList">
                <div className="ProfileIndex">Phone Number</div>
                <div className="ProfileInfo">{state?.userData?.phone}</div>
              </div>
              <div className="ProfileList ">
                <div className="ProfileIndex">E-mail</div>
                <div className="ProfileInfo Email">
                  {state?.userData?.email}
                </div>
              </div>
            </div>
          </div>

          <div className="LinkItemWrapper">
            <div className="ProfileLinkList">
              <a
                href="/Profile/Order"
                className="ProfileLinkItem ProfileLinkMyOrder"
              >
                <BsBoxSeam className="ProfileLinkIcon" />
                My Order
              </a>
              <a
                href="ManageAddress"
                className="ProfileLinkItem ProfileLinkAddress"
              >
                <HiOutlineLocationMarker className="ProfileLinkIcon" />
                Manage Address
              </a>
              <a href="/Payment" className="ProfileLinkItem ProfileLinkPayment">
                <BsCreditCard2Front className="ProfileLinkIcon" />
                Payment
              </a>
              <a
                href="/Profile/WishList"
                className="ProfileLinkItem ProfileLinkWishlist"
              >
                <BsHeart className="ProfileLinkIcon" />
                Wishlist
              </a>
              <a
                href="/Profile/MyCoupon"
                className="ProfileLinkItem ProfileLinkCoupans"
              >
                <RiCoupon2Line className="ProfileLinkIcon" />
                My Coupans
              </a>
              <a
                href="/Profile/My rating & reviews"
                className="ProfileLinkItem ProfileLinkRating"
              >
                <BsStar className="ProfileLinkIcon" />
                My Reviews & Rating
              </a>
            </div>
          </div>
          <button
            className="ProfileLinkItem ProfileLinkLogOut"
            onClick={() => {
              dispatch({ type: "logout" });
              localStorage.removeItem("userId");
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    );
  } else return <LoginLogout />;
}

export default Profile;
