import React from "react";
import { Link } from "react-router-dom";

const yearDate = new Date();
  const currentYear = yearDate.getFullYear();

const Footer = () => {
  

  return (
    <footer className="bg-neutral">
      <div className="footer text-neutral-content px-20 py-10 flex">
        <div className="flex-1">
          <span className="footer-title">Services</span>
          <Link to="/brand" className="link link-hover">
            Branding
          </Link>
          <Link to="/brand" className="link link-hover">
            Design
          </Link>
          <Link to="/brand" className="link link-hover">
            Marketing
          </Link>
          <Link to="/brand" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div className="flex-1">
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/about" className="link link-hover">
            Contact
          </Link>
          <Link to="/about" className="link link-hover">
            Jobs
          </Link>
          <Link to="/about" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div className="flex-1">
          <span className="footer-title">Legal</span>
          <Link to="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/terms" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/terms" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="text-center text-white p-10">
        <p>&copy; Copyright {currentYear}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
