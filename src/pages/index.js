import React from "react";
import { Fade } from "react-reveal";
import {Helmet} from "react-helmet";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCogs, faRulerCombined, faShapes, faMicrochip, faCube } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";


const IndexPage = () => {
  return (
    
    <Layout>  
      <Helmet>
        <title>Home | Kevin Yu</title>
        <meta name="description" content="Kevin Yu's Engineering Portfolio Home Page" />
        <meta name="robots" content="all" />
        <html lang="en" />
      </Helmet>

      <section className="">
        <div className="max-w-screen-xl h-screen mx-auto">
          <div className="my-36 mx-12 flex flex-col justify-start gap-20 md:flex-row md:gap-10">
            <div className="my-auto">
              <h1 className="mb-10 text-5xl text-teal-100 font-bold animate-floating">Hey, I'm Kevin.</h1>
              <h2 className="text-xl max-w-xl">
                I'm an {age} year old mechanical engineering student at
                the{" "}
                <a className="text-teal-100 hover:text-teal-200" href="https://cockrell.utexas.edu/" target="_blank" rel="noopener noreferrer">
                  University of Texas
                </a>
                {" "}with a specialization in mechatronics.
              </h2>
            </div>
            <StaticImage className="mr-0 ml-auto rounded-3xl" src="../img/pfp.jpg" />
          </div>
          <div className="">
            <hr className="my-12 mx-auto w-8/12 h-px border-teal-100 animate-stretch"/>
            <h2 className="my-12 mx-auto w-10/12 text-white text-lg text-center">I'm passionate about building cross-displinary engineering projects to make things greener, more efficient, and more integrated.
              I've worked with EV motors, created specialized medical PPE, and immersed myself in collegiate rocketry. Please check out my{" "}
            <Link to="/projects" className="text-teal-100 hover:text-teal-200">projects</Link>
              {" "}or view my online curriculum vitae below!</h2> 
          </div>
        </div>
        <div className="-mt-72 mb-20 text-center hidden md:block">
          <a className="animate-appear" href="#experience" aria-label="Experience timeline">
            <FontAwesomeIcon color="#81e5d9" size="4x" icon={faArrowCircleDown} className="hover:text-white" />
          </a>
        </div>
      </section>

      <div id="experience">
        <div className="pt-10 -mt-10" />
      </div>

      <section className="bg-gradient-to-b from-midnight-200 to-midnight-100">
        <Fade>
          <div className="max-w-screen-xl mx-auto pt-20 pb-48">
            <div className="mb-24 text-center">
                  <h1 className="mb-6 text-teal-100 text-5xl">Experience</h1>
                  <h2 className="text-xl">I have had the privilege of working with many extraordinary design teams.</h2>
            </div>
            <div className="w-full h-[1480px] mx-auto px-12 timeline">
              <hr className="centerline" />
              {/* Year markers */}
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2021"}}>2021</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2021"}} />
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2020"}}>2020</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2020"}} />
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2019"}}>2019</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2019"}} />
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2018"}}>2018</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2018"}} />
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
                <h2 className="text-teal-100 text-xl hover:text-teal-200"><a className="hyperlink-teal" href="https://www.longhornracing.org/electric-vehicle" target="_blank" rel="noopener noreferrer">Longhorn Racing Electric<br/>(Formula SAE)</a></h2>
                <h2 className="text-xl">Battery Engineer</h2>
                <p className="text-gray-300">Design of structural six-segment battery case and high voltage electronics enclosure. Mechanical and electrical design of vehicle low-voltage battery system.</p>
              </div>
              <div id="LHR" className="timeline-block left" style={{background: "#BF5700", "grid-row": "fall-2021 / current"}} />
              {/* Jacobi Motors 2 */}
              <div id="J2" className="timeline-text left" style={{"grid-row-start": "item-2"}}>
                <h2 className="text-teal-100 text-xl">Jacobi Motors</h2>
                <h2 className="text-xl">Mechanical Engineering Intern</h2>
                <p className="text-gray-300">Design, manufacture, and implementation of a carbon filament winding tensioner for wrapping high-speed automotive rotors. 
                  Fabricated custom electronics enclosures.</p>
              </div>
              <div id="J2" className="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2021 / fall-2021"}} />
              {/* Jacobi Motors 1 */}
              <div id="J1" className="timeline-text left" style={{"grid-row-start": "item-3"}}>
                <h2 className="text-teal-100 text-xl">Jacobi Motors</h2>
                <h2 className="text-xl">Test Engineering Intern</h2>
                <p className="text-gray-300">Conducted dynamometer testing of a prototype variable flux memory motor. Debugged and documented vehicle telemetry data graphical user interface.</p>
              </div>          
              <div id="J1" className="timeline-block left" style={{background: "royalblue", "grid-row": "summer-2019 / fall-2019"}}/>
              {/* TREL */}
              <div id="TREL" className="timeline-text right" style={{"grid-row-start": "item-1"}}>
                <h2 className="text-teal-100 text-xl hover:text-teal-200"><a className="hyperlink-teal" href="https://www.texasrocketlab.com/" target="_blank" rel="noopener noreferrer">Texas Rocket Engineering Lab<br/>(TREL)</a></h2>
                <h2 className="text-xl">COPV Technical Engineer</h2>
                <p className="text-gray-300">Responsible for helium pressure vessel analysis. 
                  Optimizing Ansys ACP process to estimate carbon composite overwrap strain more quickly and accurately.</p>
              </div>
              <div id="TREL" className="timeline-block right" style={{background: "black", "grid-row": "fall-2021 / current"}} />
              {/* CMS */}
              <div id="CMS" className="timeline-text right" style={{"grid-row-start": "item-2"}}>
                <h2 className="text-teal-100 text-xl hover:text-teal-200"><a className="hyperlink-teal" href="https://www.custommedshields.com/" target="_blank" rel="noopener noreferrer">Custom Medical Shields</a></h2>
                <h2 className="text-xl">Founder</h2>
                <p className="text-gray-300">Provided custom face shields for professionals with specialized eyewear during the pandemic. 
                  Managed design, manufacture (CNC routing), and quality control of shields distributed to customers in six states.
                </p>
              </div>
              <div id="CMS" className="timeline-block right" style={{background: "white", "grid-row": "summer-2020 / summer-2021"}} />
              {/* FTC */}
              <div id="FTC" className="timeline-text right" style={{"grid-row-start": "item-3"}}>
                <h2 className="text-teal-100 text-xl">FIRST Tech Challenge<br/>Team 9048: <i>The Philobots</i></h2>
                <h2 className="text-xl">Team Lead</h2>
                <p className="text-gray-300">Led the technical training, team leadership, and robot systems integration on the eleven-student team. Design and manufacture of robot deposit system each year.</p>
              </div>
              <div id="FTC" className="timeline-block right" style={{background: "red", "grid-row": "summer-2020 / fall-2017"}} />
            </div>      
          </div>
        </Fade>
      </section>  

      <Fade>
        <section className="bg-midnight-200">
          <div className="max-w-screen-xl mx-auto py-20">

            <div className="mb-16 text-center">
                  <h1 className="mb-6 text-teal-100 text-5xl">Certifications</h1> 
                  <h2 className="text-xl">I am dedicated to applying and improving my design software skills.</h2>
            </div>

            <div class = "mx-6 grid grid-cols-7 grid-rows-2 place-items-center">
              <a aria-label="CSWE" href="https://www.credly.com/badges/9001baf8-d0aa-4e08-9c30-8bfec61c5f06?source=linked_in_profile" className="hover:scale-[1.01] duration-150 ease-in-out col-span-2 row-span-2" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWE.png"/>
              </a>
              <a aria-label="CSWP" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MTASED3NUX" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWP.png"/>
              </a>
              <a aria-label="CSWP-SU" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GMXN7F4LHU" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWPSU.png"/>
              </a>
              <a aria-label="CSWP-WD" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EA3LZM2SHX" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWPWD.png"/>
              </a>
              <a aria-label="CSWP-SM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9X46YV7SGN" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWPSM.png"/>
              </a>
              <a aria-label="CSWP-DT" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HB4PUKCL3X" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWPDT.png"/>
              </a>
              <a aria-label="CSWA" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-XAAABWJ6S6" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWA.png"/>
              </a>
              <a aria-label="CSWA-AM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GH5CQXA6S2" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                <StaticImage objectFit="contain" src="../img/CSWAAM.png"/>
              </a>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <>
          <section>
            <div className="max-w-screen-xl mx-auto pt-28 pb-40">
              <div className="mb-16 text-center">
                <h1 className="text-teal-100 text-5xl">Skills</h1>
              </div>
              <div className="mx-6 grid grid-cols-5 grid-rows-1 gap-8">
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faShapes} />
                  <h2 className="text-xl">3D Printing</h2>
                  <p className="text-gray-300">Adept at maintaining, running, and designing for SLA and FDM 3D printers.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faRulerCombined} />
                  <h2 className="text-xl">Machining</h2>
                  <p className="text-gray-300">Experienced with DFM, GD&T, hand-programming G-code, and Fusion 360 and HSMWorks CAM.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faCogs} />
                  <h2 className="text-xl">CAD Design</h2>
                  <p className="text-gray-300">Proficient in Solidworks, familiar with Fusion 360. Capable of resilient modeling strategy for capturing design intent and working in teams.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faCube}/>
                  <h2 className="text-xl">Rendering</h2>
                  <p className="text-gray-300">Skilled in photorealistic model rendering and animation in Keyshot.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faMicrochip} />
                  <h2 className="text-xl">Circuit Design</h2>
                  <p className="text-gray-300">Working knowledge in KiCAD for power electronics design.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      </Fade>

      <Fade>
        <section className="max-w-screen-md mx-auto mb-12 p-3 bg-gray-800 rounded-xl border border-teal-100 text-center">
          <h2 className="my-auto">Any questions? <Link to="/contact" className="underline hover:text-teal-100">Contact me!</Link></h2>
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
