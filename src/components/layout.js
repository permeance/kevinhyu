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
    <div className="container">
      <html lang="en"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-logo">
            <Link to="/" aria-label="Home">
              <LogoHex width={63} height={70} />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-text">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-line">
            <hr className="navline" />
          </li>
        </ul>
      </nav>

      {/* TODO: Change once updated responsive design */}
      <meta name="viewport" content="width=750"/>
      {children}
      <div className="footer">
        <p>© {new Date().getFullYear()} by Kevin Yu.</p>
      </div>
    </div>
  );
};

export default Layout;
