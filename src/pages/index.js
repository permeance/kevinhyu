import React from "react";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCogs, faRulerCombined, faShapes, faMicrochip, faCube, faTools, faCubes } from "@fortawesome/free-solid-svg-icons";

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
        <div className="h-[1180px] min-h-[1050px] md:max-w-screen-lg md:h-screen mx-auto">
          <div className="my-36 mx-6 flex flex-col justify-start gap-20 md:flex-row md:gap-10 md:mx-12">
            <div className="mx-auto my-auto md:ml-0">
              <h1 className="mb-10 text-4xl text-teal-100 font-bold animate-floating">Hey, I'm Kevin.</h1>
              <h2 className="text-lg max-w-xl">
                I'm a {age} year old mechanical engineering student at
                the{" "}
                <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://cockrell.utexas.edu/" target="_blank" rel="noopener noreferrer">
                  University of Texas
                </OutboundLink>
                {" "}with a specialization in mechatronics.
              </h2>
            </div>
            <StaticImage className="mx-auto ml-auto max-w-[460px] rounded-3xl md:mr-0" src="../img/pfp.png" />
          </div>
          <div className="">
            <hr className="my-12 mx-auto w-8/12 h-px border-teal-100 animate-stretch"/>
            <h2 className="my-12 mx-auto w-10/12 text-base text-gray-200 md:text-md md:text-center">I'm passionate about building cross-displinary engineering projects to make things greener, more efficient, and more integrated.
              I've worked with EV motors, created specialized medical PPE, and immersed myself in collegiate rocketry. Please check out my{" "}
            <Link to="/projects" className="text-teal-100 hover:text-teal-200">projects</Link>
              {" "}or view my online curriculum vitae below!</h2> 
          </div>
        </div>
        <div className="-mt-72 mb-20 text-center -z-20 hidden md:block">
          <OutboundLink className="animate-appear height-limited" href="#experience" aria-label="Experience timeline">
            <FontAwesomeIcon color="#81e5d9" size="4x" icon={faArrowCircleDown} className="hover:text-white" />
          </OutboundLink>
        </div>
      </section>

      <div id="experience">
        <div className="pt-10 -mt-10" />
      </div>

      <section className="bg-gradient-to-b from-midnight-200 to-midnight-100">
        <Fade>
          <div className="max-w-screen-lg mx-auto pt-20 pb-40">
            <div className="mb-24 mx-4 text-center">
                  <h1 className="mb-6 text-teal-100 font-bold text-4xl">Experience</h1>
                  <h2 className="text-lg">I have had the privilege of working with many extraordinary design teams.</h2>
            </div>
            <div className="w-full h-auto md:h-[900px] mx-auto px-6 timeline">
              <hr className="centerline" />
              {/* Year markers */}
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2023"}}>2023</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2023"}} />
              <p class = "timeline-year-text" style={{"grid-row-end": "spring-2022"}}>2022</p>
              <div class = "dot bg-teal-100 z-10" style={{"grid-row-end": "spring-2022"}} />
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
              <svg className="timeline-diag left" style={{"grid-row": "summer-2023 / midfall-2022"}} >
                  <line className= "timelineBar secondary" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left secondary" style={{"grid-row-start": "summer-2023"}}/>
              <hr className="timeline-segment left-right secondary" style={{"grid-row-start": "midfall-2022"}}/>
              <svg className="timeline-diag left" style={{"grid-row": "midsummer-2022 / spring-2022"}} >
                  <line className= "timelineBar secondary" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left secondary" style={{"grid-row-start": "midsummer-2022"}}/>
              <hr className="timeline-segment left-right secondary" style={{"grid-row-start": "spring-2022"}}/>              
              {/* Apptronik */}
              <svg className="timeline-diag left" style={{"grid-row": "midsummer-2021 / midsummer-2022"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left" style={{"grid-row-start": "midsummer-2021"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midsummer-2022"}}/>
              {/* Jacobi Motors 2 */}
              <svg className="timeline-diag left" style={{"grid-row": "midspring-2020 / midsummer-2021"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>
              <hr className="timeline-segment left-left" style={{"grid-row-start": "midspring-2020"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midsummer-2021"}}/>
              {/* Jacobi Motors 1 */}
              <svg className="timeline-diag left" style={{"grid-row": "midfall-2018 / midsummer-2019"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>  
              <hr className="timeline-segment left-left" style={{"grid-row-start": "midfall-2018"}}/>
              <hr className="timeline-segment left-right" style={{"grid-row-start": "midsummer-2019"}}/>
              {/* PMCL */}
              <svg className="timeline-diag right" style={{"grid-row": "summer-2023 / spring-2023"}} >
                  <line className= "timelineBar" x1="0" y1="100%" x2="100%" y2="0"/>
              </svg> 
              <hr className="timeline-segment right-right" style={{"grid-row-start": "summer-2023"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "spring-2023"}}/>
              {/* TREL */}
              <hr className="timeline-segment right-left secondary" style={{"grid-row-start": "midfall-2021"}}/>
              <svg className="timeline-diag right" style={{"grid-row": "summer-2022 / fall-2022"}} >
                  <line className= "timelineBar secondary" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg> 
              <hr className="timeline-segment right-right secondary" style={{"grid-row-start": "summer-2022"}}/>
              <hr className="timeline-segment right-left secondary" style={{"grid-row-start": "fall-2022"}}/>              
              <svg className="timeline-diag right" style={{"grid-row": "midsummer-2021 / midfall-2021"}} >
                  <line className= "timelineBar secondary" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg> 
              <hr className="timeline-segment right-right secondary" style={{"grid-row-start": "midsummer-2021"}}/>
              {/* Inventory */}
              <svg className="timeline-diag right" style={{"grid-row": "summer-2022 / midsummer-2020"}} >
                  <line className= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg> 
              <hr className="timeline-segment right-right" style={{"grid-row-start": "midsummer-2020"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "summer-2022"}}/>
              {/* CMS */}
              <svg className="timeline-diag right" style={{"grid-row": "midsummer-2019 / midfall-2020"}} >
                  <line className= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>  
              <hr className="timeline-segment right-right" style={{"grid-row-start": "midsummer-2019"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "midfall-2020"}}/>
              {/* FTC */}
              <svg className="timeline-diag right" style={{"grid-row": "midsummer-2018 / spring-2019"}} >
                  <line className= "timelineBar" x1="100%" y1="100%" x2="0" y2="0"/>
              </svg>
              <hr className="timeline-segment right-right" style={{"grid-row-start": "midsummer-2018"}}/>
              <hr className="timeline-segment right-left" style={{"grid-row-start": "spring-2019"}}/>
              {/* Blocks and Text */}
              {/* LHR */}
              <div id="LHR_text" className="timeline-text left multi" style={{"grid-row": "summer-2023 / fall-2021"}}>
                <div>
                  <h2 className="text-teal-100 text-sm mb-2 hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="https://www.longhornracing.org/electric-vehicle" target="_blank" rel="noopener noreferrer">Longhorn Racing Electric<br/>(Formula SAE)</OutboundLink></h2>
                  <i className="text-gray-400 text-sm md:hidden">Fall 2021 - Present</i>
                  <h2 className="text-sm my-2">Powertrain Lead</h2>
                  <p className="text-gray-300 text-xs">Responsible for battery, cooling, drivetrain, and enclosures subsystems.</p>
                </div>
                <div>
                  <h2 className="text-sm mb-2">Battery Engineer</h2>
                  <p className="text-gray-300 text-xs">Design of structural six-segment battery case and high voltage electronics enclosures.</p>
                </div>
              </div>
              <div id="LHR" className="timeline-block two" style={{background: "#BF5700", "grid-row": "summer-2022 / current"}} />
              <div id="LHR" className="timeline-block two" style={{background: "#BF5700", "grid-row": "fall-2021 / summer-2022"}} />
              {/* TREL */}
              <div id="TREL_text" className="timeline-text right multi" style={{"grid-row": "summer-2022 / fall-2020"}}>
                <div>
                  <h2 className="text-teal-100 text-sm mb-2 hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="https://www.texasrocketlab.com/" target="_blank" rel="noopener noreferrer">Texas Rocket Engineering Lab<br/>(TREL)</OutboundLink></h2>
                  <i className="text-gray-400 text-sm md:hidden">Fall 2021 - Present</i>
                  <h2 className="text-sm my-2">System Integration Lead</h2>
                  <p className="text-gray-300 text-xs">Leading full rocket integration efforts through final design verification.</p>
                </div>
                <div>
                  <h2 className="text-sm mb-2">COPV Engineer</h2>
                  <p className="text-gray-300 text-xs">Responsible for helium pressure vessel overwrap strain analysis.</p>
                </div>
              </div>
              <div id="TREL" className="timeline-block three" style={{background: "black", "grid-row": "midspring-2022 / current"}} />
              <div id="TREL" className="timeline-block three" style={{background: "black", "grid-row": "fall-2021 / midspring-2022"}} />
              {/* PMCL */}
              <div id="PMCL" className="timeline-text right" style={{"grid-row": "summer-2023 / summer-2022"}}>
                <h2 className="text-teal-100 text-sm hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="http://sites.utexas.edu/pmcl/" target="_blank" rel="noopener noreferrer">Precision Mechatronics and Control Lab<br/>(PMCL)</OutboundLink></h2>
                <i className="text-gray-400 text-sm md:hidden">Fall 2022 - Present</i>
                <h2 className="text-sm">Researcher</h2>
                <p className="text-gray-300 text-xs">Design and implementation of a novel magnetically steerable cathether.</p>
              </div>
              <div id="PMCL" className="timeline-block four" style={{background: "#FFD700", "grid-row": "midfall-2022 / current"}} />
              {/* Apptronik */}
              <div id="Apptronik" className="timeline-text left" style={{"grid-row-start": "midsummer-2021"}}>
                <h2 className="text-teal-100 text-sm hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="https://apptronik.com/" target="_blank" rel="noopener noreferrer">Apptronik</OutboundLink></h2>
                <i className="text-gray-400 text-sm md:hidden">Summer 2022</i>
                <h2 className="text-sm">Mechanical Engineering Intern</h2>
                <p className="text-gray-300 text-xs">Design and fabrication of hand and foot end effectors for humanoid robot effort.</p>
              </div>
              <div id="Apptronik" className="timeline-block one" style={{background: "black", "grid-row": "summer-2022 / fall-2022"}} />
              {/* Inventory */}
              <div id="Inventory" className="timeline-text right" style={{"grid-row-start": "midsummer-2020"}}>
                <h2 className="text-teal-100 text-sm hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="https://www.me.utexas.edu/" target="_blank" rel="noopener noreferrer">Mechanical Engineering Department</OutboundLink></h2>
                <i className="text-gray-400 text-sm md:hidden">Spring 2022 - Fall 2022</i>
                <h2 className="text-sm">Inventory Control Technician</h2>
                <p className="text-gray-300 text-xs">Managing logistics of department item transfers, new orders, and surplusing.</p>
              </div>
              <div id="Inventory" className="timeline-block four" style={{background: "purple", "grid-row": "spring-2022 / midfall-2022"}} />
              {/* Jacobi Motors 2 */}
              <div id="J2" className="timeline-text left" style={{"grid-row-start": "midspring-2020"}}>
                <h2 className="text-teal-100 text-sm">Jacobi Motors</h2>
                <i className="text-gray-400 text-sm md:hidden">Summer 2021</i>
                <h2 className="text-sm">Mechanical Engineering Intern</h2>
                <p className="text-gray-300 text-xs">Design and implementation of a carbon filament winding tensioner for wrapping automotive rotors.</p>
              </div>
              <div id="J2" className="timeline-block two" style={{background: "royalblue", "grid-row": "summer-2021 / fall-2021"}} />
              {/* CMS */}
              <div id="CMS" className="timeline-text right" style={{"grid-row-start": "midsummer-2019"}}>
                <h2 className="text-teal-100 text-sm hover:text-teal-200"><OutboundLink className="hyperlink-teal" href="https://www.custommedshields.com/" target="_blank" rel="noopener noreferrer">Custom Medical Shields</OutboundLink></h2>
                <i className="text-gray-400 text-sm md:hidden">Spring 2020 - Spring 2021</i>
                <h2 className="text-sm">Founder</h2>
                <p className="text-gray-300 text-xs">Provided custom face shields for professionals with specialized eyewear during the pandemic.
                </p>
              </div>
              <div id="CMS" className="timeline-block three" style={{background: "gray", "grid-row": "summer-2020 / summer-2021"}} />
              {/* Jacobi Motors 1 */}
              <div id="J1" className="timeline-text left" style={{"grid-row-start": "midfall-2018"}}>
                <h2 className="text-teal-100 text-sm">Jacobi Motors</h2>
                <i className="text-gray-400 text-sm md:hidden">Summer 2019</i>
                <h2 className="text-sm">Test Engineering Intern</h2>
                <p className="text-gray-300 text-xs">Conducted dynamometer testing of a prototype variable flux memory motor.</p>
              </div>          
              <div id="J1" className="timeline-block two" style={{background: "royalblue", "grid-row": "summer-2019 / fall-2019"}}/>
              {/* FTC */}
              <div id="FTC" className="timeline-text right" style={{"grid-row-start": "midsummer-2018"}}>
                <h2 className="text-teal-100 text-sm">FIRST Tech Challenge<br/>Team 9048: <i>The Philobots</i></h2>
                <i className="text-gray-400 text-sm md:hidden">Fall 2017 - Spring 2020</i>
                <h2 className="text-sm">Team Lead</h2>
                <p className="text-gray-300 text-xs">Led the technical training, team leadership, and robot systems integration on eleven-student team.</p>
              </div>
              <div id="FTC" className="timeline-block three" style={{background: "red", "grid-row": "summer-2020 / fall-2017"}} />
            </div>      
          </div>
        </Fade>
      </section>  

      <Fade>
        <section className="bg-midnight-200">
          <div className="max-w-[900px] mx-auto py-20">
            <div className="mb-16 mx-4 text-center">
                  <h1 className="mb-6 text-teal-100 font-bold text-4xl">Certifications</h1> 
                  <h2 className="text-lg">I am dedicated to applying and improving my design software skills.</h2>
            </div>
            <div className = "max-w-[480px] mx-auto px-4 grid grid-cols-2 grid-auto-rows gap-3 md:max-w-full md:h-auto md:px-16 md:grid-cols-7 md:grid-rows-2 md:place-items-stretch place-items-start">
              <div className ="w-56 md:w-auto col-span-2 row-span-1 mx-auto md:w-auto md:mx-2 md:col-span-2 md:row-span-2 md:my-auto hover:scale-[1.01] duration-150 ease-in-out">
                <OutboundLink aria-label="CSWE" href="https://www.credly.com/badges/9001baf8-d0aa-4e08-9c30-8bfec61c5f06?source=linked_in_profile" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWE.png"/>
                </OutboundLink>
              </div>
              <div className="md:w-full flex flex-col mx-auto md:flex-row gap-2 md:col-span-5">
                <OutboundLink aria-label="CSWP" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MTASED3NUX" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWP.png"/>
                </OutboundLink>
                <OutboundLink aria-label="CSWP-SU" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GMXN7F4LHU" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWPSU.png"/>
                </OutboundLink>
                <OutboundLink aria-label="CSWP-WD" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EA3LZM2SHX" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWPWD.png"/>
                </OutboundLink>
                <OutboundLink aria-label="CSWP-SM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-9X46YV7SGN" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWPSM.png"/>
                </OutboundLink>
                <OutboundLink aria-label="CSWP-DT" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-HB4PUKCL3X" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWPDT.png"/>
                </OutboundLink>
              </div>
              <div className="md:w-full mx-auto flex flex-col md:flex-row gap-2 md:col-span-2">
                <OutboundLink aria-label="CSWA" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-XAAABWJ6S6" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWA.png"/>
                </OutboundLink>
                <OutboundLink aria-label="CSWA-AM" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-GH5CQXA6S2" className="hover:scale-[1.02] duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                  <StaticImage objectFit="contain" src="../img/CSWAAM.png"/>
                </OutboundLink>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section>
          <div className="max-w-screen-lg mx-auto pt-28 pb-20 sm:pb-40">
            <div className="mb-16 text-center">
              <h1 className="text-teal-100 font-bold text-4xl">Software Experience</h1>
            </div>
            <div className="mx-12 flex flex-col content-center gap-12 lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-8">
              <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-2">
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faCube}/>
                  <h2 className="text-lg">Rendering</h2>
                  <p className="text-gray-300 text-sm">Skilled in photorealistic model rendering and animation with <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.keyshot.com/" target="_blank" rel="noopener noreferrer">Keyshot Pro</OutboundLink> and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.javelin-tech.com/3d/photoview-360/" target="_blank" rel="noopener noreferrer">PhotoView 360</OutboundLink>.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faCogs} />
                  <h2 className="text-lg">CAD Design</h2>
                  <p className="text-gray-300 text-sm">Proficient in <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.solidworks.com/" target="_blank" rel="noopener noreferrer">SOLIDWORKS</OutboundLink>, familiar with <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.autodesk.com/products/fusion-360/overview" target="_blank" rel="noopener noreferrer">Fusion 360</OutboundLink> and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.autodesk.com/products/inventor/" target="_blank" rel="noopener noreferrer">Inventor</OutboundLink>. Experienced with making reusable, future-proof CAD models.</p>
                </div>
              </div>
              <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:col-span-2 sm:w-auto mx-auto">
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faCubes} />
                  <h2 className="text-lg">Analysis</h2>
                  <p className="text-gray-300 text-sm">Practical FEA experience with <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.ansys.com/products/structures/ansys-mechanical" target="_blank" rel="noopener noreferrer">Ansys Mechanical</OutboundLink> and composites analysis with <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.ansys.com/training-center/course-catalog/structures/introduction-to-ansys-composite-preppost" target="_blank" rel="noopener noreferrer">Ansys ACP</OutboundLink>.</p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faMicrochip} />
                  <h2 className="text-lg">Circuit Design</h2>
                  <p className="text-gray-300 text-sm">Working knowledge in <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.kicad.org/" target="_blank" rel="noopener noreferrer">KiCad</OutboundLink> for PCB design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>


      <Fade>
        <section>
          <hr className="h-0.5 bg-gray-800 w-full border-transparent"/>
          <div className="max-w-screen-lg mx-auto pt-28 pb-20 sm:pb-40">
            <div className="mb-16 text-center">
              <h1 className="text-teal-100 font-bold text-4xl">Practical Skills</h1>
            </div>
            <div className="mx-12 flex flex-col content-center gap-12 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
              <div className="flex flex-col gap-12 sm:col-span-2 sm:grid sm:grid-cols-2">
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faShapes} />
                  <h2 className="text-lg">3D Printing</h2>
                  <p className="text-gray-300 text-sm">Software experience with <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://formlabs.com/software/" target="_blank" rel="noopener noreferrer">Preform</OutboundLink>, <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.simplify3d.com/" target="_blank" rel="noopener noreferrer">Simplify3D</OutboundLink>, and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://ultimaker.com/software/ultimaker-cura" target="_blank" rel="noopener noreferrer">Cura</OutboundLink> slicers. Extensive experience running, maintaining, and diagnosing SLA and FDM prints.  </p>
                </div>
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faRulerCombined} />
                  <h2 className="text-lg">Machining</h2>
                  <p className="text-gray-300 text-sm">Skilled in DFM, GD&T, hand-programming g-code, and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.autodesk.com/products/hsmworks/overview" target="_blank" rel="noopener noreferrer">HSMWorks</OutboundLink> and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.autodesk.com/products/fusion-360/overview" target="_blank" rel="noopener noreferrer">Fusion360</OutboundLink> CAM. Practical experience with <OutboundLink className="text-teal-100 hover:text-teal-200" href="http://linuxcnc.org/" target="_blank" rel="noopener noreferrer">LinuxCNC</OutboundLink>, <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.machsupport.com/software/mach3/" target="_blank" rel="noopener noreferrer">Mach3</OutboundLink>, and <OutboundLink className="text-teal-100 hover:text-teal-200" href="https://www.haascnc.com/productivity/control.html" target="_blank" rel="noopener noreferrer">Haas Control</OutboundLink> for CNC milling.</p>
                </div>
              </div>
              <div className="sm:col-span-2 sm:w-1/2 sm:mx-auto lg:col-span-1 lg:w-auto">
                <div className="flex flex-col gap-2 text-center items-center gap-4">
                  <FontAwesomeIcon color="#57a19a" size="4x" icon={faTools} />
                  <h2 className="text-lg">Shop Tools</h2>
                  <p className="text-gray-300 text-sm">Experienced with basic shop tools: manual mills, lathes, bandsaws, drop saws, grinders, drill presses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section className="max-w-screen-sm mx-auto">
          <div className="mx-4 mb-12 p-3 bg-gray-800 rounded-xl border border-teal-100 text-center">
            <h2 className="my-auto text-sm">Any questions? <Link to="/contact" className="underline hover:text-teal-100">Contact me!</Link></h2>
          </div>
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
