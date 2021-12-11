import React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <title>Contact | Kevin Yu</title>
      <meta name="Contact" content="Contact information for Kevin Yu"></meta>
      <main>
        {/* prettier-ignore */}
        <div class="content">
        <h1>Contact</h1>
        <p>
          Please send me a message at{" "}
          <a class="hyperlink underline" href="mailto:khy@utexas.edu" target="_blank" rel="noopener noreferrer">khy@utexas.edu</a>
          {" "}or connect with me on{" "}
          <a class="hyperlink underline" href="https://www.linkedin.com/in/kevin-h-yu/">LinkedIn</a>
          . I'd love to hear from you!
        </p>
      </div>
      </main>
    </Layout>
  );
};

export default ContactPage;
