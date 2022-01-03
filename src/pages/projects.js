import React from "react";
import Layout from "../components/layout";
import {Helmet} from "react-helmet";


import ProjectModals from "/src/components/projectModals";
{/* change to /project/ProjectModals*/}

const ProjectsPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <Layout>

      <Helmet>
        <title>Projects | Kevin Yu</title>
        <html lang="en" />
        <meta name="Projects" content="Kevin Yu's Project Portfolio" />
      </Helmet>

      <section style={{"padding": "0", "margin": "10rem auto 0 auto"}}>
        <div className="title">
          <h1>Projects</h1>
          <h2 className="white">
            Here's a brief look at some of the projects I've worked on! Please
            reach out for specific details.
          </h2>
        </div>
      </section>
      <section style={{"padding": "0", "margin": "10rem auto"}}>
        <div className="projects">
          <ProjectModals/>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
