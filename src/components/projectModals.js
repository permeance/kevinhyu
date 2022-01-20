import React from "react";
import Modal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import websiteResize from "../../projects/media/website-resize.gif";
import keyboardAnimation from "../../projects/media/keyboard-animation.gif";

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
              It's built and deployed with{" "}
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
              I was particularly nervous about soldering the buck converter QFN
              chip, since all of the pads were underneath the chip. Initially, I
              made a few mistakes with overheating the boards with a hot-air
              gun. Since I was using non-leaded solder, the melting temperature
              required had to be very precisely controlled. However, the Texas
              Inventionworks laboratory had a proper reflow oven that worked
              great for soldering the entire second PCB.
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
              as intended! However, unfortunately, it will likely not be used
              for this year's electric racecar because of the lack of time to
              rigorously test as a alternative for the time-tested LFP battery.
              Additionally, the board poses uncertainties with backflowing
              current, as it is in parallel with the DC/DC converter on the main
              battery.
            </p>
            <p>
              All in all, though, this project was a success and I learned a lot
              about power electronics design and soldering QFN chips. It was my
              first high-current board and I’m glad I taught myself thermal
              considerations when constructing and testing the PCB.
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
              few pulleys to guide the spool into the end effector,{" "}
              <i>and I was finished!</i>
            </p>
            <StaticImage
              src="../../projects/media/winder-frayed.jpg"
              className="modalImage"
            />
            <p>
              <i>
                <b>Not quite.</b>
              </i>
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
              wiring, the keyboard looks sleek and low profile. And it feels
              great, nearly no noise at all!
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
              <i>Two dentists from Frisco, Texas, wearing our shields</i>
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
            <p>
              We launched the company in April 2020 right after school moved to
              virtual. Of course, at first, we did not have any orders. To pitch
              our brand, we began sending free shields to dentists in Austin.
              This began to pick up a lot of traffic on our site—within the
              first couple of weeks, we hit over $1,000 in revenue. And over the
              next few months, our operation expanded to sending shields to
              dentists in different states: Arizona, Florida, California, New
              York, and further.
            </p>
            <p>
              Learning how to scale production was a big learning opportunity.
              Some weeks we did not receive orders, and other weeks we would get
              big orders—some as large as 40 shields.
            </p>
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
              We stopped our operation on May 2021 after seeing less interest in
              face shields because of vaccinations and COVID cases declining.
              Altogether, we sold over 300 shields and donated nearly 250
              shields.
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
            <p>I set out to fix that.</p>
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
              <i>Foggy!</i>
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
          <h1 className="text-lg text-teal-100">F4 Cadathon</h1>
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
            <h1 className="text-4xl text-teal-100 text-center">F4 Cadathon</h1>
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h1 className="text-4xl text-teal-100 text-center">Printer</h1>
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h1 className="text-4xl text-teal-100 text-center">Mecanum</h1>
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h1 className="text-4xl text-teal-100 text-center">Quadcopter</h1>
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
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
            fusion-like conditions for a school exhibition.
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
            <h2 className="text-lg text-gray-300 text-center">Stuff</h2>
            <p>Text</p>
          </div>
        </Modal>
      </>
    );
  }
}
export default ProjectModals;
