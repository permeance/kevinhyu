import * as React from "react";
import {Helmet} from "react-helmet";

import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Error 404 (Not Found)</title>
        <meta name="description" content="Page Not Found"/>
        <meta name="robots" content="none" />
        <html lang="en" />
      </Helmet>

      <section className= "mx-20 my-20">
        <h1 className="my-8 text-5xl text-teal-100">Page not found</h1>
        <p className="my-2 text-xl text-white">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/" class="underline hover:text-teal-100">
            Go home
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default NotFoundPage;
