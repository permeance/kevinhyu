import * as React from "react";
import {Helmet} from "react-helmet";

import { Link } from "gatsby";

const thanksPage = () => {
  return (
    <>
      <Helmet>
        <title>Form Submission</title>
        <meta name="description" content="Thank you for submitting"/>
        <meta name="robots" content="none" />
        <html lang="en" />
      </Helmet>

      <section className= "max-w-screen-xl mx-auto px-20 my-20">
        <h1 className="my-8 text-5xl text-teal-100">Thank you!</h1>
        <p className="my-2 text-xl text-white">
          The contact form was submitted successfully.
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

export default thanksPage;
