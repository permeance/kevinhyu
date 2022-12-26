import React, { useCallback, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ReCaptcha from "react-google-recaptcha";

import Layout from "../components/layout";

const ContactPage = () => {

  const [activated, isVerified] = useState(false);

  return (
    <>
      <Helmet>
        <title>Contact | Kevin Yu</title>
        <meta name="description" content="Contact information for Kevin Yu" />
        <meta name="robots" content="all" />
        <html lang="en" />
      </Helmet>

      <Layout>
        {/* prettier-ignore */}
        <section className="max-w-screen-xl mx-auto mt-40 mb-20 px-8 sm:px-20">
          <h1 className="my-10 font-bold text-5xl text-teal-100">Contact</h1>
          <p className="text-lg text-white">
            Please send me a message at{" "}
            <a className="underline hover:text-teal-100" href="mailto:khy@utexas.edu" target="_blank" rel="noopener noreferrer">khy@utexas.edu</a>
              {" "}or connect with me on{" "}
            <a className="underline hover:text-teal-100" href="https://www.linkedin.com/in/kevin-h-yu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            . I'd love to hear from you!
            <br />
            <br />
            I'd be happy to provide a formal resume or technical information on request.</p>
        </section>
        <section className="max-w-screen-xl mx-auto mb-20 px-8 sm:px-20">
          <form action="https://submit-form.com/IGF6avhh" method="POST">
            <fieldset className="flex flex-col gap-8 mb-10 text-lg">
              <label className="flex flex-col gap-2" for="full-name">
                Name
                <input
                  className="p-2 bg-gray-800 rounded-md outline-0"
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="First and Last"
                  required
                />
              </label>

              <label className="flex flex-col gap-2" for="email-address">
                Email Address
                <input
                  className="p-2 bg-gray-800 rounded-md outline-0"
                  type="email"
                  name="email"
                  id="email-address"
                  placeholder="email@domain.com"
                  required
                />
              </label>

              <label className="flex flex-col gap-2" for="message">
                Message
                <textarea
                  className="p-2 bg-gray-800 rounded-md outline-0"
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Type your message here"
                  required
                />
              </label>
            </fieldset>

            <div className="mb-4 rounded-md overflow-hidden w-[298px] h-[74px]">
              <HCaptcha 
                theme="dark"
                sitekey="a1f257a6-c255-4ae2-ad47-9d14865717ff" 
                onVerify={useCallback(() => isVerified(true))}
              />
            </div>
            
            <input
              type="hidden"
              name="_redirect"
              value="https://kevinhyu.com/thanks"
            />            
            <input
              className={"py-3 px-5 bg-gray-800 tracking-wider font-bold rounded-lg hover:bg-gray-700 " + (activated ? "cursor-pointer" : "cursor-not-allowed")}
              type="submit"
              value="Submit"
              disabled={!activated}
            />
          </form>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
