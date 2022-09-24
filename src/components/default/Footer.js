import React from "react";
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <p>
              Premium Quality footwear at the best and most affordable price.
            </p>
            <p>we have a new offer every day for 365 days</p>
          </div>
          <div className="contact">
            <p>Contact</p>
            <p>E-mail : hello@footcommerce.com | Hotline: +1 131 138 138</p>
          </div>
        </div>

        <hr className="line" />
        <p className="copyright">
          DESIGN BY FOOT COMMERCE - © 2022. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </>
  );
};

export default Footer;
