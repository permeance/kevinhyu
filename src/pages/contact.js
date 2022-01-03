import React from "react";
import { Fade } from "react-reveal";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <title>Contact | Kevin Yu</title>
      <meta name="Contact" content="Contact information for Kevin Yu"/>
      <section>
        <main>
          <h1>Contact</h1>
          <p>
            Please send me a message at{" "}
            <a className="hyperlink-white underline" href="mailto:khy@utexas.edu" target="_blank" rel="noopener noreferrer">khy@utexas.edu</a>
              {" "}or connect with me on{" "}
            <a className="hyperlink-white underline" href="https://www.linkedin.com/in/kevin-h-yu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            . I'd love to hear from you!
          </p>
          <p>I'd be happy to provide a formal resume or technical information on request.</p>
        </main>
      </section>
    </Layout>
  );
};

export default ContactPage;
