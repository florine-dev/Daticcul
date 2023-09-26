import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Yourbenefice.css";
import diaspora from "../../images/diaspora.jpg";

const Yourbenefice = () => {
  return (
    <>
      <div className="contenuYourbenefice displayFlex">
        <div className="YourbeneficeG">
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>National and international money transfer services</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Access your accounts from your phone or web</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Loans</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Overdrafts</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Advances on Salaries and bills</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Mobile wallet services</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Personalised advisory services</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Pension support services with CNPS</p>
          </div>
          <div className="icontextYourbe displayFlex">
            <FontAwesomeIcon icon={faCheck} className="iconbe" />
            <p>Pension support services with CNPS</p>
          </div>
        </div>
        <div className="YourbeneficeD">
          <img src={diaspora} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Yourbenefice;
