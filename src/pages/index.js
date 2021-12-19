import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowCircleDown);

const IndexPage = () => {
  return (
    <Layout>
      <title>Home | Kevin Yu</title>
      <meta name="Home" content="Kevin Yu's Engineering Portfolio Home Page" />
      <main>
        <div class="content">
          <div class="intro-grid">
            <StaticImage class="intro-portrait" src="../images/pfp.png" />
            <h1 class="intro-title floating">Hey, I'm Kevin.</h1>
            <h3 class="intro-subtitle">
              I'm an {age} year old mechanical engineering student studying at
              the{" "}
              <a class="hyperlink-teal" href="https://cockrell.utexas.edu/">
                University of Texas
              </a>
              {" "}with a focus in robotics and mechatronics.
            </h3>
          </div>
        </div>
        <div class="fa-adj">
          <a href="#experience">
            <FontAwesomeIcon
              color="#81e5d9"
              size="4x"
              icon={faArrowCircleDown}
              className="color-shift"
            />
          </a>
        </div>
      </main>
      <a id="experience">
        <h1 class="anchor" />
      </a>
      <div class="section">    

        <div class="timeline-title">
          <h1>Experience</h1>
          <h3>I'm pursuing mechanical design in many fields.</h3>
        </div>

        <div class="timeline">

          
          <hr class="time-line" />

          {/* Year markers */}
          
          <p class = "timeline-year-text" style={{"grid-row-end": "spring-2021"}}>2021</p>
          <div class = "dot" style={{"grid-row-end": "spring-2021"}} />

          <p class = "timeline-year-text" style={{"grid-row-end": "spring-2020"}}>2020</p>
          <div class = "dot" style={{"grid-row-end": "spring-2020"}} />

          <p class = "timeline-year-text" style={{"grid-row-end": "spring-2019"}}>2019</p>
          <div class = "dot" style={{"grid-row-end": "spring-2019"}} />

          <p class = "timeline-year-text" style={{"grid-row-end": "spring-2018"}}>2018</p>
          <div class = "dot" style={{"grid-row-end": "spring-2018"}} />

          {/* Line segments */}

          {/* LHR */}
          <svg class="timeline-diag left" style={{"grid-row": "item-1 / midfall-2021"}} >
              <line class= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
          </svg>
          <hr class="timeline-segment left-left" style={{"grid-row-start": "item-1"}}/>
          <hr class="timeline-segment left-right" style={{"grid-row-start": "midfall-2021"}}/>

          {/* Jacobi Motors 2 */}
          <svg class="timeline-diag left" style={{"grid-row": "item-2 / midsummer-2021"}} >
              <line class= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
          </svg>
          <hr class="timeline-segment left-left" style={{"grid-row-start": "item-2"}}/>
          <hr class="timeline-segment left-right" style={{"grid-row-start": "midsummer-2021"}}/>

          {/* Jacobi Motors 1 */}
          <svg class="timeline-diag left" style={{"grid-row": "item-3 / midsummer-2019"}} >
              <line class= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
          </svg>  
          <hr class="timeline-segment left-left" style={{"grid-row-start": "item-3"}}/>
          <hr class="timeline-segment left-right" style={{"grid-row-start": "midsummer-2019"}}/>

          {/* TREL */}
          <svg class="timeline-diag right" style={{"grid-row": "item-1 / midfall-2021"}} >
              <line class= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
          </svg> 
          <hr class="timeline-segment right-right" style={{"grid-row-start": "item-1"}}/>
          <hr class="timeline-segment right-left" style={{"grid-row-start": "midfall-2021"}}/>

          {/* CMS */}
          <svg class="timeline-diag right" style={{"grid-row": "item-2 / midfall-2020"}} >
              <line class= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
          </svg>  
          <hr class="timeline-segment right-right" style={{"grid-row-start": "item-2"}}/>
          <hr class="timeline-segment right-left" style={{"grid-row-start": "midfall-2020"}}/>
          
          {/* FTC */}
          <svg class="timeline-diag right" style={{"grid-row": "item-3 / spring-2019"}} >
              <line class= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
          </svg>
          <hr class="timeline-segment right-right" style={{"grid-row-start": "item-3"}}/>
          <hr class="timeline-segment right-left" style={{"grid-row-start": "spring-2019"}}/>


          {/* Blocks and Text */}
        
          {/* LHR */}
          <div id="LHR" class="timeline-text left" style={{"grid-row-start": "item-1"}}>
            <h2><a class="hyperlink-teal" href="https://www.longhornracing.org/electric-vehicle">Longhorn Racing Electric</a></h2>
            <h2>(Formula SAE)</h2>
            <h3>Battery Engineer</h3>
          </div>
          <div id="LHR" class="timeline-block left" style={{background: "#BF5700", "grid-row": "fall-2021 / current"}} />

          {/* Jacobi Motors 2 */}
          <div id="J2" class="timeline-text left" style={{"grid-row-start": "item-2"}}>
            <h2>Jacobi Motors</h2>
            <h3>Mechanical Engineering Intern</h3>
          </div>
          <div id="J2" class="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2021 / fall-2021"}} />

          {/* Jacobi Motors 1 */}
          <div id="J1" class="timeline-text left" style={{"grid-row-start": "item-3"}}>
            <h2>Jacobi Motors</h2>
            <h3>Test Engineering Intern</h3>
          </div>          
          <div id="J1" class="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2019 / fall-2019"}}/>

          {/* TREL */}
          <div id="TREL" class="timeline-text right" style={{"grid-row-start": "item-1"}}>
            <h2><a class="hyperlink-teal" href="https://www.texasrocketlab.com/">Texas Rocket Engineering Lab</a></h2>
            <h2>(TREL)</h2>
            <h3>COPV Technical Engineer</h3>
          </div>
          <div id="TREL" class="timeline-block right" style={{background: "black", "grid-row": "fall-2021 / current"}} />

          {/* CMS */}
          <div id="CMS" class="timeline-text right" style={{"grid-row-start": "item-2"}}>
            <h2><a class="hyperlink-teal" href="https://www.custommedshields.com/">Custom Medical Shields</a></h2>
            <h3>Founder</h3>
          </div>
          <div id="CMS" class="timeline-block right" style={{background: "white", "grid-row": "summer-2020 / summer-2021"}} />

          {/* FTC */}
          <div id="FTC" class="timeline-text right" style={{"grid-row-start": "item-3"}}>
            <h2>FIRST Tech Challenge</h2>
            <h2>Team 9048: <i>The Philobots</i></h2>
            <h3>Team Lead</h3>
          </div>
          <div id="FTC" class="timeline-block right" style={{background: "red", "grid-row": "summer-2020 / fall-2017"}} />
        </div>
      </div>
      
      <div class="cert-title">
        <h1>Certifications</h1> 
        <h3>I'm committed to improving and applying my design and software skills.</h3>
      </div>
      <div class = "certifications">
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-SKRJEV8QBL" style={{"grid-area": "CSWE"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWE.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MTASED3NUX" style={{"grid-area": "CSWP"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWA.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GMXN7F4LHU" style={{"grid-area": "CSWPSU"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWPSU.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EA3LZM2SHX" style={{"grid-area": "CSWPWD"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWPWD.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9X46YV7SGN" style={{"grid-area": "CSWPSM"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWPSM.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HB4PUKCL3X" style={{"grid-area": "CSWPDT"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWPDT.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-XAAABWJ6S6" style={{"grid-area": "CSWA"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWP.png"/>
        </a>
        <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GH5CQXA6S2" style={{"grid-area": "CSWAAM"}} class="badge">
          <StaticImage objectFit="contain" src="../images/CSWAAM.png"/>
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;


/*
      
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
      <p>ㅤ</p>*/