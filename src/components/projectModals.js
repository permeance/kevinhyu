import React from "react";
import Modal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ showModal: "" });
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Website</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Battery Management System PCB
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Carbon Filament Winder
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Mechanical Keyboard
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
            Launched startup to address medical demand for solvent-resistant
            tailored face shields.
          </p>
        </div>

        <Modal
          className="modalPortal"
          isOpen={this.state.showModal && this.state.activeModal === "cms"}
          onRequestClose={this.handleCloseModal}
          contentLabel="cms modal"
          ariaHideApp={false}
        >
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Custom Medical Shields
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">CNC Router</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">F4 Cadathon</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Printer</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Skystone</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Mecanum</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Rover Ruckus</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">Quadcopter</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <i className="text-gray-400">Summer 2018</i>
          <p className="text-gray-300">
            Visualizer to autonomously pathfind, avoid preset obstacles, and
            drive robot between programmed waypoints
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Robot Pathfinder
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Relic Recovery
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
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
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modalExit"
            onClick={this.handleCloseModal}
          />
          <div className="modalContent">
            <h1 className="text-5xl text-teal-100 text-center">
              Farnsworth-Hirsch Fusor
            </h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p>
          </div>
        </Modal>
      </>
    );
  }
}
export default ProjectModals;
