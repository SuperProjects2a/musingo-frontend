import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import NavbarComp from "./components/Navbar/NavbarComp";
import NavSearch from "./components/Navbar/NavSearch";
import Home from "./components/Home";
import Test from "./components/Test";
import Search from "./components/Search";
import SignInUp from "./components/SignInUp";
import DisplayOffer from "./components/DisplayOfferComponents/DisplayOffer";
import EditOffer from "./components/EditOfferComponents/EditOffer";
import AddOffer from "./components/AddOfferComponents/AddOffer";
import AdminPanel from "./components/AdminPanelComponents/AdminPanel";
import ReportOffer from "./components/DisplayOfferComponents/ReportOffer";
import { FundAdd } from "./components/funds/FundAdd";
import UserProfile from "./components/UserProfile";
import FundSuccess from "./components/funds/FundSuccess";
import FundFailure from "./components/funds/FundFailure";
import Watch from "./components/Watch";
import Error404 from "./components/errors/Error404";
import Error403 from "./components/errors/Error403";
import { Outlet } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbarSearch />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/DisplayOffer/:id" element={<DisplayOffer />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Route>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Watch" element={<Watch />}></Route>
          <Route path="/SignInUp" element={<SignInUp />}></Route>
          <Route path="/AddOffer" element={<AddOffer />}></Route>
          <Route path="/EditOffer/:id" element={<EditOffer />}></Route>
          <Route path="/AdminPanel" element={<AdminPanel />}></Route>
          <Route path="/ReportOffer/:id" element={<ReportOffer />}></Route>
          <Route path="/Error404" element={<Error404 />}></Route>
          <Route path="/Error403" element={<Error403 />}></Route>
          <Route
            path="/FundAdd"
            element={<FundAdd></FundAdd>}
          ></Route>
          <Route path="/FundSuccess" element={<FundSuccess />}></Route>
          <Route path="/FundFailure" element={<FundFailure />}></Route>
          {/* UserProfile */}
          <Route
            path="/UserProfile/ProfileManagement"
            element={<UserProfile activeTabs="ProfileManagement" />}
          ></Route>
          <Route
            path="/UserProfile/Fundings"
            element={<UserProfile activeTabs="Fundings" />}
          ></Route>
          <Route
            path="/UserProfile/Offers"
            element={<UserProfile activeTabs="Offers" />}
          ></Route>
          <Route
            path="/UserProfile/AcuiredRatings"
            element={<UserProfile activeTabs="AcuiredRatings" />}
          ></Route>
          <Route
            path="/UserProfile/Messages"
            element={<UserProfile activeTabs="Messages" />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function LayoutsWithNavbar() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavbarComp />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
function LayoutsWithNavbarSearch() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavSearch />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
