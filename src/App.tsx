import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
import ErrorNotFound from "./components/errors/ErrorNotFound";
import navigationService from "./services/NavigationService";
import { Outlet } from "react-router";

function App() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // // Scroll to top if path changes
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  // useEffect(() => {
  //   navigationService.navigation = navigate;
  // }, []);
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <NavbarComp />
    //     <Footer />
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<NavSearch />}>
            <Route path="/" element={<Home />}></Route>
          </Route> */}
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/SignInUp" element={<SignInUp />}></Route>
        <Route path="/UserProfile" element={<UserProfile />}></Route>
        <Route path="/AddOffer" element={<AddOffer />}></Route>
        <Route path="/DisplayOffer" element={<DisplayOffer />}></Route>
        <Route path="/EditOffer" element={<EditOffer />}></Route>
        <Route
          path="/FundAdd"
          element={<FundAdd onFundAdd={FundAdd}></FundAdd>}
        ></Route>
        <Route path="/FundSuccess" element={<FundSuccess />}></Route>
        <Route path="/FundFailure" element={<FundFailure />}></Route>
        <Route path="/Watch" element={<Watch />}></Route>
        <Route path="/AdminPanel" element={<AdminPanel />}></Route>
        <Route path="/ReportOffer" element={<ReportOffer />}></Route>
        <Route path="/Error404" element={<Error404 />}></Route>
        <Route path="/Error403" element={<Error403 />}></Route>
        <Route path="/ErrorNotFound" element={<ErrorNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function LayoutsWithNavbar() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Your navbar component */}
      <NavbarComp />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet />

      {/* You can add a footer to get fancy in here :) */}
    </div>
  );
}
export default App;

// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/Footer";
// import { BrowserRouter } from "react-router-dom";
// import NavbarComp from "./components/NavbarComp";
// import React, {
//   useCallback,
//   useState,
//   useEffect,
//   useLayoutEffect,
// } from "react";
// import {
//   Route,
//   Link,
//   Routes,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// import Home from "./components/Home";
// import Test from "./components/Test";
// import Search from "./components/Search";
// import SignInUp from "./components/SignInUp";
// import DisplayOffer from "./components/DisplayOfferComponents/DisplayOffer";
// import EditOffer from "./components/EditOfferComponents/EditOffer";
// import AddOffer from "./components/AddOfferComponents/AddOffer";
// import AdminPanel from "./components/AdminPanelComponents/AdminPanel";
// import ReportOffer from "./components/DisplayOfferComponents/ReportOffer";
// import { FundAdd } from "./components/funds/FundAdd";
// import UserProfile from "./components/UserProfile";
// import FundSuccess from "./components/funds/FundSuccess";
// import FundFailure from "./components/funds/FundFailure";
// import Watch from "./components/Watch";
// import Error404 from "./components/errors/Error404";
// import Error403 from "./components/errors/Error403";
// import ErrorNotFound from "./components/errors/ErrorNotFound";
// import navigationService from "./services/NavigationService";
// import { Outlet } from "react-router";

// function App() {
//   // const navigate = useNavigate();
//   // const location = useLocation();
//   // // Scroll to top if path changes
//   // useLayoutEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, [location.pathname]);
//   // useEffect(() => {
//   //   navigationService.navigation = navigate;
//   // }, []);
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <NavbarComp />
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
