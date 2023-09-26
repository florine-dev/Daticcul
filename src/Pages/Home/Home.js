import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Compoment/Navbar/Navbar";
import Yourbenefice from "../../Compoment/YourBenefice/Yourbenefice";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="contenuHome">
        <div className="contenuHome">
          <Navbar />
        </div>
        <div>
          {" "}
          <Outlet />{" "}
        </div>
        <div className="account">
          <div className="textOuroffers">
            <Link to={"/GroupAcount"} className="OuroffersLink">
              Group Acount
            </Link>
            <Link to={"/IndividuelAcount"} className="OuroffersLink1">
              Individuel Acount
            </Link>
          </div>
          <div className="textimg1home">
            <h1>WITH OUR FLEXIBILITY, YOU CAN BECOME ALL THAT YOU ASPIRE</h1>
            <span>
              Conscious of the fact that you have unique and ever-growing
              expectations,
            </span>{" "}
            <br />
            <span>
              our offers are adapted and adaptable to your aspirations.
            </span>
          </div>
        </div>
        <div className="curentAcount">
          <h4>Current Account</h4>
          <p>
            Whether you are an employee, self-employed, civil servant or a{" "}
            <br />
            business owner, you have the possibility to manage your money in a{" "}
            <br />
            simple, rapid and practical way with our current account. <br />
          </p>
        </div>
        <Yourbenefice />
      </div>
    </>
  );
};

export default Home;
