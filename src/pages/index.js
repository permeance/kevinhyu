import React from "react";
import Layout from "../components/layout";
import Link from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-image";

import pfp from "../images/pfp.png";




const IndexPage = () => {
  return (
    <Layout>
      <h1 class="intro">
        <img class="portrait" src={pfp} width="350"/>
        <h1 class = "header floating">Hey, I'm Kevin.</h1>
        <p class="subtitle">I’m an {age} year old mechanical engineering student at the <a class= "subtitle hyperlink" href="https://cockrell.utexas.edu/">University of Texas.</a></p>
      </h1>
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
var age = today.getFullYear()-2004;
if(today.getMonth()>2)
  age ++;