import React, { useState, useEffect } from "react";
import Styles from "./SharedComponents.jsx";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="healthyfood-inc">
          <p>
            <strong>HEALTHYFOOD INC.</strong>
          </p>
          <p>Blog</p>
          <p>Community</p>
          <p>Students</p>
          <p>Recipes</p>
        </div>
        <div className="our-company">
          <p>
            <strong>OUR COMPANY</strong>
          </p>
          <p>HealthyFood Group</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="contact-us">
          <p>
            <strong>CONTACT US</strong>
          </p>
          <p>Help Center & FAQ</p>
          <p>Partnership Inquiries</p>
          <p>Corporate Sales</p>
          <p>Join Our Farm Collection</p>
        </div>
        <div className="download-our-app">
          <p>
            <strong>DOWNLOAD OUR APP</strong>
          </p>
          <p>
            Manager your deliveries <br></br>from anywhere, anytime
          </p>
          <img
            src="https://billyhealthyfood.s3.amazonaws.com/iosandroiddownloadicon.png"
            alt="ios and android icons"
            className="ios-android"
          ></img>
        </div>
      </div>
      <div className="footer-footer">
        <div className="footer-footer-left">
          <p className="footer-footer-item">© HealthyFood 2021</p>
          <p className="footer-footer-item">Terms and Conditions</p>
          <p className="footer-footer-item">Privacy</p>
          <p className="footer-footer-item">Accessibility</p>
        </div>
        <img
          src="https://billyhealthyfood.s3.amazonaws.com/socialmediaicons.png"
          alt="social-icons"
          className="social-icons"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
