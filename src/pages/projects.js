import React from "react";
import {Helmet} from "react-helmet";

import Layout from "../components/layout";

import ProjectModals from "/src/components/projectModals";

const ProjectsPage = () => {

  return (
    <Layout>
      <Helmet>
        <title>Projects | Kevin Yu</title>
        <meta name="description" content="Kevin Yu's Project Portfolio" />
        <meta name="robots" content="all" />
        <html lang="en" />
      </Helmet>

      <div className="max-w-screen-xl m-auto">
        <section className="mt-40 mb-40">
          <h1 className="m-10 text-center text-teal-100 font-bold text-5xl">Projects</h1>
          <h2 className="mx-10 text-center text-white text-2xl">
            Here's a brief look at some of the recent projects I've worked on! Please
            reach out for specific details.
          </h2>
        </section>

        <section>
          <div className="mx-6 mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectModals/>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ProjectsPage;
