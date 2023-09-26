import React from "react";
import iconpersonn from "../../images/person.png";
import daticcul from "../../images/daticcul_navbar.png";
import flecheN from "../../images/color-down-arrow.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className="contenuNavbar displayFlex">
        <div className="navbargauche displayFlex">
          <img src={iconpersonn} alt="person" className="imgN" />
          <img src={daticcul} alt="person" className="img1N" />
        </div>
        <div className="navbarDroit displayFlex ">
          <div className="linkNavbar displayFlex">
            <Link to={"/AboutUs"} className="lienNav">
              About Us
            </Link>
            <Link to={"/OurOffers"} className="lienNav ouroffer">
              Our offers <FontAwesomeIcon icon={faChevronDown} color="green" />
            </Link>
            <Link to={"/DatiCash"} className="lienNav">
              DatiCash
            </Link>
            <Link to={"/JoinUs"} className="lienNav">
              Join Us
            </Link>
            <Link to={"/Help"} className="lienNav">
              Help
            </Link>
          </div>
          <div>
            <button className="btnNav">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
