import React from "react";
import { Link } from "gatsby";

import "../styles/global.css";
import "../styles/timeline.css";
import "../styles/modals.css";

import LogoHex from "/static/logoHex.inline.svg";

/* contains nav bar and footer */
const Layout = ({ children }) => {
  return (
    <div>
      <nav className="fixed w-full px-4 py-2 top-0 z-10 bg-midnight-100 bg-opacity-90">
        <ul className="max-w-screen-lg mx-auto flex flex-row">
          <li className="mx-2 my-1 hover:scale-[1.05] duration-150 ease-in-out">
            <Link to="/" aria-label="Home">
              <LogoHex width={63} height={70} />
            </Link>
          </li>
          <li className="my-auto mx-0 w-auto h-px sm:bg-gray-600 sm:mx-8 sm:w-full" />
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

      <section className="absolute bottom-0 h-8 w-full text-center text-sm sm:text-base">
        <p>© {new Date().getFullYear()} by Kevin Yu.</p>
      </section>
    </div>
  );
};

export default Layout;
