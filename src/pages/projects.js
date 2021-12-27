import React from "react";
import Modal from "react-modal";
import Layout from "../components/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <Layout>
      <title>Projects | Kevin Yu</title>
      <meta name="Projects" content="Kevin Yu's Project Portfolio" />
      
      <section>
        <div class="title">
          <h1>Projects</h1>
          <h2 class="white">
            Here's a brief look at some of the projects I've worked on! Please
            reach out for a full portfolio.
          </h2>
        </div>
      </section>
      
      <section class="gradient">
        <div class="projects">

          <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
        </div>
      </section>
      
      <Modal className="modal-portal" overlayClassName="modal-overlay" isOpen={modalIsOpen} contentLabel="onRequestClose Example" onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false} >
        <FontAwesomeIcon color="#81e5d9" size="6x" icon={faTimes} className="modal-exit" onClick={() => setModalIsOpen(false)}/>
        
        
        <div class="modal-portal-content">
          <h1>Header</h1>
          <p>Text</p>
        </div>
      </Modal>

    </Layout>
  );
};

export default ProjectsPage;
