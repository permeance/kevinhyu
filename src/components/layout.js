import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./layout.css";

import LogoHex from "../images/logoHex.inline.svg";

/* contains nav bar and footer */
const Layout = ({ pageTitle, children }) => {
  return (
    <div class="container">
      <nav>
        <ul class="nav-list">
          <li class="nav-logo">
            <Link to="/">
              <LogoHex width={63} height={70} />
            </Link>
          </li>
          <li class="nav-text">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="nav-text">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-line">
            <hr class="navline" />
          </li>
        </ul>
      </nav>
      {children}
      <div class="footer">
        © {new Date().getFullYear()} by Kevin Yu. All rights reserved.
      </div>
    </div>
  );
};

export default Layout;
