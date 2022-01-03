import React from "react";
import Modal from "react-modal";
import "/src/components/modal.css";

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




        <div className="tile" aria-label="Login" onClick={() => this.handleOpenModal("login")}>
          <p>One</p>
        </div>

        {/* prettier-ignore */}
        <Modal className="modal-portal" overlayClassName="modal-overlay" isOpen={this.state.showModal && this.state.activeModal === "login"} onRequestClose={this.handleCloseModal} contentLabel="login modal" ariaHideApp={false} >
          <FontAwesomeIcon color="#81e5d9" size="6x" icon={faTimes} className="modal-exit" onClick={this.handleCloseModal} />
          <div class="modal-portal-content">
            <div className= "title">
              <h1>Projects</h1>
            </div>
            <p>Text</p> 
          </div>
        </Modal>


        <div className="tile" onClick={() => this.handleOpenModal("calendar")}>
          Two
        </div>

        <Modal
          className="modal-portal"
          overlayClassName="modal-overlay"
          isOpen={this.state.showModal && this.state.activeModal === "calendar"}
          onRequestClose={this.handleCloseModal}
          contentLabel="calendar modal"
          ariaHideApp={false}
        >
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modal-exit"
            onClick={this.handleCloseModal}
          />
          <div class="modal-portal-content">
            <h1>Header</h1>
            <p>Text</p>
          </div>
        </Modal>

        <div className="tile" onClick={() => this.handleOpenModal("team")}>
          Three
        </div>

        <Modal
          className="modal-portal"
          overlayClassName="modal-overlay"
          isOpen={this.state.showModal && this.state.activeModal === "team"}
          onRequestClose={this.handleCloseModal}
          contentLabel="team modal"
          ariaHideApp={false}
        >
          <FontAwesomeIcon
            color="#81e5d9"
            size="6x"
            icon={faTimes}
            className="modal-exit"
            onClick={this.handleCloseModal}
          />
          <div class="modal-portal-content">
            <h1>Header</h1>
            <p>Text</p>
          </div>
        </Modal>

      </>
    );
  }
}
export default ProjectModals;
