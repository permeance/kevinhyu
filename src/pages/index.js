import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/footer";


const IndexPage = () => {
  return (
    <Layout>
      <h1 class="intro">
        <StaticImage id="profile" class="portrait" src="../images/pfp.png" width={400} />
        <div class="header floating">Hey, I'm Kevin.</div>
        <p id="introSubText" class="subtitle show">
          I’m an {age} year old mechanical engineering student at the{" "}
          <a class="subtitle hyperlink" href="https://cockrell.utexas.edu/">
            University of Texas.
          </a>
        </p>
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
      <Footer />
    </Layout>
    
  );
};

export default IndexPage;

//detect if mobile
var mobile;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  mobile = true;
} else {
  mobile = false;
}
/*
//Hiding & showing items
function animate() {
  var scrollFunc = function () {
    var y = window.scrollY;

    let introText = document.getElementById("introText");
    let introSubText = document.getElementById("introSubText");
    if (y >= introText.offsetTop - 50) {
      introText.className = "header floating hide";
    } else {
      introText.className = "header floating show";
    }

    if (y >= introSubText.offsetTop - 125) {
      introSubText.className = "subtitle hide";
    } else {
      introSubText.className = "subtitle show";
    }
  };
  window.addEventListener("scroll", scrollFunc);

  if (mobile) {
    var profile = document.getElementById("profile");
    profile.width = "200";
    profile.class = "portrait mobile";
  }
}

//ensure all the content is loaded (throws exception otherwise)
/*
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", animate);
} else {
  animate();
}
*/
/*
window.onload = () => {
  animate();
};
*/

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;
