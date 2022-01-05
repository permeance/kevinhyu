import React from "react";
import Modal from "react-modal";

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
        <div className="w-full h-80 bg-gray-800 border border-gray-600 rounded-xl hover:border-teal-100 text-center" aria-label="Login" onClick={() => this.handleOpenModal("one")}>
          One
        </div>

        {/* prettier-ignore */}
        <Modal className="absolute top-10 left-10 right-10 p-16 max-h-screen rounded-2xl z-20 bg-gray-800 overflow-scroll" overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-30" isOpen={this.state.showModal && this.state.activeModal === "one"} onRequestClose={this.handleCloseModal} contentLabel="one modal" ariaHideApp={false} >
          <FontAwesomeIcon color="#81e5d9" size="6x" icon={faTimes} className="fixed h-16 w-16 top-20 right-20 hover:text-white" onClick={this.handleCloseModal} />
          <div className="flex flex-col flex-start text-left gap-5">
            <h1 className="text-5xl text-teal-100 text-center">one</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p> 
          </div>
        </Modal>

        <div className="w-full h-80 bg-gray-800 border border-gray-600 rounded-xl hover:border-teal-100 text-center" onClick={() => this.handleOpenModal("two")}>
          Two
        </div>

        <Modal className="absolute top-10 left-10 right-10 p-16 max-h-screen rounded-2xl z-20 bg-gray-800 overflow-scroll" overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-30" isOpen={this.state.showModal && this.state.activeModal === "two"} onRequestClose={this.handleCloseModal} contentLabel="two modal" ariaHideApp={false} >
          <FontAwesomeIcon color="#81e5d9" size="6x" icon={faTimes} className="fixed h-16 w-16 top-20 right-20 hover:text-white" onClick={this.handleCloseModal} />
          <div className="flex flex-col flex-start text-left gap-5">
            <h1 className="text-5xl text-teal-100 text-center">two</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p> 
          </div>
        </Modal>

        <div className="w-full h-80 bg-gray-800 border border-gray-600 rounded-xl hover:border-teal-100 text-center" onClick={() => this.handleOpenModal("three")}>
          Three
        </div>

        <Modal className="absolute top-10 left-10 right-10 p-16 max-h-screen rounded-2xl z-20 bg-gray-800 overflow-scroll" overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-30" isOpen={this.state.showModal && this.state.activeModal === "three"} onRequestClose={this.handleCloseModal} contentLabel="three modal" ariaHideApp={false} >
          <FontAwesomeIcon color="#81e5d9" size="6x" icon={faTimes} className="fixed h-16 w-16 top-20 right-20 hover:text-white" onClick={this.handleCloseModal} />
          <div className="flex flex-col flex-start text-left gap-5">
            <h1 className="text-5xl text-teal-100 text-center">three</h1>
            <h2 className="text-xl text-white text-center">Stuff</h2>
            <p>Text</p> 
          </div>
        </Modal>
      </>
    );
  }
}
export default ProjectModals;
