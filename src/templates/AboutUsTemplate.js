import React from "react";
import PropTypes from "prop-types";
const AboutUsTemplate = ({
  data // this prop will be injected by the GraphQL query below.
}) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
      </div>
    </div>
  );
};

AboutUsTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default AboutUsTemplate;

export const pageQuery = graphql`
  query aboutUsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
