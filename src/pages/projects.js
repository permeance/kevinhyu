import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <title>Projects | Kevin Yu</title>
      <meta name="Projects" content="Kevin Yu's Project Portfolio"></meta>
      <main>
        <div class="content">
          <ul>
            {data.allFile.nodes.map((node) => (
              <li key={node.name}>{node.name}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default ProjectsPage;
