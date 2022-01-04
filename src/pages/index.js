import React from "react";
import { Fade } from "react-reveal";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/layout";

import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCogs, faRulerCombined, faShapes, faMicrochip, faCube } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    
    <Layout>  
      <Helmet>
        <title>Home | Kevin Yu</title>
        <html lang="en" />
        <meta name="description" content="Kevin Yu's Engineering Portfolio Home Page" />
      </Helmet>

      <main>
        <div className="intro">
          <div className="intro-grid">
            <StaticImage className="intro-portrait" src="../img/pfp.jpg" />
            <h1 className="intro-title floating">Hey, I'm Kevin.</h1>
            <h2 className="white intro-subtitle">
              I'm an {age} year old mechanical engineering student at
              the{" "}
              <a className="hyperlink-teal" href="https://cockrell.utexas.edu/" target="_blank" rel="noopener noreferrer">
                University of Texas
              </a>
              {" "}with a specialization in mechatronics.
            </h2>
          </div>
          <div className="title">
            <hr className="introline"/>
            <h2 className="white appear">I'm passionate about building cross-displinary engineering projects to make things greener, more efficient, and more integrated.
              I've worked with EV motors, created specialized medical PPE, and immersed myself in collegiate rocketry. Please check out my{" "}
            <Link to="/projects" className="hyperlink-teal">projects</Link>
              {" "}or view my online curriculum vitae below!</h2> 
          </div>
        </div>

        <div className="fa-arrow appear">
          <a href="#experience" aria-label="Experience timeline">
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
        <div className="anchor" />
      </div>

      <section className="gradient">
        <Fade>
          <>
            <div className="title">
                  <h1>Experience</h1>
                  <h2 style={{color: "var(--color-text)"}}>I have had the privilege of working with many extraordinary design teams.</h2>
            </div>
            <div className="timeline">
              <hr className="time-line" />
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
              <svg className="timeline-diag left" style={{"grid-row": "item-1 / midfall-2021"}} >
                  <line className= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left" style={{"grid-row-start": "item-1"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midfall-2021"}}/>
              {/* Jacobi Motors 2 */}
              <svg className="timeline-diag left" style={{"grid-row": "item-2 / midsummer-2021"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left" style={{"grid-row-start": "item-2"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midsummer-2021"}}/>
              {/* Jacobi Motors 1 */}
              <svg className="timeline-diag left" style={{"grid-row": "item-3 / midsummer-2019"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>  
              <hr className="timeline-segment left-left" style={{"grid-row-start": "item-3"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midsummer-2019"}}/>
              {/* TREL */}
              <svg className="timeline-diag right" style={{"grid-row": "item-1 / midfall-2021"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg> 
              <hr className="timeline-segment right-right" style={{"grid-row-start": "item-1"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "midfall-2021"}}/>
              {/* CMS */}
              <svg className="timeline-diag right" style={{"grid-row": "item-2 / midfall-2020"}} >
                  <line className= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>  
              <hr className="timeline-segment right-right" style={{"grid-row-start": "item-2"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "midfall-2020"}}/>
              {/* FTC */}
              <svg className="timeline-diag right" style={{"grid-row": "item-3 / spring-2019"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>
              <hr className="timeline-segment right-right" style={{"grid-row-start": "item-3"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "spring-2019"}}/>
              {/* Blocks and Text */}
              {/* LHR */}
              <div id="LHR" className="timeline-text left" style={{"grid-row-start": "item-1"}}>
                <h2><a className="hyperlink-teal" href="https://www.longhornracing.org/electric-vehicle" target="_blank" rel="noopener noreferrer">Longhorn Racing Electric</a></h2>
                <h2>(Formula SAE)</h2>
                <h2 className="white">Battery Engineer</h2>
                <p>Design of structural six-segment battery case and high voltage electronics enclosure. Mechanical and electrical design of vehicle low-voltage battery system.</p>
              </div>
              <div id="LHR" className="timeline-block left" style={{background: "#BF5700", "grid-row": "fall-2021 / current"}} />
              {/* Jacobi Motors 2 */}
              <div id="J2" className="timeline-text left" style={{"grid-row-start": "item-2"}}>
                <h2>Jacobi Motors</h2>
                <h2 className="white">Mechanical Engineering Intern</h2>
                <p>Design, manufacture, and implementation of a carbon filament winding tensioner for wrapping high-speed automotive rotors. 
                  Fabricated custom electronics enclosures.</p>
              </div>
              <div id="J2" className="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2021 / fall-2021"}} />
              {/* Jacobi Motors 1 */}
              <div id="J1" className="timeline-text left" style={{"grid-row-start": "item-3"}}>
                <h2>Jacobi Motors</h2>
                <h2 className="white">Test Engineering Intern</h2>
                <p>Conducted dynamometer testing of a prototype variable flux memory motor. Debugged and documented vehicle telemetry data graphical user interface.</p>
              </div>          
              <div id="J1" className="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2019 / fall-2019"}}/>
              {/* TREL */}
              <div id="TREL" className="timeline-text right" style={{"grid-row-start": "item-1"}}>
                <h2><a className="hyperlink-teal" href="https://www.texasrocketlab.com/" target="_blank" rel="noopener noreferrer">Texas Rocket Engineering Lab</a></h2>
                <h2 className="teal">(TREL)</h2>
                <h2 className="white">COPV Technical Engineer</h2>
                <p>Responsible for helium pressure vessel analysis. 
                  Optimizing Ansys ACP process to estimate carbon composite overwrap strain more quickly and accurately.</p>
              </div>
              <div id="TREL" className="timeline-block right" style={{background: "black", "grid-row": "fall-2021 / current"}} />
              {/* CMS */}
              <div id="CMS" className="timeline-text right" style={{"grid-row-start": "item-2"}}>
                <h2><a className="hyperlink-teal" href="https://www.custommedshields.com/" target="_blank" rel="noopener noreferrer">Custom Medical Shields</a></h2>
                <h2 className="white">Founder</h2>
                <p>Provided custom face shields for professionals with specialized eyewear during the pandemic. 
                  Managed design, manufacture (CNC routing), and quality control of shields distributed to customers in six states.
                </p>
              </div>
              <div id="CMS" className="timeline-block right" style={{background: "white", "grid-row": "summer-2020 / summer-2021"}} />
              {/* FTC */}
              <div id="FTC" className="timeline-text right" style={{"grid-row-start": "item-3"}}>
                <h2>FIRST Tech Challenge</h2>
                <h2>Team 9048: <i>The Philobots</i></h2>
                <h2 className="white">Team Lead</h2>
                <p>Led the technical training, team leadership, and robot systems integration on the eleven-student team. Design and manufacture of robot deposit system each year.</p>
              </div>
              <div id="FTC" className="timeline-block right" style={{background: "red", "grid-row": "summer-2020 / fall-2017"}} />
            </div>      
          </>
        </Fade>
      </section>  



      <Fade>
        <section className="solid" style={{"padding-top":"4rem"}}>
          <div className="title">
                <h1>Certifications</h1> 
                <h2 className="white">I am dedicated to applying and improving my design software skills.</h2>
          </div>
          <div class = "certifications">
            <a aria-label="CSWE" href="https://www.credly.com/badges/9001baf8-d0aa-4e08-9c30-8bfec61c5f06?source=linked_in_profile" style={{"grid-area": "CSWE"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWE.png"/>
            </a>
            <a aria-label="CSWP-SU" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GMXN7F4LHU" style={{"grid-area": "CSWPSU"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWPSU.png"/>
            </a>
            <a aria-label="CSWP-WD" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EA3LZM2SHX" style={{"grid-area": "CSWPWD"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWPWD.png"/>
            </a>
            <a aria-label="CSWP-SM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9X46YV7SGN" style={{"grid-area": "CSWPSM"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWPSM.png"/>
            </a>
            <a aria-label="CSWP-DT" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HB4PUKCL3X" style={{"grid-area": "CSWPDT"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWPDT.png"/>
            </a>
            <a aria-label="CSWP" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MTASED3NUX" style={{"grid-area": "CSWP"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWP.png"/>
            </a>
            <a aria-label="CSWA" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-XAAABWJ6S6" style={{"grid-area": "CSWA"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWA.png"/>
            </a>
            <a aria-label="CSWA-AM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GH5CQXA6S2" style={{"grid-area": "CSWAAM"}} className="badge" target="_blank" rel="noopener noreferrer">
              <StaticImage objectFit="contain" src="../img/CSWAAM.png"/>
            </a>
          </div>
        </section>
      </Fade>

      <Fade>
        <>
          <div className="title" style={{"margin-top": "10rem"}}>
            <h1>Skills</h1>
          </div>
          <div className="skills">
            <div className="skill">
              <FontAwesomeIcon color="#57a19a" size="4x" icon={faShapes} />
              <h2 className="white skill-header">3D Printing</h2>
              <p>Adept at maintaining, running, and designing for SLA and FDM 3D printers.</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon color="#57a19a" size="4x" icon={faRulerCombined} />
              <h2 className="white skill-header">Machining</h2>
              <p>Experienced with DFM, GD&T, hand-programming G-code, and Fusion 360 and HSMWorks CAM.</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon color="#57a19a" size="4x" icon={faCogs} />
              <h2 className="white skill-header">CAD Design</h2>
              <p>Proficient in Solidworks, familiar with Fusion 360. Capable of resilient modeling strategy for capturing design intent and working in teams.</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon color="#57a19a" size="4x" icon={faCube}/>
              <h2 className="white skill-header">Rendering</h2>
              <p>Skilled in photorealistic model rendering and animation in Keyshot.</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon color="#57a19a" size="4x" icon={faMicrochip} />
              <h2 className="white skill-header">Circuit Design</h2>
              <p>Working knowledge in KiCAD for power electronics design.</p>
            </div>
          </div>
        </>
      </Fade>

      <Fade>
        <section className="box">
          <h2 className="white title">Any questions? <Link to="/contact" className="hyperlink-teal underline">Contact me!</Link></h2>
        </section>
      </Fade>

    </Layout>
  );
};

export default IndexPage;

//funny age approximation.
var today = new Date();
var age = today.getFullYear() - 2004;
if (today.getMonth() > 2) age++;
