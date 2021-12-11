import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowCircleDown);

const IndexPage = () => {
  return (
    <Layout>
      <title>Home | Kevin Yu</title>
      {/* prettier-ignore */}
      <meta name="Home" content="Kevin Yu's Engineering Portfolio Home Page"></meta>

      <main>
        <div class="content">
          <div class="intro-grid">
            <StaticImage class="intro-portrait" src="../images/pfp512.png" />
            <h1 class="intro-title floating">Hey, I'm Kevin.</h1>
            <p class="intro-subtitle">
              I’m an {age} year old mechanical engineering student studying at
              the{" "}
              <a class="hyperlink" href="https://cockrell.utexas.edu/">
                University of Texas.
              </a>
            </p>
          </div>
        </div>
        <div class="fa-adj">
          <a href="#Experience">
            <FontAwesomeIcon
              color="#81e5d9"
              size="4x"
              icon={faArrowCircleDown}
              className="color-shift"
            />
          </a>
        </div>
      </main>
      <a id="Experience">
        <h1 class="anchor" />
      </a>
      <div class="section">
        <div class="timeline">
          <h1 class="timeline-title">My Experience</h1>
          <hr class="time-line" />
          <div class="timeline-block FTC" />
          <div class="timeline-block Jacobi1" />
          <div class="timeline-block CMS" />
          <div class="timeline-block Jacobi2" />
          <div class="timeline-block LHR" />
          <div class="timeline-block TREL" />
        </div>
      </div>

      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
      <p>ㅤ</p>
    </Layout>
  );
};

export default IndexPage;

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;
