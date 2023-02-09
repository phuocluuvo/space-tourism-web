import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../custom/Menu/Menu";
import "./Navigation.css";
function Navigation() {
  const index = useRef(0);
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="48">
          <g fill="none" fill-rule="evenodd" className="icon">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <hr aria-orientation="horizontal"></hr>
        <div className="links-container">
          <Link
            className={`link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            <span>00</span> Home
          </Link>
          <Link
            className={`link ${
              location.pathname === "/destination" ? "active" : ""
            }`}
            to="/destination"
          >
            <span>01</span> Destination
          </Link>
          <Link
            className={`link ${location.pathname === "/crew" ? "active" : ""}`}
            to="/crew"
          >
            <span>02</span> Crew
          </Link>
          <Link
            className={`link ${
              location.pathname === "/technology" ? "active" : ""
            }`}
            to="/technology"
          >
            <span>03</span> Technology
          </Link>
        </div>
      </div>
      <Menu>
        <div className="ham-menu">
          <Link
            className={`link title ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            <span>00</span> Home
          </Link>
          <Link
            className={`link title ${
              location.pathname === "/destination" ? "active" : ""
            }`}
            to="/destination"
          >
            <span>01</span> Destination
          </Link>
          <Link
            className={`link title ${
              location.pathname === "/crew" ? "active" : ""
            }`}
            to="/crew"
          >
            <span>02</span> Crew
          </Link>
          <Link
            className={`link title ${
              location.pathname === "/technology" ? "active" : ""
            }`}
            to="/technology"
          >
            <span>03</span> Technology
          </Link>
        </div>
      </Menu>
    </nav>
  );
}

export default Navigation;
