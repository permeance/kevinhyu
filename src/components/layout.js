import React from "react";
import { Link } from "gatsby";
import "./main.css";
import "./timeline.css";
import "./navbar.css";
import "./intro.css";

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
      {/* TODO: Change once updated responsive design */}
      <meta name="viewport" content="width=750"/>
      {children}
      <div class="footer">
        <p>© {new Date().getFullYear()} by Kevin Yu.</p>
      </div>
    </div>
  );
};

export default Layout;
