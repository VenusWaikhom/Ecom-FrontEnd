import React from "react";
import Home from "./component/pages/home/home";
import Category from "./component/pages/Category/category";
import Cart from "./component/pages/cart/Cart";
import Profile from "./component/pages/profile/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./component/pages/order/Order";
import Support from "./component/pages/support/Support";
import Return from "./component/pages/Return/Return";
import Submitted from "./component/pages/Submitted/Submitted";
import ProductPage from "./component/pages/productpage/ProductPage";
import OrderPhase2 from "./component/pages/Order Phase/OrderPhase2";
import OrderPhase3 from "./component/pages/Order Phase/OrderPhase3";
import OrderPhase1 from "./component/pages/Order Phase/OrderPhase1";
import Address from "./component/pages/Address details/Address";
import AddNewAddress from "./component/pages/Address details/Adding New Address";
import WishList from "./component/pages/Wish List/WishList";
import Rating from "./component/pages/Rating/Rating";
import Coupon from "./component/pages/Coupon/Coupon";
import LoginLogout from "./component/LoginLogout/LoginLogoout";
import { useUser } from "./context";

const MainRoutes = () => {
  // const { state, dispatch } = useUser();

  // useEffect(() => {
  //   if (state.userId) {
  //     try {
  //         fetch("http://localhost:3000/vendorusers/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify({
  //         email: EmailSignup,
  //         name: UserSignup,
  //         password: PasswordSignup,
  //       }),
  //       fetch("https://fakestoreapi.com/users/" + state.userId, { timeout: 5 })
  //         .then((res) => res.json())
  //         .then((json) => {
  //           if (json.status === "error") {
  //             return;
  //           }
  //           dispatch({ type: "loadUserData", data: json });
  //         });
  //     } catch (e) {
  //       dispatch({ type: "nonetwork" });
  //     }
  //   }
  // }, [state, dispatch]);

  const { state } = useUser();

  const validation = state?.token;
  console.log(validation);

  if (validation === "") {
    console.log("true");
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginLogout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else
    return (
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Category" element={<Category />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ProductPage" element={<ProductPage />} />
          <Route path="ProductPage/:id" element={<ProductPage />} />
          <Route path="BasicDetails" element={<OrderPhase1 />} />
          <Route path="Address" element={<OrderPhase2 />} />
          <Route path="Payment" element={<OrderPhase3 />} />
          <Route path="ManageAddress" element={<Address />} />
        </Route>

        <Route path="/ManageAddress">
          <Route path="AddAddress" element={<AddNewAddress />} />
        </Route>

        <Route path="/Profile">
          <Route path="Order" element={<Order />} />
          <Route path="My Rating & Reviews" element={<Rating />} />
          <Route path="WishList" element={<WishList />} />
          <Route path="MyCoupon" element={<Coupon />} />
        </Route>
        <Route path="/Profile/Order">
          <Route path="Support" element={<Support />} />
          <Route path="Return" element={<Return />} />
        </Route>
        <Route path="/Profile/Order/Return">
          <Route path="Submitted" element={<Submitted />} />
        </Route>
        <Route path="/Profile/Order/Support">
          <Route path="Submitted" element={<Submitted />} />
        </Route>
      </Routes>
    );
};

export default MainRoutes;
