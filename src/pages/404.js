import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1 class = "header">Page not found</h1>
      <p class = "subtitle">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" class = "hyperlink underline">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
