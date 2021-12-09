import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "./layout.css";

import LogoHex from "../images/logoHex.inline.svg";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li class="logo">
            <Link to="/">
              <LogoHex width={63} height={70} />
            </Link>
          </li>
          <li class="nav-text">
            <Link to="/contact">Contact</Link>
          </li>
          <li class="nav-text">
            <Link to="/projects">Projects</Link>
          </li>
          <hr class="one" />
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
