import React from "react";
import {Helmet} from "react-helmet";

import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Kevin Yu</title>
        <meta name="description" content="Contact information for Kevin Yu"/>
        <meta name="robots" content="all" />
        <html lang="en" />
      </Helmet>
      
      <Layout>
        <section className="max-w-screen-xl mt-40 px-20 mx-auto">
          <h1 className="my-10 text-5xl text-teal-100">Contact</h1>
          <p className="text-1xl text-white">
            Please send me a message at{" "}
            <a className="underline hover:text-teal-100" href="mailto:khy@utexas.edu" target="_blank" rel="noopener noreferrer">khy@utexas.edu</a>
              {" "}or connect with me on{" "}
            <a className="underline hover:text-teal-100" href="https://www.linkedin.com/in/kevin-h-yu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            . I'd love to hear from you!
            <br />
            <br />
            I'd be happy to provide a formal resume or technical information on request.</p>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
