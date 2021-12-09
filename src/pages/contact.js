import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1 class = "header">
        Contact
      </h1>
      <p>
        Please send me a message at <a class= "hyperlink underline" href="mailto:khy@utexas.edu">khy@utexas.edu</a> or connect with me on <a class="hyperlink underline" href="https://www.linkedin.com/in/kevin-h-yu/">LinkedIn</a>. I'd love to hear from you!
      </p>
    </Layout>
  );
};

export default ContactPage;
