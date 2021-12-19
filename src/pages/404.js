import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div class="container">
      <main>
        <title>Error 404 (Not Found)</title>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/" class="hyperlink-white underline">
            Go home
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

export default NotFoundPage;
