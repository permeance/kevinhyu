import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <title>Home | Kevin Yu</title>
      <meta
        name="Home"
        content="Kevin Yu's Engineering Portfolio Home Page"
      ></meta>
      <div class="content">
        <div class="intro-grid">
          <StaticImage class="intro-portrait" src="../images/pfp512.png" />
          <h1 class="intro-title floating">Hey, I'm Kevin.</h1>
          <p class="intro-subtitle">
            I’m an {age} year old mechanical engineering student at the{" "}
            <a class="hyperlink" href="https://cockrell.utexas.edu/">
              University of Texas.
            </a>
          </p>
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
      </div>
    </Layout>
  );
};

export default IndexPage;

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;
