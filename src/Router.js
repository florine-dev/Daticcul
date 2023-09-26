import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Navbar from "./Compoment/Navbar/Navbar";
import AboutUs from "./Pages/About_Us/About_us";
import Daticash from "./Pages/DatiCash/Daticash";
import GroupAcount from "./Pages/GroupAcount/GroupAcount";
import Help from "./Pages/Help/Help";
import Home from "./Pages/Home/Home";
import IndividuelAcount from "./Pages/IndividuelAcount/IndividuelAcount";
import JoinUs from "./Pages/JoinUs/JoinUs";
import OurOffers from "./Pages/Ouroffers/OurOffers";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/Ouroffers" element={<OurOffers />} />
        <Route path="/DatiCash" element={<Daticash />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/GroupAcount" element={<GroupAcount />} />
        <Route path="/individuelAcount" element={<IndividuelAcount />} />
      </Route>
    </>
  )
);

export default Routes;
