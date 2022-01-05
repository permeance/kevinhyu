import React from "react";
import { Link } from "gatsby";

import "../styles/main.css";
import "../styles/timeline.css";
import "../styles/intro.css";

import LogoHex from "/static/logoHex.inline.svg";

/* contains nav bar and footer */
const Layout = ({ children }) => {
  return (
    <>
      <nav className="fixed w-full px-6 py-2 top-0 z-10 bg-midnight-100 bg-opacity-90">
        <ul className="max-w-screen-xl mx-auto flex flex-row">
          <li className="mx-2 my-1 hover:scale-[1.05] duration-150 ease-in-out">
            <Link to="/" aria-label="Home">
              <LogoHex width={63} height={70} />
            </Link>
          </li>
          <li className="mx-8 my-auto w-full h-px sm:bg-gray-600" />
          <li className="mx-3 my-auto">
            <Link className="text-2xl hover:text-teal-100" to="/projects">
              Projects
            </Link>
          </li>
          <li className="mx-3 my-auto">
            <Link className="text-2xl hover:text-teal-100" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main className="mt-28">
        {children}
      </main>

      <section className="absolute bottom-0 h-8 w-full text-center ">
        <p>© {new Date().getFullYear()} by Kevin Yu.</p>
      </section>
    </>
  );
};

export default Layout;
