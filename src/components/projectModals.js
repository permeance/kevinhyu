import React from "react";
import Modal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import websiteResize from "../../projects/media/website-resize.gif";
import keyboardAnimation from "../../projects/media/keyboard-animation.gif";
import printing from "../../projects/media/printer-printing.gif";
import skystoneDeposit from "../../projects/media/skystone-deposit.gif";
import mecanumPractice from "../../projects/media/mecanum-practice.gif";
import pathfinderOld from "../../projects/media/pathfinder-old.gif";
import pathfinderPursuit from "../../projects/media/pathfinder-pursuit.gif";

import Video from "../components/video";

class ProjectModals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activeModal: "",
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(val) {
    this.setState({ activeModal: val });
    this.setState({ showModal: true });

    document.body.style.overflow = "hidden";
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ showModal: "" });

    document.body.style.overflow = "scroll";
  }

  render() {
    return (
      <>
        <div
          className="modalTile"
          aria-label="website"
          onClick={() => this.handleOpenModal("website")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/website-timeline.jpg"
          />
          <h1 className="text-lg text-teal-100">
            <u>www.kevinhyu.com</u>
          </h1>
          <i className="text-gray-400">Fall 2021</i>
          <p className="text-gray-300">
            A fast, responsive static site built with GatsbyJS, React, and
            TailwindCSS.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "website"}
          onRequestClose={this.handleCloseModal}
          contentLabel="website modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">Website</h1>
            <h2 className="text-lg text-gray-300 text-center">
              A fast, responsive static site built with GatsbyJS, React, and
              TailwindCSS.
            </h2>
            <p>
              <i>Hello World!</i>
            </p>
            <p>
              This website has been a major ambition for me—I have always wanted
              to get into frontend design and create a great visual portfolio
              for displaying my projects. Over the winter break, I finally
              committed to learning JSX, HTML, and CSS to design this website.
            </p>
            <p>
              Introducing:{" "}
              <Link className="text-teal-100 hover:text-teal-200" to="/">
                www.kevinhyu.com
              </Link>
              .
            </p>
            <p>
              It's built from scratch and deployed with{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
              , a static site generator and framework based on{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              and{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL
              </a>
              . Gatsby has a ton of built-in optimization – it prefetches all
              content and optimizes media automatically so that load times are
              practically instantaneous. With a bit of manual optimization, I
              was able to obtain a nearly perfect performance score on GTMetrix
              and Lighthouse!
            </p>

            <StaticImage
              className="modalImage"
              src="../../projects/media/website-score.jpg"
            />

            <p>
              On the styling side, I am using mostly{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind
              </a>{" "}
              with some additional CSS for the timeline and modal list. I
              developed this hybrid approach because Tailwind offers
              significantly easier responsive design while semantic CSS classes
              offer faster inherited site-wide changes.
            </p>
            <p>
              That way, if I want to change all the 10+ project tiles, I can
              change a single custom CSS class. At the same time, Tailwind
              allows me to change a single header class for this page and not
              cascade changes to every header.
            </p>
            <p>
              I also spent a lot of time making my website mobile-friendly (AKA
              responsive). Many websites often neglect mobile-first design,
              opting instead to force the website to zoom out and become
              unreadable. In fact, I had to completely re-do the website’s
              styling for mobile resolutions. Some changes were quite
              significant:
            </p>

            <img
              src={websiteResize}
              className="modalImage"
              alt="Responsive design demonstration"
            />

            <p>
              And although my site probably doesn’t need mobile-first design nor
              require blazing-fast load times, it is cool to make an overkill
              engineering portfolio, and I’m proud of it.
            </p>
            <p>
              If you would like to check out my website source code, please
              check out my{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                href="https://github.com/permeance/kevinhyu"
                target="_blank"
                rel="noopener noreferrer"
              >
                site's github repository
              </a>
              !
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="lv"
          onClick={() => this.handleOpenModal("lv")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/lv-board.jpg"
          />
          <h1 className="text-lg text-teal-100">
            Battery Management System PCB
          </h1>
          <i className="text-gray-400">Fall 2021</i>
          <p className="text-gray-300">
            Prototype high-current BMS and buck converter board for FSAE vehicle
            low voltage system.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "lv"}
          onRequestClose={this.handleCloseModal}
          contentLabel="lv modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Battery Management System PCB
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Prototype high-current BMS and buck converter board for FSAE
              vehicle low voltage system.
            </h2>
            <p>
              On our{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.longhornracing.org/electric-vehicle"
              >
                Formula SAE Electric
              </a>{" "}
              racecar, the fans, logic, and contactors are powered from a large
              DC-DC buck converter from our main 400V battery pack to prevent
              the need for a secondary dedicated lower-voltage battery pack.
            </p>
            <p>
              However, for the main battery to be connected to the tractive
              system, two large contactors must be initially powered from their
              normally-open configuration when activating the car. This requires
              the use of an additional onboard battery pack that should be as
              lightweight and small as possible. The pack should also be stable
              at 12V, be able to provide up to 12A peak current, and have a
              capacity of over 5Ah.
            </p>
            <p>
              In the past, the team has used a commercial off-the-shelf{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://dakotalithium.com/product/dakota-lithium-12v-7ah-battery-69/"
              >
                4S LiFePO4 (LFP) packs
              </a>
              . Since the nominal voltage of LFP cells are around 3.2V, this
              provides approximately 12.8V. However, these packs are very heavy
              and take up a large amount of rear space on the car.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/lv-lfp.jpg"
            />
            <p className="text-center text-gray-300">
              <i>Dakota Lithium 12V 7Ah Battery</i>
            </p>
            <p>
              Knowing that LFP cells are not particularly energy dense, I wanted
              to design a small buck converter board that could stepdown a
              custom 4S Samsung 40T NMC pack from its nominal 16.8V to a
              constant 12V. Additionally, the board could integrate a small 4S
              battery management system to limit current and prevent series
              undervoltage (essentially cell balancing on discharge).
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/lv-layout.jpg"
            />
            <p>
              The board I designed combines a Texas Instruments battery
              management system IC with a Vishay buck converter. Since I’m
              sizing the traces to handle 6A continuous current with ambient
              thermal dissipation, each copper zone needs to be huge relative to
              the size of the board. Therefore, I’ve opted to make the board
              double-thick 2oz copper to handle the heat of assembly and use. In
              reality, this board will likely experience a large spike in
              capacitor inrush current (up to 12A) and no idle current. However,
              in the event of battery shutoff, the fans and logic must be
              powered on the smaller battery for safety.
            </p>
            <p>
              I was particularly nervous about soldering the buck converter{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.protoexpress.com/blog/what-are-qfn-packages/"
              >
                QFN chip
              </a>
              , since all of the pads were underneath the chip. Initially, I
              made a few mistakes with overheating the boards with a hot-air
              gun. Since I was using non-leaded solder paste, the melting
              temperature required had to be very precisely controlled. However,
              the Texas Inventionworks laboratory had a proper reflow oven that
              worked great for soldering the entire second PCB.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/lv-board.jpg"
            />
            <p className="text-center text-gray-300">
              <i>
                Left: a burnt board that I tried to hot-air by hand. Right: a
                properly reflowed board after some practice.
              </i>
            </p>
            <p>
              After doing a rudimentary test with a multimeter, the board works
              as intended! However, it will likely not be used for this year's
              electric racecar because of the lack of time to rigorously test as
              a alternative to our time-tested LFP battery. Additionally, the
              board poses uncertainties with backflowing current, as it is in
              parallel with the DC/DC converter on the main battery.
            </p>
            <p>
              All in all, though, this project was a success and I learned a lot
              about power electronics design and soldering QFN chips. It was my
              first high-current board and I’m glad I taught myself thermal
              considerations when constructing and testing the PCB. I will
              definitely be using this board in the future to monitor and
              regular Li-ion packs.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="winder"
          onClick={() => this.handleOpenModal("winder")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/winder-tensioner.jpg"
          />
          <h1 className="text-lg text-teal-100">Carbon Filament Winder</h1>
          <i className="text-gray-400">Summer 2021</i>
          <p className="text-gray-300">
            High-tension winding tension control for carbon overwrap automotive
            rotors.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "winder"}
          onRequestClose={this.handleCloseModal}
          contentLabel="winder modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Carbon Filament Winder
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              High-tension winding tension control for carbon overwrap
              automotive rotors.
            </h2>
            <p>
              My final project at Jacobi Motors was a carbon filament winder
              tensioner that could effectively wind an automotive rotor for high
              speeds. The benefits of a rotor carbon overwrap is multifold:
            </p>
            <p className="text-gray-200 flex flex-col gap-3">
              <li>
                First, a radially preloaded rotor prevents it from expanding
                into the airgap from centrifugal forces. Therefore, even though
                the overwrap doesn’t contribute to the magnetic circuit, the
                airgap can be manufactured smaller, improving the motor’s
                overall torque density.
              </li>
              <li>
                A carbon overwrap rotor can hold the laminations and magnets
                separately, avoiding the need for the steel itself to have a
                notch to retain the magnets. This could improve the motor’s
                reluctance torque production and reduce the rotor mass.
              </li>
              <li>
                Finally, since carbon fiber has a higher tensile strength than
                silicon steel laminations, the rotor can spin faster without
                tearing itself apart.
              </li>
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/winder-hoop.jpg"
            />
            <p className="text-center text-gray-300">
              <i>
                All information and photos reproduced with permission.
                Intellectual property of Jacobi Motors LLC.
              </i>
            </p>
            <p>
              However, figuring out a way to preload carbon tow is significantly
              more difficult than it appears. In fact, commercial carbon winding
              is wound at only about 5 newtons just to compress the fibers for
              optimal placement. Then, for example, composite overwrap pressure
              vessels (COPVs) are hydraulically pressurized (
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Autofrettage"
              >
                autofrettaged
              </a>
              ) to preload the fibers from within. Of course, autofrettage is
              not an option for a motor rotor.
            </p>
            <p>
              The central problem was figuring out a way to tension the carbon
              filament (both dry and prepreg) without cause fraying in the
              strand. Dry filament easily frayed on even the slightest angled
              roller, while prepreg filament adhered itself to every pulley,
              making accurate tension control difficult.
            </p>
            <p>
              I first considered tensioning the carbon fiber spool itself.
              However, most of the spools were made of cardboard and had very
              different inner bores. I wanted to have the option of directly
              controlling the filament line itself, and the varying diameter of
              the spool made it difficult. Plus, the spool’s large radius would
              have required a huge braking torque to pull any tension in the
              line.
            </p>
            <p>
              I settled for a capstan drive that directly contacted the
              filament. According to my calculations and empirical static
              friction measurements, to pull 50 lbf, I could use an aluminum
              capstan pulley wound with a single revolution. With a 1-inch
              pulley, I needed to exert a 50 lb-in braking torque on the
              capstan. I eventually arrived on a{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://placidindustries.com/products/brakes/magnetic-particle-brakes/"
              >
                magnetic particle brake
              </a>{" "}
              because the braking torque could be controlled very precisely. In
              fact, its braking torque is nearly linear with its input voltage!
              With a 15 lb-in magnetic particle brake with a 14:48 reduction, I
              was able to achieve 51 lb-in torque on the capstan drive. Add a
              few pulleys to guide the spool into the end effector, and I was
              finished!
            </p>
            <StaticImage
              src="../../projects/media/winder-frayed.jpg"
              className="modalImage"
            />
            <p>
              <i>Not quite.</i>
            </p>
            <p>
              The full 360-degree revolution around the capstan caused the tow
              to shift sideways after a few rotations. The tow would begin
              rubbing, fraying, and eventually snap at the high tension.
            </p>
            <p>
              In the final weeks of my internship, I began the redesign process
              to make the tensioner as good as I could make it. Instead of
              wrapping the tow around the aluminum pulley a full revolution, I
              wound it partially around a piece of heat-shrink, keeping the{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Capstan_equation"
              >
                capstan holding force
              </a>{" "}
              the same. I moved the pulley locations to prevent any off-axis
              direction and milled the parts on my CNC on the same day. I also
              redesigned the spool holders to mount on the effector for a
              straighter wind path.
            </p>
            <p>
              Additionally, I added an electronics control panel that used an
              Arduino, MOSFET, and load cell for precise closed-loop PID tension
              control. I upgraded the winder’s control system with a dedicated
              4-axis Gecko stepper drive running on Mach3 from a laptop. This
              allows the winder to run on CNC lathe generated CAM or from
              handprogrammed subroutines.
            </p>
            <StaticImage
              src="../../projects/media/winder-heatshrink.jpg"
              className="modalImage"
            />
            <p>And the final product?</p>
            <StaticImage
              src="../../projects/media/winder-full.jpg"
              className="modalImage"
            />
            <StaticImage
              src="../../projects/media/winder-ladder.jpg"
              className="modalImage"
            />
            <p className="text-center text-gray-300">
              <i>4-axis ladder-wound rotor!</i>
            </p>
            <p>
              The final winder was able to accurately pull up to 30 lbf of
              tension, which exceeds the project requirements for about a
              magnitude cheaper than other commercial high-tension winders.
            </p>
            <p>
              Beyond 30 lbf may be achievable with dry 12K carbon fiber tow, but
              might require multiple capstans and a complicated feedforward
              braking control scheme to prevent sudden impacts and fraying.
              Moreover, multiple capstans would be difficult to control
              precisely because of the filament’s elongation hysteresis between
              capstans. I’m interested in developing this project further to
              determine the true limits of high-tension dry fiber winding!
            </p>
            <StaticImage
              src="../../projects/media/winder-pose.jpg"
              className="modalImage"
            />
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="keyboard"
          onClick={() => this.handleOpenModal("keyboard")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/keyboard-wiring.jpg"
          />
          <h1 className="text-lg text-teal-100">Mechanical Keyboard</h1>
          <i className="text-gray-400">Summer 2021</i>
          <p className="text-gray-300">
            Custom CNC milled aluminum chassis with hand-wired switches and
            microcontroller.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "keyboard"}
          onRequestClose={this.handleCloseModal}
          contentLabel="keyboard modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Mechanical Keyboard
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Custom CNC milled aluminum chassis with hand-wired switches and
              microcontroller.
            </h2>
            <p>
              The{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reddit.com/r/MechanicalKeyboards/"
              >
                mechanical keyboard community
              </a>{" "}
              is … interesting. First, there’s the consumer keyboard market for
              mass-manufactured keyboards from big brands like Logitech and
              Dell. For “keyboard enthusiasts,” there’s a smaller market for
              custom keyboards at exorbitant prices.
            </p>
            <p>
              Components of custom high-end keyboards, such as the keycaps,
              switches, PCB, and frame, are typically made in limited
              manufacturing runs that take months—or even years—to ship. To get
              these highly sought-after parts, one might expect to pay double or
              triple the part’s original price on the aftermarket.
            </p>
            <p>
              Of course, I wanted to see what the hype was all about. However, I
              didn’t have the budget nor the time to wait for preordering custom
              parts. Instead, I wanted to use my own manufacturing capabilities
              (CNC milling) and create the board with design-for-manufacturing
              (DFM) in mind.
            </p>
            <img
              className="modalImage"
              src={keyboardAnimation}
              alt="Keyboard exploded view animation"
            />
            <p className="text-gray-300 text-center">
              <i>Got a bit carried away with Keyshot animations...</i>
            </p>
            <p>
              My goal was to make the quietest mechanical keyboard possible. The
              biggest factors in a keyboard’s typing sound are the damping of
              the switch-mounting plate, the weight of the entire keyboard, and,
              of course, the switches themselves.
            </p>
            <p>
              I decided to use a FR4 plate for the switch plate because it was
              the easiest and quickest to outsource—I simply designed and
              exported the layout as a PCB. The square internal corners required
              for the press-fit switches would’ve made milling the board very
              difficult. The plate is sandwiched on top and bottom with
              Sorbothane, a great damping foam. Essentially, the plate is
              floating inside of the chassis to minimize any noise and rattle
              transferred to the base.
            </p>
            <p>
              Everything else--the polycarbonate midplate and the aluminum top
              and base--were easily manufactured on my CNC router.
            </p>
            <p>
              For the switches, I’m making two boards: one will be a gift, and
              have tactile U4 Boba switches. The other will have a custom
              frankenswitch (Aliaz switch housings combined with silent Cherry
              Red linear stems).
            </p>
            <p>
              Typically, keyboards are also made with custom PCBs to mount the
              switches. However, since I spent so much time isolating the switch
              plate from the base, a rigid PCB would have made the flexible
              gasket-mounted design counterproductive. Instead I decided to wire
              each switch individually with meticulously bent diodes and
              segmented wire...
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/keyboard-plate.jpg"
            />
            <p>
              ...and I didn't realize just how long that would take. Lubricating
              every single switch, gluing them in place, and soldering the
              matrix took well over 20 hours per board.
            </p>
            <p>
              However, it really was all worth it. I just had to solder on the
              Teensy 2.0 microcontroller, press-fit the USB-C adapter into my
              milled IO port, and the board was good to go.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/keyboard-wiring.jpg"
            />
            <p>
              And even though the solid aluminum frame blocks the beautiful
              wiring, the keyboard looks sleek and low profile. It feels great
              and makes nearly no noise at all!
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/keyboard-front.jpg"
            />
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="cms"
          onClick={() => this.handleOpenModal("cms")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/cms-dentists.jpg"
          />
          <h1 className="text-lg text-teal-100">Custom Medical Shields</h1>
          <i className="text-gray-400">Spring 2020 - Summer 2021</i>
          <p className="text-gray-300">
            Startup to address medical demand for solvent-resistant tailored
            face shields.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "cms"}
          onRequestClose={this.handleCloseModal}
          contentLabel="cms modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Custom Medical Shields
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Startup to address medical demand for solvent-resistant tailored
              face shields.
            </h2>
            <p>
              I started{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.custommedshields.com/"
              >
                Custom Medical Shields
              </a>{" "}
              with my sister to address a need for longer-length shields for
              professionals with specialized eyewear. Some of our customers are
              dentists with magnifying loupes, radiologists with large radiation
              glasses, and doctors that require shields that can stand up to
              harsh disinfectant sprays.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-wearing.jpg"
            />
            <p className="text-gray-300 text-center">
              <i>Two dentists from Frisco, Texas, wearing our shields.</i>
            </p>
            <p>
              Originally, I thought of creating a homemade face shield after
              assessing current commercial shields for my dad (a periodontist)
              to wear at his practice. Every available shield was laser-cut from
              acrylic, which fogged up immediately when sprayed with a
              disinfectant. Additionally, any magnifying loupes we tried were
              too long to wear with off-the-shelf shields.
            </p>
            <p>
              With a few revisions of feedback, I developed a good base design
              for the shield. Some of the selling points for the shields were:
            </p>
            <p className="text-gray-200 flex flex-col gap-3">
              <li>
                100% polycarbonate construction (excellent durability and
                chemical resistance)
              </li>
              <li>
                Downward shield twist to provide closer shield protection lower,
                while preserving a longer eye distance for specialized eyewear
              </li>
              <li>
                Made-to-order production leveraging in-house CNC routing for the
                shields and 3D printing for the bands.
              </li>
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-product.jpg"
            />
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-loupe.jpg"
            />
            <p>
              We launched the company in April 2020 right after school moved to
              virtual. Of course, at first, we did not have any orders. To pitch
              our brand, we began sending free shields to dentists in Austin.
              This began to pick up a lot of traffic on our site—within the
              first couple of weeks, we hit over $1,000 in revenue. And over the
              next few months, our operation expanded to sending shields to
              dentists in different states: Arizona, Florida, California, New
              York, and further. We even secured a deal with a local school
              district, Lake Travis ISD, to provide thirty shields for their
              in-person teachers!
            </p>
            <p>
              Learning how to scale production was a big learning opportunity.
              Some weeks we did not receive orders, and other weeks we would get
              big orders—some as large as 40 shields.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-shields.jpg"
            />
            <p>
              Since our business model relied on made-to-order production, we
              tried to streamline the manufacturing process. For example, all
              our clear polycarbonate shields were standardized across all
              models. This meant we could keep an inventory of a couple dozen
              shields on standby. This also meant we could purchase
              polycarbonate sheet in bulk from plastic suppliers.
            </p>
            <p>
              Additionally, we worked to make our routing and printing process
              as productive as possible. Two shields could be CNC routed in
              under three minutes, and two bands could be printed in less than
              an hour.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-routing.jpg"
            />
            <p>
              We paused our operation in May 2021 because I had to move to
              Houston for my second internship at Jacobi Motors. Altogether, we
              sold over 300 shields and donated nearly 250 shields.
            </p>
            <p>
              I wouldn't hesitate to call the company a complete success—we were
              able to gain repeat customers, generate a profit, and donate to
              clinics in need of PPEs.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cms-delivering.jpg"
            />
            <p className="text-gray-300 text-center">
              <i>Arriving at Manos de Christo, a nonprofit dental clinic.</i>
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="cnc"
          onClick={() => this.handleOpenModal("cnc")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/cnc-tooling.jpg"
          />
          <h1 className="text-lg text-teal-100">CNC Router</h1>
          <i className="text-gray-400">Spring 2020</i>
          <p className="text-gray-300">
            Custom enclosure, workholding, and control system for productive
            aluminum routing.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "cnc"}
          onRequestClose={this.handleCloseModal}
          contentLabel="cnc modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">CNC Router</h1>
            <h2 className="text-lg text-gray-300 text-center">
              Custom enclosure, workholding, and control system for productive
              aluminum routing.
            </h2>
            <p>It's hard to find a decent hobby-grade CNC router.</p>
            <p>
              Many popular CNC routers are belt or leadscrew-driven with
              unsupported round rails, or, worse, extrusion roller guides. They
              are impractical for holding practical tolerances on even plastics
              or wood.
            </p>
            <p>
              Before getting a CNC router, I did thorough research on the best
              CNC configurations under $5,000. The most rigid seemed to be
              Chinese 6040 gantry types which can be specified with proper
              linear rails and wide extrusions. I decided to buy a used{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.omiocnc.com/products/x6-2200l-usb.html"
              >
                Omio X6 2200L
              </a>{" "}
              with 20mm rails and C7 ballscrew after hearing good things about
              its performance in nonferrous metals.
            </p>
            <p>
              The unit arrived in a dysfunctional state: unusable control
              interface and measurable backlash on all axes. Plus, it lacked a
              cooling loop for the water-cooled spindle and a proper enclosure.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cnc-before.jpg"
            />
            <p>I set out to fix it.</p>
            <p>
              First, I added oversized balls to the ballscrews; this removed the
              small amount of travel backlash by preloading the nut against the
              screw. However, since the rolled screws were only C7 rated, I
              would expect to be out 0.002” of lead error over a foot of travel.
              I wasn’t concerned about this since I would only really require
              tight tolerances for interpolating bores less than about two
              inches in diameter. However, if I did need tighter tolerances, I
              could easily add a DRO glass linear scale to map the ballscrew.
            </p>
            <p>
              Next, I designed the cooling loop with a simple bucket, aquarium
              pump, and computer radiator sized for 750w of continuous heat
              dissipation. I ran into quite a bit of issues with purging the air
              from the system since the pump had very little static pressure.
              When I submerged the pump in the bucket of water though, the pump
              was able to successfully push water through the entire loop.
            </p>
            <p>
              It turned out the entire Chinese control unit was unusable; I
              decided to replace the unit with an open-source{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://buildbotics.com/"
              >
                Buildbotics controller
              </a>
              , 48V and 12V power supply, 2.2kW VFD, and compressed air
              solenoid. The Buildbotics control runs on a custom fork of
              LinuxCNC that uses a Raspberry Pi for fast microstepping.
            </p>
            <p>
              Finally, the enclosure. I designed the enclosure in SOLIDWORKS to
              be waterproof for brief flood cooling and chip collection. It is
              constructed with extrusions, aluminum and HDPE walls, and PETG
              windows. Every wall is sealed against the extrusion with a rubber
              gasket to seal the enclosure.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cnc-enclosure.jpg"
            />
            <StaticImage
              className="modalImage"
              src="../../projects/media/cnc-dust.jpg"
            />
            <p className="text-gray-300 text-center">
              <i>MDF + light chipload and DOC = literally just fog</i>
            </p>
            <p>
              With my upgrades, the CNC works reliably. I’ve been able to
              manufacture my robotics parts, work parts, and prototypes with the
              router. From Custom Medical Shields alone, it has already provided
              a return on investment.
            </p>
            <p>
              I’ve also learned a lot about machining, DFM, and CAM
              strategy--skills that are invaluable as a mechanical engineer.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/cnc-parts.jpg"
            />
            <p className="text-center text-gray-300 flex flex-col gap-1">
              <i>
                Fixture plate is a 25mm grid of tapped M5 holes and 50mm grid of
                10mm dowel pins.
              </i>
              <i>
                With the plate and a sacrificial acrylic sheet, simple parts can
                be milled in one setup.
              </i>
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="f4"
          onClick={() => this.handleOpenModal("f4")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/f4-top.jpg"
          />
          <h1 className="text-lg text-teal-100">F4 CADathon</h1>
          <i className="text-gray-400">Spring 2020</i>
          <p className="text-gray-300">
            One week FIRST Robotics Competition full-robot CAD competition.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "f4"}
          onRequestClose={this.handleCloseModal}
          contentLabel="f4 modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">F4 CADathon</h1>
            <h2 className="text-lg text-gray-300 text-center">
              One week FIRST Robotics Competition full-robot CAD competition.
            </h2>{" "}
            <p>
              {" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.chiefdelphi.com/t/2020-spring-special-f4-cadathon-results-posted/383527"
              >
                F4 CADathon
              </a>{" "}
              is a biannual CAD competition for FIRST Robotics Competition (FRC)
              students to practice designing a robot prior to build season. The
              rules were simple: design a robot in seven days that could compete
              in a new game created by the judges.
            </p>
            <p>
              Despite having never competed in FRC, I joined up with two friends
              to attempt the CADathon. We were up against the odds; the
              competition had over 100 teams vying to win, and we had zero
              experience in FRC robot design.
            </p>
            <p>
              Nevertheless, we were determined to win the final cash prize and
              put our CAD skills to the test. At the time, I was pursuing the{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.credly.com/badges/9001baf8-d0aa-4e08-9c30-8bfec61c5f06?source=linked_in_profile"
              >
                Certified SOLIDWORKS Expert
              </a>{" "}
              certification, so I was eager for any CAD practice that could
              prepare me for the certification exam.
            </p>
            <StaticImage
              className="h-72 w-72 mx-auto"
              src="../../projects/media/f4-gameday.jpg"
            />
            <p>
              The game, <i>Gameday</i>, has three components:
            </p>
            <p className="text-gray-200 flex flex-col gap-3">
              <li>
                Robots can shoot standard-sized footballs into a slot on the
                other side of the field.
              </li>
              <li>
                To score additional points, robots can pick up weight-plates
                (olympic discs) and place them on a center pole
              </li>
              <li>
                Finally, to traverse the field, robots should be under 27" to
                clear the center bar.
              </li>
            </p>
            <p>
              Over the next 7 days, we would put in over <b>150</b> manhours,
              push <b>32</b> revisions of the main assembly, design <b>6</b>{" "}
              subsystems, and place over <b>3000</b> parts.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/f4-side.jpg"
            />
            <p className="text-center text-gray-300">
              <i>Cloud rendered with Fusion 360.</i>
            </p>
            <p>
              The final robot includes a six-wheel tank drive, a
              linkage-deployed horizontal roller intake, heavy-duty boxtube
              lift, weight-plate suction gripper, roller funnelling transfer,
              cycloidal-gearbox turret, and an off-axis rotating shooter. I
              designed the shooter / transfer subassemblies and worked on the
              overall robot packaging.
            </p>
            <p>
              Every component fits neatly into the 30”x30”x27” maximum size and
              folds outwards for optimal shooting and lifting performance. Every
              part is custom designed using SOLIDWORKS and created with DFM in
              mind. Additionally, every single bolt and nut is placed into the
              assembly with space allocations for wire bends and management.
            </p>
            <p>
              If we were to fabricate this robot for real, we would not have any
              trouble manufacturing every part with conventional sheet metal and
              CNC milling.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/f4-back.jpg"
            />
            <p className="text-center text-gray-300">
              <i>
                And yes, we did name our team "Hot Poket" because we spent a lot
                of time pocketing lightening holes.
              </i>
            </p>
            <p>
              I’m honestly surprised with how much progress we made in seven
              days. In just a week, we were able to diagnose all the packaging
              decisions, create a simple yet capable robot, and even give the
              robot a distinct aesthetic.
            </p>
            <p>
              All in all, we earned{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/jJ2vtXRY18M?t=1400"
              >
                10th place
              </a>{" "}
              out of over 100 teams, the highest placing FRC rookies. I learned
              a ton through this experience: creating reusable CAD models,
              driving assemblies with reference sketches for rapid adjustments,
              and thinking ahead for potential changes.
            </p>
            <p>
              Looking back, learning how to <i>really</i> use CAD really
              requires putting in hundreds of hours struggling with the software
              and diagnosing part errors. These seven days in the CADathon were
              very frustrating and slow, but simultaneously productive for my
              growth as a CAD engineer.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="printer"
          onClick={() => this.handleOpenModal("printer")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/printer-toolhead.jpg"
          />
          <h1 className="text-lg text-teal-100">3D Printer Toolhead</h1>
          <i className="text-gray-400">Spring 2020</i>
          <p className="text-gray-300">
            High temperature dual-extrusion hot-swap toolhead for a Lulzbot 3D
            printer.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "printer"}
          onRequestClose={this.handleCloseModal}
          contentLabel="printer modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              3D Printer Toolhead
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              High temperature dual-extrusion hot-swap toolhead for a Lulzbot 3D
              printer.
            </h2>
            <p>
              In an FDM 3D printer, the printhead is the big factor in print
              reliability and quality. A poorly tuned extruder can cause failed
              prints from under or overextrusion, a bad heatbreak and heatsink
              can cause heat creep and filament jamming, and an improperly
              specified heatblock can cause thermal runaway issues or prevent
              the printer from reaching temperature.
            </p>
            <p>
              I use my 3D printer for production and occasional prototyping, so
              print reliability and repeatability is very important.
            </p>
            <p>
              I have recently had a lot of issues with the stock Lulzbot Taz
              printhead. First, filament would always stick to the block and
              cake onto the thermistor, often causing its thin wire to break.
              Also, the stock printhead was very poorly mounted—it could bend
              over a millimeter if caught on the edge of a part. Lastly, it only
              accepted 2.85mm filament, which is becoming harder and more
              expensive to source.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/printer-old.jpg"
            />
            <p>
              I decided to solve this problem by designing my own printhead that
              could reliably handle a variety of plastics. I used a dual
              extruder from Bondtech, Chimera hotend from E3D, titanium
              heatbreaks, nickel-coated heatblocks, and tool steel nozzles.
              Additionally, I included high-temperature PT100 thermistors and a
              bed-levelling BLTouch sensor.
            </p>
            <p>
              I designed the printhead mounts and fan ducts using my knowledge
              of the stock printhead’s shortcomings: its poor rigidity, cooling
              performance, and lack of bed levelling options.
            </p>
            <p>My custom printhead features:</p>
            <p className="text-gray-200 flex flex-col gap-3">
              <li>
                Dual extrusion (one nozzle for 500C and one for 300C to prevent
                plastic burnout)
              </li>
              <li>
                Non-stick heatblocks and abrasive-resistant nozzles for standard
                1.75mm filament
              </li>
              <li>Compact print cooling fan ducts</li>
              <li>
                Titanium heatbreak and oversized hotend fan to prevent high-temp
                heat creep
              </li>
              <li>BLTouch bed levelling</li>
              <li>Stiff polycarbonate mount located close to linear rods</li>
            </p>
            <StaticImage
              className="h-[80%] sm:max-w-[60%] sm:m-4 sm:mx-auto text-center rounded-lg"
              src="../../projects/media/printer-head.jpg"
            />
            <p>
              I had to revise the main extruder mount twice to maximize the
              printhead rigidity. Between revisions, I pushed the extruder body
              forward and ribbed the mount plate for greater stiffness.
            </p>
            <p>
              After I finished assembling the successful printhead, I swapped it
              on my printer and resumed production.
            </p>
            <p>
              So far, the printhead hasn’t failed running over 20 kilograms of
              high-temperature polycarbonate. It has already provided a return
              on investment from the increased print reliability avoiding wasted
              filament and scrapped parts.
            </p>
            <img
              className="modalImage"
              src={printing}
              alt="3D printing polycarbonate"
            />
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="skystone"
          onClick={() => this.handleOpenModal("skystone")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/skystone-front.jpg"
          />
          <h1 className="text-lg text-teal-100">
            Skystone (FIRST Tech Challenge)
          </h1>
          <i className="text-gray-400">Fall 2019 - Spring 2020</i>
          <p className="text-gray-300">
            Block-stacking robot with differential swerve drive, double-reverse
            four-bar lift, and planar 3 DoF SCARA.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "skystone"}
          onRequestClose={this.handleCloseModal}
          contentLabel="skystone modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">Skystone</h1>
            <h2 className="text-lg text-gray-300 text-center">
              Block-stacking robot with differential swerve drive,
              double-reverse four-bar lift, and planar 3 DoF SCARA.
            </h2>
            <p>
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=XiGB_8Ppnbs"
              >
                Skystone
              </a>{" "}
              was my favorite year in FIRST Tech Challenge.
            </p>
            <p>
              The game involves making robots stack 4”x8” stones in a skyscraper
              without toppling. Robots that could accomplish tall stacks had to
              be extraordinarily nimble and precise, and many of the most
              successful robots featured unique innovations.
            </p>
            <p>
              I led my eleven-person team to create not only the most successful
              competition robot in my robotics career so far, but also a robot
              that featured three unique subsystems never seen before in
              high-school competitive robotics.
            </p>
            <p>
              But before I dive into the design, here’s a quick cinematic video
              of our finished robot –
            </p>
            <div className="aspect-video md:w-[60%] md:m-4 md:mx-auto text-center rounded-lg ">
              <Video videoSrc="https://www.youtube.com/embed/43uAq9UHA_A" />
            </div>
            <p>We went all-out with the robot subsystem innovation:</p>
            <p className="text-gray-200 flex flex-col gap-3">
              <li>
                3 degree-of-freedom planar serial{" "}
                <a
                  className="text-teal-100 hover:text-teal-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/SCARA"
                >
                  SCARA
                </a>{" "}
                to manipulate stones outside the robot with precision
              </li>
              <li>
                Double reverse four-bar lift driven by a custom ring-rack gear
                for compactness, larger lift stroke, and higher torque
              </li>
              <li>
                Differential swerve drivebase allowing true holonomic driving
                and 100% pushing power in every direction
              </li>
            </p>
            <p>
              All three main subsystems were valuable to our competition
              performance. Our swerve drive allowed the robot to pursue defense
              and push the skyscraper foundation with ease. The SCARA allowed us
              to fine-tune and automate stone placement. The double-reverse
              four-bar lift helped with compact packaging and allowed us to lift
              the SCARA up to eight stones tall.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/skystone-render.jpg"
            />
            <p className="text-center text-gray-300">
              <i>SOLIDWORKS motion study + Keyshot 8</i>
            </p>
            <p>
              In addition to doing systems integration on the robot, I spent my
              time designing, manufacturing, and programming the deposit
              subsystem (SCARA and claw systems).
            </p>
            <p>
              First, getting the SCARA to work reliably was very difficult.
              Originally, I didn’t know how to make revolute joints stiff
              without precision-machined components. The first prototype had
              floppy joints because of the lack of axial preload. In the final
              prototype, I ended up doubling the axle support distance and
              shimming the thrust washers until the joint was sufficiently
              preloaded for the claw weight. This worked well, but introduced
              another issue:
            </p>
            <p>
              Parasitic joint motion. Because each of the three DoF were
              serially actuated but belted coaxially through other joints, any
              large torque in another axis would cause its coaxial joint to move
              slightly within the servo’s backlash. Because I had to implement
              joint preload, essentially increasing the static friction of each
              joint, this quickly became an issue with precisely manipulating
              the SCARA.
            </p>
            <p>
              After chasing down multiple conceptual solutions for this control
              issue, I eventually greased the pivots and tightened the backlash
              by adjusting the gear and belt center distances. This removed a
              significant amount of parasitic joint motion. Now that the
              physical hardware was reliable enough, the control system needed
              to be quick and precise for the SCARA to work properly. A big
              concern I had was the reliability of the SCARA passthrough:
            </p>
            <img
              className="modalImage"
              src={skystoneDeposit}
              alt="Passthrough and gripper positioning with SCARA"
            />
            <p>
              There is a 6” gap between the lift that the 4” stone must
              traverse. This meant that all three axes must be perfectly dialed
              in for the pass-through to be successful.
            </p>
            <p>
              Working with my robotics coach, we implemented backlash
              compensation for every servo joint and mapped every interval of
              the passthrough. To activate the passthrough, the controller would
              step through every interval sending a command to the servos and
              wait a specified time delay.
            </p>
            <p>
              We automated the passthrough this way because our robot’s
              controller relied on sending open-loop signals to the servos,
              which completed the operation with a closed-loop PID controller.
              However, the controller had no idea if the servos arrived at
              position or not. In the past, we have tried running a separate
              closed loop off the servo with velocity commands and an external
              encoder, but the encoder latency and PID plant refresh rate was
              too slow to be usable. The position mapping was reliable enough
              for competition.
            </p>
            <p>
              On the driver-controlled delivery side, we implemented inverse
              kinematics for the 3 DoF system. On our controller, one joystick
              controls the XY velocity of the gripper, which is transformed into
              two linkage velocity commands. The other joystick controls the
              rotation of the gripper for horizontally-placed stones. Since the
              linkages were serially actuated, the kinematics were quite simple
              and there were zero singularities along its travel. We just had to
              check that the bounds of the position command were within the
              SCARA’s physical travel.
            </p>
            <p>
              The final competition-ready SCARA was just as quick as any robot’s
              passthrough mechanism but added the flexibility to adjust a stone
              inside of a cylindrical bounding box. Before the SCARA deposit, we
              were toppling skyscrapers nearly every match because of driver
              placement errors. However, with the adjustable deposit mechanism,
              we didn’t topple a stack — ever.
            </p>
            <StaticImage
              className="md:w-[60%] md:m-4 md:mx-auto text-center rounded-lg"
              src="../../projects/media/skystone-scara.jpg"
            />
            <p className="text-center text-gray-300">
              <i>Early season prototype of the SCARA and claw.</i>
            </p>
            <p>
              I loved designing the deposit system on this robot. It was so fun
              researching control theory and learning about industrial robots to
              apply concepts to our competition robot.
            </p>
            <p>
              I have to admit – I thought it was ambitious to pursue a multi-DoF
              arm to stack stones for this game challenge. However, this project
              turned out to be a huge success and a big performance boost for
              our robot. The SCARA was one of the three innovations that made
              our robot stand out.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="mecanum"
          onClick={() => this.handleOpenModal("mecanum")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/mecanum-top.jpg"
          />
          <h1 className="text-lg text-teal-100">
            Eight-Wheel Mecanum Drivetrain
          </h1>
          <i className="text-gray-400">Summer 2019</i>
          <p className="text-gray-300">
            Low-profile holonomic robot drivetrain.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "mecanum"}
          onRequestClose={this.handleCloseModal}
          contentLabel="mecanum modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Eight-Wheel Mecanum Drivetrain
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Low-profile holonomic robot drivetrain.
            </h2>
            <p>
              In FIRST Tech Challenge, all robots must fit within an 18” sizing
              cube. In some recent games, to complete optional points or to have
              better field mobility, robots also need to clear a low bar,
              imposing a height restriction.
            </p>
            <p>
              Since packaging and size limitations will always be a crucial
              factor in designing an FTC robot, I decided to build the absolute
              shortest holonomic drivetrain possible.
            </p>
            <p>
              As far as holonomic drivebases go, I had a few choices: x-drive,
              mecanum drive, h-drive, or swerve drive. Our team has experience
              with all four, so I decided to choose a mecanum drive because it
              was the most space-efficient and versatile drivebase for a variety
              of game challenges.
            </p>
            <p>
              I decided to use 60mm mecanum wheels originally marketed as
              vectored intake wheels. These wheels are constructed with thin
              aluminum plates, so making a traditional four-wheel drivetrain
              cannot hold an entire 40lb robot. Therefore, to increase the
              load-bearing capacity but retain the low-profile stature, I added
              four more wheels – an eight-wheel mecanum!
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/mecanum-render.jpg"
            />
            <p>
              My design also includes a few novel drivetrain concepts. All eight
              wheels are “dead-axled,” which means that there is stationary bolt
              providing both compressive structural support for the driverails,
              and load-bearing support for each wheel. This reduces the need for
              additional spacers clamping the driverails. Additionally, I
              decided to experiment with SLA printed pillow blocks and spacers
              for the chassis. Typically, FDM prints tend to delaminate along
              the layer lines when printed parallel to the driverails from
              collisions with other robots. The SLA prints are more isotropic
              and should better withstand side collisions.
            </p>
            <p>
              Since this drivebase is going to be exotic, I upped the gearing
              ratio to produce a maximum theoretical speed of 442 feet/min,
              instead of the highly used 328 feet/min. This will give the
              drivebase a faster top speed but less acceleration. I was
              predicting that any robot using this drivetrain will be very
              compact, lightweight, and nimble.
            </p>
            <p>
              Overall, the drivebase comes in at just under 3 inches tall. This
              leaves over 15 inches of room for subsystems. For comparison, most
              off-the-shelf mecanum wheels are 4 inches or larger in diameter!
              Additionally, because of the small wheel size, the drive rails are
              very thin and the electronics bay is compact as possible, giving
              an front intake a lot of room for packaging.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/mecanum-top.jpg"
            />
            <p>
              We used this drivebase for extensive testing when identifying the
              ideal drivetrain for competition. It performed great – even
              against heavy defense, it zipped around our other drivebases with
              ease!
            </p>
            <img
              className="modalImage"
              src={mecanumPractice}
              alt="Drive practice with four prototype drivebases"
            />
            <p className="text-center text-gray-300">
              <i>
                A little bit of drive practice with the swerve drive, tank
                drive, four-wheel mecanum, and eight-wheel mecanum.
              </i>
            </p>
            <p>
              Additionally -- as I had suspected, the additional four wheels do
              add scrub when turning the wheelbase. However, curiously, this has
              actually been beneficial for handling – the drive tends to have
              greater forwards-backwards bias because of the wheel-locking
              effect.
            </p>
            <p>
              The wheel-locking effect can explain the full-power forwards and
              backwards phenomenon of mecanum drivetrains. Conceptually, a
              mecanum drive should accelerate equally well strafing as forwards
              and backwards. However, because of the static friction in the
              mecanum rollers, they act as solid wheels when not in motion,
              causing the robot to fully accelerating driving forwards rather
              that the sqrt(2)/2 acceleration seen while strafing. The
              additional scrub of the eight wheels broadens the angular range in
              which roller stiction occurs, allowing the drive to be even
              further biased forwards and backwards.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="pathfinder"
          onClick={() => this.handleOpenModal("pathfinder")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/pathfinder-gui.jpg"
          />
          <h1 className="text-lg text-teal-100">Robot Pathfinder</h1>
          <i className="text-gray-400">Summer 2019</i>
          <p className="text-gray-300">
            Program to autonomously pathfind, avoid preset obstacles, and drive
            robot between programmed waypoints
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={
            this.state.showModal && this.state.activeModal === "pathfinder"
          }
          onRequestClose={this.handleCloseModal}
          contentLabel="pathfinder modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Robot Pathfinder
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Program to autonomously pathfind, avoid preset obstacles, and
              drive robot between programmed waypoints
            </h2>
            <p>
              The fun thing about control theory is that systems can always be
              optimized further with more complex control schemes.
            </p>
            <p>
              In the case of high-school FIRST Tech Challenge, control theory
              can play a big part in a robot’s competition performance. In every
              match, a robot can complete tasks in a 30-second autonomous period
              for big points. Therefore, if a robot can manuever quickly and
              precisely during this period, it can accrue a significant portion
              of the points in the entire match.
            </p>
            <p>
              Most high-school robots use simple point-to-point driving control
              using motor encoders. While it’s simple to program, straight lines
              are not optimal routes and motor encoder control is far from ideal
              due to wheel slippage errors.
            </p>
            <img
              className="modalImage"
              src={pathfinderOld}
              alt="Robot driving point to point paths"
            />
            <p className="text-center text-gray-300">
              <i>Our 2019 robot completing basic autonomous tasks.</i>
            </p>
            <p>
              That’s why I decided to research and write a controller to learn
              more about optimal pathfinding and control theory. I wrote the
              code from scratch and it contains three parts: a path router with
              obstacle avoidance, a realtime pure-pursuit controller, and a
              visualizer.
            </p>
            <p>
              The realm of holonomic drive control is very complicated, and
              there are often multiple solutions with tradeoffs. When
              researching different pathfinding solutions, the most common being{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sciencedirect.com/science/article/pii/S1474667015310041"
              >
                hermite splines
              </a>{" "}
              or{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://brilliant.org/wiki/dijkstras-short-path-finder/"
              >
                Dijkstra’s algorithm
              </a>{" "}
              superimposed on a grid, the biggest consideration was time
              complexity, given our robot’s underpowered controller. Even though
              the autonomous pathfinding would likely be computed offboard, I
              wanted to figure out a solution for the robot to contruct paths on
              the fly for driver-assistance.
            </p>
            <p>
              I decided to pursue an{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.geeksforgeeks.org/a-search-algorithm/"
              >
                A* search algorithm
              </a>{" "}
              to produce paths. A* is a slight variation of Dijkstra’s search
              algorithm, using heuristics (a weighted node graph) to find paths
              with less time complexity. Using a weighted graph also allows for
              some neat things – for example, edges can be marked with higher
              cost so the robot will not get close to the walls unless it has
              to.
            </p>
            <p>
              This is a visual example of a node graph generated automatically
              by my field obstacle script. Each number describes the cost of
              traveling to that node. Notice that the left side of the field
              (the opponent’s side) is completely blocked off by untraversable
              nodes.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/pathfinder-graph.jpg"
            />
            <p>
              Next, I wrote a simple A* algorithm that connects multiple nodes
              together with shortest path. Each middle node is meant to redirect
              the robot’s path and doesn’t serve as a hard point for the robot
              to follow. Though the path is quite jagged due to the discrete
              graph size, the real-time controller will smooth over the route.
            </p>
            <StaticImage
              className="sm:max-h-[24rem] aspect-square sm:m-4 sm:mx-auto text-center rounded-lg"
              src="../../projects/media/pathfinder-astar.jpg"
            />
            <p className="text-center text-gray-300">
              <i>
                Field drawn with Adobe Illustrator and painted with{" "}
                <a
                  className="text-teal-100 hover:text-teal-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://openjfx.io/"
                >
                  JavaFX
                </a>
                .
              </i>
            </p>
            <p>
              However, contructing paths is only a part of the puzzle. The real
              challenge was figuring out a robust controller to follow the path
              accurately. For this part, I researched many controllers:{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="http://underactuated.mit.edu/lqr.html"
              >
                linear quadratic regulators
              </a>
              ,{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.wpilib.org/en/stable/docs/software/advanced-controls/trajectories/ramsete.html"
              >
                Ramsete
              </a>
              ,{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ri.cmu.edu/pub_files/pub3/coulter_r_craig_1992_1/coulter_r_craig_1992_1.pdf"
              >
                pure pursuit
              </a>
              , and even pathfinding with a vector field. I was looking for a
              controller that was robust that did not require extreme
              fine-tuning to work in every scenario.
            </p>
            <p>
              I decided to stick with a simple solution: pure pursuit. This
              strategy involves projecting a circle around the robot and change
              the heading to follow the circle’s intersection with the path.
              This controller is very robust because there is no way for the
              robot to track off-course in the event of small path
              discontinuities or sharp points if the search radius is large
              enough. In addition, this scheme also automatically smooths the
              path and can be driven closed-loop with field localization
              (encoders, odometry, IMU, etc.) However, pure pursuit is not the
              most accurate pathfollower and the true path can vary between
              attempts.
            </p>
            <img
              className="sm:max-h-[24rem] aspect-square sm:m-4 sm:mx-auto text-center rounded-lg"
              src={pathfinderPursuit}
              alt="Virtual robot pathfinding"
            />
            <p>
              I am pretty impressed how this controls project turned out. For a
              summer side-project while I did my first internship with Jacobi
              Motors, I am happy how much I learned researching and building
              this project. It really taught me a lot and prepared me for making
              mechanical systems designed for effective control.
            </p>
            <p>
              There’s still a lot to do with this project. First, it does not
              take advantage of holonomic drivetrains; pure pursuit is a
              differential drive controller. Second, we did not have the
              opportunity to test this controller in the real world, despite
              simulating real-world tracking disturbances. Finally, we have not
              mastered an effective form of localization for this level of
              precision yet. However, many other teams have successfully
              employed a three-wheel odometry system to separate drive-wheel
              slippage from field localization.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="rover"
          onClick={() => this.handleOpenModal("rover")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/rover-side.jpg"
          />
          <h1 className="text-lg text-teal-100">
            Rover Ruckus (FIRST Tech Challenge)
          </h1>
          <i className="text-gray-400">Fall 2018 - Spring 2019</i>
          <p className="text-gray-300">
            Cube and ball transport robot with extending intake and prototype
            rotary spring launcher.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "rover"}
          onRequestClose={this.handleCloseModal}
          contentLabel="rover modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">Rover Ruckus</h1>
            <h2 className="text-lg text-gray-300 text-center">
              Cube and ball transport robot with extending intake and prototype
              rotary spring launcher.
            </h2>
            <p>Please check back later!</p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/rover-render.jpg"
            />
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="quadcopter"
          onClick={() => this.handleOpenModal("quadcopter")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/quadcopter-side.jpg"
          />
          <h1 className="text-lg text-teal-100">Racing Quadcopter</h1>
          <i className="text-gray-400">Summer 2018</i>
          <p className="text-gray-300">
            Ultra-lightweight 250mm quadcopter built with custom CNC-milled
            chassis
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={
            this.state.showModal && this.state.activeModal === "quadcopter"
          }
          onRequestClose={this.handleCloseModal}
          contentLabel="quadcopter modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Racing Quadcopter
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Ultra-lightweight 250mm quadcopter built with custom CNC-milled
              chassis
            </h2>
            <p>
              I’ve always been fascinated by multirotors and electromechanical
              systems that make them work. For this project, I wanted to create
              an ultralight 250mm quadcopter that is durable enough to get
              started and learn first-person-view (FPV) drone piloting.
            </p>
            <p>
              I started by ordering the electronics. In the past, I have
              experimented with Arduino-based quadcopter control, but modern
              dedicated multirotor controllers have significantly higher clock
              speeds, resulting in more responsive tuning and control.
              Therefore, I got a STM32 F4 control board, four decentralized BLDC
              ESCs, a FPV camera and signal board, a transmitter board, a couple
              of 4S LiPo batteries, and, of course, four BLDCs.
            </p>
            <p>
              By ordering the electronics first, I could be sure that everything
              worked so that I could design a frame around the components. This
              meant that the design would be purpose-built to these specific
              components, saving weight and reducing volume.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/quadcopter-wiring.jpg"
            />
            <p>
              The frame itself is built with sandwiched thin CNC milled aluminum
              sheets that provide protection for the boards and mounting points
              for the swappable arms. The antenna and camera shrouds are 3D
              printed out of impact-resistance polycarbonate. Because I knew the
              mass and location of every part (unlike in off-the-shelf frames),
              I could position the center of mass directly at the propeller
              plane. That’s why the battery is nearly completely centered with
              the propellers, and it seriously improves the quadcopter’s
              handling!
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/quadcopter-side.jpg"
            />
            <p>
              The quadcopter arms must be stiff and lightweight – that’s why I
              originally made a few of sets out of a carbon fiber layup with a
              printed polycarbonate core. I was experimenting with different
              carbon fiber layups, and I wanted to figure out a way of producing
              composite plugs and cores with printed material. These arms were
              extremely rigid and lightweight, but they were very brittle.
            </p>
            <p>
              After a few test flights, I realized my quadcopter arms needed to
              be consumable. I was breaking arms with every crash and it would
              be difficult to replace every arm with a composite layup every
              time. I went ahead and CNC milled a bunch of polycarbonate arms,
              and while they weren’t as rigid, they held up to crashes much
              better!
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/quadcopter-assembled.jpg"
            />
            <p className="text-center text-gray-300">
              <i>Quadcopter equipped with carbon-composite arms.</i>
            </p>
            <p>
              This quadcopter really rips through the air. It’s super quick,
              responsive, and feels massless at the controls. It’s everything I
              designed it for, and I’m happy how it turned out.
            </p>
            <p>
              However, because of its extremely small volume, I can’t put a
              GoPro or high-resolution camera on it. I have to pilot the
              quadcopter off the low-resolution FPV camera. In the future, I
              hope to make a slighly heavier freestyle quadcopter to carry a
              better camera.
            </p>
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="relic"
          onClick={() => this.handleOpenModal("relic")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/relic-side.jpg"
          />
          <h1 className="text-lg text-teal-100">
            Relic Recovery (FIRST Tech Challenge)
          </h1>
          <i className="text-gray-400">Fall 2017 - Spring 2018</i>
          <p className="text-gray-300">
            Cube-stacking robot with cam-actuated 2 DoF roller intake and
            linkage claw deposit.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "relic"}
          onRequestClose={this.handleCloseModal}
          contentLabel="relic modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Relic Recovery
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Cube-stacking robot with cam-actuated 2 DoF roller intake and
              linkage claw deposit.
            </h2>
            <p>Please check back later!</p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/relic-render.jpg"
            />
          </div>
        </Modal>

        <div
          className="modalTile"
          aria-label="fusor"
          onClick={() => this.handleOpenModal("fusor")}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <StaticImage
            className="modalThumbnail"
            src="../../projects/media/fusor-ionized.jpg"
          />
          <h1 className="text-lg text-teal-100">Farnsworth-Hirsch Fusor</h1>
          <i className="text-gray-400">Spring 2017</i>
          <p className="text-gray-300">
            Rudimentary demonstration of inertial confinement to produce
            fusion-like conditions.
          </p>
        </div>
        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "fusor"}
          onRequestClose={this.handleCloseModal}
          contentLabel="fusor modal"
          ariaHideApp={false}
        >
          <div
            className="modalExit"
            onClick={this.handleCloseModal}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon
              size="5x"
              icon={faTimes}
              className="modalExitIcon"
            />
          </div>
          <div className="modalContent">
            <h1 className="text-4xl text-teal-100 text-center">
              Farnsworth-Hirsch Fusor
            </h1>
            <h2 className="text-lg text-gray-300 text-center">
              Rudimentary demonstration of inertial confinement to produce
              fusion-like conditions.
            </h2>
            <p>
              For a school science exhibition, I set out to make a nuclear
              fusion reactor, or fusor, using a{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.belljar.net/634fusor.pdf"
              >
                Farnsworth-Hirsch reactor
              </a>{" "}
              design. With a high vacuum chamber and two concentric grids with a
              high voltage difference, inertial confinement can be achieved to
              fuse deuterium isotopes into helium and tritium.
            </p>
            <p>
              This fusor is designed for demonstration and research purposes.
              Since I would be constructing a{" "}
              <a
                className="text-teal-100 hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.vacuumscienceworld.com/rough-medium-vacuum"
              >
                medium-vacuum
              </a>{" "}
              fusor because of budget and safety reasons, I would not be able to
              achieve perfect fusion conditions. Therefore, in its current form,
              the fusor effectively ionizes the few remaining gas particles.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/fusor-ionized.jpg"
            />
            <p>
              The fusor consists of two parts: a vacuum chamber and a
              high-voltage grid.
            </p>
            <p>
              For the vacuum system, I used a rotary vane pump plumbed to the
              chamber. It’s capable of pulling up to 0.03 mmHg vacuum, which
              falls under the “medium-vacuum” class.
            </p>
            <p>
              The vacuum chamber itself is constructed with two 0.5” aluminum
              billets sandwiching a borosilicate glass tube. All plumbing
              connections are drilled and NPT-tapped to seal the chamber.
            </p>
            <p>
              I originally had a lot of issues with sealing the NPT connections,
              and after weeks of rewrapping Teflon tape and dripping soapy
              water, it turned out that I just tapped the tapered threads too
              deep.
            </p>
            <StaticImage
              className="modalImage"
              src="../../projects/media/fusor-depowered.jpg"
            />
            <p>
              Making the fusor grid was challenging, and I still haven’t
              mastered the best way to construct it. The grid should be
              constructed with a high-temperature, low-resistance wire assembled
              with either soldering or brazing to avoid sharp edges and arcing.
              In the end, I ended up using soldered copper wire bent into a
              sphere. This wasn’t ideal because the copper would warp with the
              heat and produce uneven ionization across its surface.
            </p>
            <StaticImage
              className="md:w-[50%] aspect-square md:m-4 md:mx-auto text-center rounded-lg"
              src="../../projects/media/fusor-grid.jpg"
            />
            <p>
              On the electrical side, I used a variac AC power supply with a
              high voltage neon sign transformer. Boosting the AC voltage
              directly from mains was much easier than trying to rectify the AC
              voltage first and using a DC boost converter. The high voltage AC
              then goes into a homemade microwave diode rectifier that provides
              the 14kV DC voltage potential between the grounded vacuum chamber
              and the fusor grid.
            </p>
            <StaticImage
              className="md:w-[30%] md:m-4 md:mx-auto text-center rounded-lg"
              src="../../projects/media/fusor-setup.jpg"
            />
            <p>
              All in all, I succeeded in making a good model for demonstrating
              inertial electrostatic confinement fusion. This project was one of
              my first big projects, and I learned a lot about electricity,
              mechanical vacuum systems, and physics when researching and
              designing this project.
            </p>
            <p>
              I think that with my knowledge now and a larger budget, I could
              make a higher-performance fusor and perhaps even look into
              sourcing deuterium to truly achieve fusion.
            </p>
            <p>
              The major upgrades for this fusor would likely be replacing all of
              the components with non-outgassing materials, adding a
              second-stage diffusion or turbomolecular pump, and welding
              together a proper tantalum-tungsten grid. Plus, I'd like to make
              the whole thing a lot safer.
            </p>
          </div>
        </Modal>
      </>
    );
  }
}
export default ProjectModals;
