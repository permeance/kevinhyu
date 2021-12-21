import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCogs, faRulerCombined, faShapes, faMicrochip, faCube } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    <Layout>
      <title>Home | Kevin Yu</title>
      <meta name="Home" content="Kevin Yu's Engineering Portfolio Home Page" />
      <main>
        <div class="intro">
          <div class="intro-grid">
            <StaticImage class="intro-portrait" src="../images/pfp.png" />
            <h1 class="intro-title floating">Hey, I'm Kevin.</h1>
            <h3 class="intro-subtitle">
              I'm an {age} year old mechanical engineering student at
              the{" "}
              <a class="hyperlink-teal" href="https://cockrell.utexas.edu/" target="_blank" rel="noopener noreferrer">
                University of Texas
              </a>
              {" "}with a specialization in mechatronics.
            </h3>
          </div>
          <div class="title">
            <hr class="introline"/>
            <h4>I'm passionate about building cross-displinary engineering projects to make things greener, more efficient, and more integrated. 
              I've worked with EV motors, created specialized medical PPE, and immersed myself in collegiate rocketry. Please check out my{" "}
            <Link to="/projects" class="hyperlink-teal">projects</Link>
              {" "}or view my online curriculum vitae below!</h4> 
          </div>
          
        </div>
        <div class="fa-arrow">
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
      <div id="experience">
        <div class="anchor" />
      </div>
      <div class="section gradient">    
        <div class="title">
          <h1>Experience</h1>
          <h3>I have had the priviledge of working with many extraordinary design teams.</h3>
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
            <h2><a class="hyperlink-teal" href="https://www.longhornracing.org/electric-vehicle" target="_blank" rel="noopener noreferrer">Longhorn Racing Electric</a></h2>
            <h2>(Formula SAE)</h2>
            <h3>Battery Engineer</h3>
            <p>Design of structural six-segment battery case. Mechanical and electrical design of vehicle low-voltage battery system.</p>
          </div>
          <div id="LHR" class="timeline-block left" style={{background: "#BF5700", "grid-row": "fall-2021 / current"}} />

          {/* Jacobi Motors 2 */}
          <div id="J2" class="timeline-text left" style={{"grid-row-start": "item-2"}}>
            <h2>Jacobi Motors</h2>
            <h3>Mechanical Engineering Intern</h3>
            <p>Design, manufacture, and implementation of a carbon filament winding tensioner for wrapping high-speed automotive rotors. 
              Fabricated custom electronics enclosures.</p>
          </div>
          <div id="J2" class="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2021 / fall-2021"}} />

          {/* Jacobi Motors 1 */}
          <div id="J1" class="timeline-text left" style={{"grid-row-start": "item-3"}}>
            <h2>Jacobi Motors</h2>
            <h3>Test Engineering Intern</h3>
            <p>Conducted dynamometer testing of a prototype variable flux memory motor. Debugged and documented vehicle telemetry data graphical user interface.</p>
          </div>          
          <div id="J1" class="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2019 / fall-2019"}}/>

          {/* TREL */}
          <div id="TREL" class="timeline-text right" style={{"grid-row-start": "item-1"}}>
            <h2><a class="hyperlink-teal" href="https://www.texasrocketlab.com/" target="_blank" rel="noopener noreferrer">Texas Rocket Engineering Lab</a></h2>
            <h2>(TREL)</h2>
            <h3>COPV Technical Engineer</h3>
            <p>Responsible for helium pressure vessel analysis. 
              Optimizing Ansys ACP process to estimate carbon composite overwrap strain more quickly and accurately.</p>
          </div>
          <div id="TREL" class="timeline-block right" style={{background: "black", "grid-row": "fall-2021 / current"}} />

          {/* CMS */}
          <div id="CMS" class="timeline-text right" style={{"grid-row-start": "item-2"}}>
            <h2><a class="hyperlink-teal" href="https://www.custommedshields.com/" target="_blank" rel="noopener noreferrer">Custom Medical Shields</a></h2>
            <h3>Founder</h3>
            <p>Provided custom face shields for professionals with specialized eyewear during the pandemic. 
              Managed design, manufacture (CNC routing), and quality control of shields distributed to customers in six states.
            </p>
          </div>
          <div id="CMS" class="timeline-block right" style={{background: "white", "grid-row": "summer-2020 / summer-2021"}} />

          {/* FTC */}
          <div id="FTC" class="timeline-text right" style={{"grid-row-start": "item-3"}}>
            <h2>FIRST Tech Challenge</h2>
            <h2>Team 9048: <i>The Philobots</i></h2>
            <h3>Team Lead</h3>
            <p>Led the technical training, team leadership, and robot systems integration on the eleven-student team. Design and manufacture of robot deposit system each year.</p>
          </div>
          <div id="FTC" class="timeline-block right" style={{background: "red", "grid-row": "summer-2020 / fall-2017"}} />
        </div>
      </div>
      <div class="section solid">
        <div class="title">
          <h1>Certifications</h1> 
          <h3>I am dedicated to applying and improving my design software skills.</h3>
        </div>
        <div class = "certifications">
          <a href="https://www.credly.com/badges/9001baf8-d0aa-4e08-9c30-8bfec61c5f06?source=linked_in_profile" style={{"grid-area": "CSWE"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWE.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GMXN7F4LHU" style={{"grid-area": "CSWPSU"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWPSU.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EA3LZM2SHX" style={{"grid-area": "CSWPWD"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWPWD.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9X46YV7SGN" style={{"grid-area": "CSWPSM"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWPSM.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HB4PUKCL3X" style={{"grid-area": "CSWPDT"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWPDT.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MTASED3NUX" style={{"grid-area": "CSWP"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWP.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-XAAABWJ6S6" style={{"grid-area": "CSWA"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWA.png"/>
          </a>
          <a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GH5CQXA6S2" style={{"grid-area": "CSWAAM"}} class="badge" target="_blank" rel="noopener noreferrer">
            <StaticImage objectFit="contain" src="../images/CSWAAM.png"/>
          </a>
        </div>
      </div>
      <div class="section">
        <div class="title">
          <h1>Skills</h1>
        </div>
        <div class="skills">
          <div class="skill">
            <FontAwesomeIcon color="#57a19a" size="4x" icon={faShapes} />
            <h3 class="skill-header">3D Printing</h3>
            <p>Adept at maintaining and running SLA and FDM 3D printer farms.</p>
          </div>
          <div class="skill">
            <FontAwesomeIcon color="#57a19a" size="4x" icon={faRulerCombined} />
            <h3 class="skill-header">Machining</h3>
            <p>Experienced with DFM, GD&T, hand-programming G-code, and Fusion 360 and HSMWorks CAM.</p>
          </div>
          <div class="skill">
            <FontAwesomeIcon color="#57a19a" size="4x" icon={faCogs} />
            <h3 class="skill-header">CAD Design</h3>
            <p>Proficient in Solidworks, familiar with Fusion 360. Capable of resilient modeling strategy for capturing design intent and working in teams.</p>
          </div>
          <div class="skill">
            <FontAwesomeIcon color="#57a19a" size="4x" icon={faCube}/>
            <h3 class="skill-header">Rendering</h3>
            <p>Skilled in photo-realistic product rendering and animation in Keyshot.</p>
          </div>
          <div class="skill">
            <FontAwesomeIcon color="#57a19a" size="4x" icon={faMicrochip} />
            <h3 class="skill-header">Circuit Design</h3>
            <p>Working knowledge in KiCAD for power electronics design.</p>
          </div>
        </div>
      </div>
      
      <div class="section box">
        <h3 class="title">Any questions? <Link to="/contact" class="hyperlink-gray underline">Contact me!</Link></h3>
      </div>

    </Layout>
  );
};

export default IndexPage;

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;